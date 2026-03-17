import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'fallback-secret';

export function signJWT(payload: any) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyJWT(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
