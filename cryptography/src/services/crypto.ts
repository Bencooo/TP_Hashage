import crypto from 'crypto';

export function encrypt(phrase: string, publicKey: string): string {
    const buffer = Buffer.from(phrase, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
}

