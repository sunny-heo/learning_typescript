import * as crypto from "crypto";
import { TextEncoder } from "util";

const generateHash = async (input: string): Promise<string> => {
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    
    return hashHex;
}

const calculateHashWithNonce = async (nonce: number): Promise<string> => {
    const data = 'Hello World' + nonce;
    return generateHash(data)
} 

const mine = async (): Promise<void> => {
    let nonce = 0;
    let hash:string;

    do {
        hash = await calculateHashWithNonce(++nonce)
    } while (hash.startsWith('0000') === false)

    console.log(`Hash: ${hash}`);
    console.log(`nonce: ${nonce}`);
}

mine()