import { calculateChecksum, convertStringToHex } from "./CommunicationUtils";
import { IOEquipamentParameter } from "./IOEquipamentParameter";

const START_CODE = 0x5AA5;
const READ_CODE = 0x52;
const WRITE_CODE = 0x57;
const END_CODE = 0xCC33C33C;

type EncodeProps = {
    parameter: IOEquipamentParameter,
    command: 'READ' | 'WRITE'
}

export class CommunicationEncoder {
    public static encode({ parameter, command }: EncodeProps): string {
        const commandCode = command === 'READ' ? READ_CODE : WRITE_CODE;
        const identifier = parameter.identifier;
        const data = parameter.value;

        if (data === null) {
            throw new Error('Data cannot be null');
        }
        
        const dataHex = data.toString(16).padStart(8, '0');
        const identifierHex = convertStringToHex(identifier);

        const length = 1 + identifierHex.length / 2 + dataHex.length / 2 + 2;
        const checksum = calculateChecksum(commandCode, identifierHex, data);

        return [
            START_CODE.toString(16).padStart(4, '0'),
            length.toString(16).padStart(4, '0'),
            commandCode.toString(16).padStart(2, '0'),
            identifierHex,
            dataHex,
            checksum.toString(16).padStart(4, '0'),
            END_CODE.toString(16).padStart(8, '0')
        ].join('');
    }


}