import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';
import { Equipment } from './Equipment';

const { CommunicationModule } = NativeModules;
const communicationEmitter = new NativeEventEmitter(CommunicationModule);

// Define o valor inicial do contexto
const defaultEquipmentStatus = new Equipment();
const EquipmentStatusContext = createContext({
  equipment: defaultEquipmentStatus
});

interface EquipmentStatusProviderProps {
  children: ReactNode;
}

export const EquipmentStatusProvider: React.FC<EquipmentStatusProviderProps> = ({ children }) => {
  const [equipment, setEquipment] = useState<Equipment>(defaultEquipmentStatus);
  useEffect(() => {
    const subscription = communicationEmitter.addListener('onMessageReceived', (event) => {
      console.log(event.message);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <EquipmentStatusContext.Provider value={{ equipment }}>
      {children}
    </EquipmentStatusContext.Provider>
  );
};

export const useEquipmentStatus = () => useContext(EquipmentStatusContext);
