import { CommunicationEncoder } from "./CommunicationEncoder";

export class IOEquipamentParameter {
    private _identifier: string;

    private _value: number | null;
    private _minValue: number;
    private _maxValue: number;

    private _read: boolean;
    private _write: boolean;
    private _notify: boolean;

    constructor(identifier: string, value: number | null, minValue: number, maxValue: number, read = true, write: boolean, notify = true) {
        this._identifier = identifier;
        this._value = value;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._read = read;
        this._write = write;
        this._notify = notify;
    }

    public set value(value: number | null) {
        if (value !== null && value < this._minValue && value > this._maxValue) {
            throw new Error('Invalid value');
        }
        this._value = value;
    }

    public get value(): number | null { return this._value; }
    public get identifier(): string { return this._identifier; }
    public get notify(): boolean { return this._notify; }
    public get isRead(): boolean { return this._read; }
    public get isWrite(): boolean { return this._write; }

    getReadCommand(): string {
        if (!this._read) throw new Error('Parameter is not readable');
        return CommunicationEncoder.encode({ parameter: this, command: 'READ' });
    }

    getWriteCommand(): string {
        if (!this._write) throw new Error('Parameter is not readable');;
        return CommunicationEncoder.encode({ parameter: this, command: 'WRITE' });
    }
}
    
