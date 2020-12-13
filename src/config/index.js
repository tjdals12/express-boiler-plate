import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';

config({ path: `.env.${env}` });

/**
 * @author seongmin
 * @type {object}
 * @description 환경변수
 */
const configs = {
    base: {
        APP_NAME: process.env.APP_NAME,
        HOST: process.env.HOST,
        PORT: process.env.PORT,
        LOG_LEVEL: process.env.LOG_LEVEL,
        MONGO: {
            DB_URI: process.env.MONGO_URI,
            DB_USER: process.env.MONGO_USER,
            DB_PASS: process.env.MONGO_PASS,
        },
        REDIS: {
            AUTH_CACHE: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,
                password: process.env.REDIS_PASS,
                db: 1,
            },
            COMMON_CACHE: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,
                password: process.env.REDIS_PASS,
                db: 2,
            },
        },
    },
    production: {},
    development: {},
};

export default Object.assign(configs.base, configs[env]);
