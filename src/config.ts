import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const dbconfig = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'postgres',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
    },
};

export default dbconfig

export const TOKEN = process.env.TOKEN || '';
export const APPLICATION_ID = process.env.APPLICATION_ID || '';
export const CLIENT_ID = process.env.CLIENT_ID || '';
export const GUILD_ID = process.env.GUILD_ID || '';