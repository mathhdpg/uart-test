import { IOEquipamentParameter } from "./IOEquipamentParameter";

export class Equipment {

    // equipment sensors
    private _waterLevelSensor: IOEquipamentParameter = new IOEquipamentParameter('E0', null, 0, 1, true, false, true);
    private _waterTemperatureSensor: IOEquipamentParameter = new IOEquipamentParameter('E1', null, -40, 150, true, false, true);
    private _flowLevelSensor: IOEquipamentParameter = new IOEquipamentParameter('E2', null, 0, 1, true, false, true);
    private _ambientTemperatureSensor: IOEquipamentParameter = new IOEquipamentParameter('E3', null, -40, 150, true, false, true);
    private _handpieceTemperatureSensor: IOEquipamentParameter = new IOEquipamentParameter('E4', null, -40, 150, true, false, true);
    private _handpieceConnectionSensor: IOEquipamentParameter = new IOEquipamentParameter('E5', null, 0, 1, true, false, true);
    // application parameters
    private _energy: IOEquipamentParameter = new IOEquipamentParameter('P1', 1, 0, 100, true, true, true);
    private _pulseWidth: IOEquipamentParameter = new IOEquipamentParameter('P2', 1, 0, 300, true, true, true);
    private _frequency: IOEquipamentParameter = new IOEquipamentParameter('P3', 1, 0, 10, true, true, true);
    private _handpieceCooling: IOEquipamentParameter = new IOEquipamentParameter('P4', 0, 0, 1, true, true, true);
    // application status
    private _start: IOEquipamentParameter = new IOEquipamentParameter('S0', 0, 0, 1, true, true, true);
    // equipment settings
    private _handpieceTemperature: IOEquipamentParameter = new IOEquipamentParameter('T0', null, -10, 1, true, true, false);
    private _waterTemperature: IOEquipamentParameter = new IOEquipamentParameter('T1', null, -10, 10, true, true, false);
    private _ambientTemperature: IOEquipamentParameter = new IOEquipamentParameter('T2', null, -10, 10, true, true, false);
    private _outputCurrent: IOEquipamentParameter = new IOEquipamentParameter('T3', 0, 0, 100, true, true, false);
    private _outputEnergy: IOEquipamentParameter = new IOEquipamentParameter('T4', 0, 0, 115, true, true, false);
    // use status
    private _counter: IOEquipamentParameter = new IOEquipamentParameter('Y1', 0, 0, 1, true, true, true);

    public get waterLevelSensor(): IOEquipamentParameter { return this._waterLevelSensor; }
    public get waterTemperatureSensor(): IOEquipamentParameter { return this._waterTemperatureSensor; }
    public get flowLevelSensor(): IOEquipamentParameter { return this._flowLevelSensor; }
    public get ambientTemperatureSensor(): IOEquipamentParameter { return this._ambientTemperatureSensor; }
    public get handpieceTemperatureSensor(): IOEquipamentParameter { return this._handpieceTemperatureSensor; }
    public get handpieceConnectionSensor(): IOEquipamentParameter { return this._handpieceConnectionSensor; }
    public get energy(): IOEquipamentParameter { return this._energy; }
    public get pulseWidth(): IOEquipamentParameter { return this._pulseWidth; }
    public get frequency(): IOEquipamentParameter { return this._frequency; }
    public get handpieceCooling(): IOEquipamentParameter { return this._handpieceCooling; }
    public get start(): IOEquipamentParameter { return this._start; }
    public get handpieceTemperature(): IOEquipamentParameter { return this._handpieceTemperature; }
    public get waterTemperature(): IOEquipamentParameter { return this._waterTemperature; }
    public get ambientTemperature(): IOEquipamentParameter { return this._ambientTemperature; }
    public get outputCurrent(): IOEquipamentParameter { return this._outputCurrent; }
    public get outputEnergy(): IOEquipamentParameter { return this._outputEnergy; }
    public get counter(): IOEquipamentParameter { return this._counter; }

}