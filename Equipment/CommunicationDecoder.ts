import { IOEquipamentParameter } from "./IOEquipamentParameter";

const START_CODE = 0x5AA5;
const READ_CODE = 0x52;
const WRITE_CODE = 0x57;
const END_CODE = 0xCC33C33C;

export class CommunicationDecoder {

    public static decode(message: string): void {
        const startCode = parseInt(message.slice(0, 4), 16);
        if (startCode !== START_CODE) {
            throw new Error("Invalid start code");
        }

        const length = parseInt(message.slice(4, 8), 16);
        const command = parseInt(message.slice(8, 10), 16);
        const identifier = this.convertHexToString(message.slice(10, 14));

        const dataHex = message.slice(14, 14 + (length - 7) * 2);
        const data = dataHex ? parseInt(dataHex, 16) : null;

        const checksum = parseInt(message.slice(14 + dataHex.length, 18 + dataHex.length), 16);
        const calculatedChecksum = this.calculateChecksum(command, this.convertStringToHex(identifier), data);
        if (checksum !== calculatedChecksum) {
            throw new Error("Invalid checksum");
        }

        const endCode = parseInt(message.slice(18 + dataHex.length, 26 + dataHex.length), 16);
        if (endCode !== END_CODE) {
            throw new Error("Invalid end code");
        }

        console.log(`Command: ${command}, Identifier: ${identifier}, Data: ${data}, Checksum: ${checksum}`);
    }

    private static convertHexToString(hex: string): string {
        let str = '';

        for (let i = 0; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        
        return str;
    }

    private static convertStringToHex(identifier: string): string {
        return identifier
            .split('')
            .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
            .join('');
    }

    private static calculateChecksum(command: number, identifierHex: string, data: number | null): number {
        let sum = command;
        
        for (let i = 0; i < identifierHex.length; i += 2) {
            sum += parseInt(identifierHex.substr(i, 2), 16);
        }

        if (data !== null) {
            sum += data & 0xFF;
            sum += (data >> 8) & 0xFF;
            sum += (data >> 16) & 0xFF;
            sum += (data >> 24) & 0xFF;
        }

        return sum & 0xFFFF;
    }
}