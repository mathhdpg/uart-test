import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useEquipmentStatus } from './Equipment/EquipmentStatusProvider';

function App(): React.JSX.Element {
  
  const { equipment } = useEquipmentStatus();
  
  return (
    <SafeAreaView>
      <View>
        <Text>Status do Equipamento:</Text>
        <Text>waterLevelSensor: {equipment.waterLevelSensor.value || 'N/A'}</Text>
        <Text>waterTemperatureSensor: {equipment.waterTemperatureSensor.value || 'N/A'}</Text>
        <Text>flowLevelSensor: {equipment.flowLevelSensor.value || 'N/A'}</Text>
        <Text>ambientTemperatureSensor: {equipment.ambientTemperatureSensor.value || 'N/A'}</Text>
        <Text>handpieceTemperatureSensor: {equipment.handpieceTemperatureSensor.value || 'N/A'}</Text>
        <Text>handpieceConnectionSensor: {equipment.handpieceConnectionSensor.value || 'N/A'}</Text>
        <Text>energy: {equipment.energy.value || 'N/A'}</Text>
        <Text>pulseWidth: {equipment.pulseWidth.value || 'N/A'}</Text>
        <Text>frequency: {equipment.frequency.value || 'N/A'}</Text>
        <Text>handpieceCooling: {equipment.handpieceCooling.value || 'N/A'}</Text>
        <Text>start: {equipment.start.value || 'N/A'}</Text>
        <Text>handpieceTemperature: {equipment.handpieceTemperature.value || 'N/A'}</Text>
        <Text>waterTemperature: {equipment.waterTemperature.value || 'N/A'}</Text>
        <Text>ambientTemperature: {equipment.ambientTemperature.value || 'N/A'}</Text>
        <Text>outputCurrent: {equipment.outputCurrent.value || 'N/A'}</Text>
        <Text>outputEnergy: {equipment.outputEnergy.value || 'N/A'}</Text>
        <Text>counter: {equipment.counter.value || 'N/A'}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
