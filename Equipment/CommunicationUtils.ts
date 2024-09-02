export function convertStringToHex(identifier: string): string {
    return identifier
        .split('')
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');
}

export function convertHexToString(hex: string): string {
    let str = '';

    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    
    return str;
}

export function calculateChecksum(command: number, identifierHex: string, data: number | null): number {
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