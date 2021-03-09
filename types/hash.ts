import * as crypto from "crypto";

const generateHash = (input: string): string => {
    return crypto.createHash('sha256').update(input).digest('base64');
}

const calculateHashWithNonce = (input: string, nonce: number): string => {
    return generateHash(`${input}${nonce}`);
} 

const mine = () => {
    let nonce = 0;
    let hash = ''
    while (hash.substring(0, 4) != '0000') {
        nonce += 1
        hash = calculateHashWithNonce('abcd', nonce);
    }

    console.log(`Hash: ${hash}`);
    console.log(`nonce: ${nonce}`);
}

mine()