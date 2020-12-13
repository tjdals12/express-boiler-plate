import redis from 'redis';
import bluebird from 'bluebird';
import { logger } from 'logger';
import config from 'config';

function createClient({ host, port, db, password }) {
    const client = redis.createClient({
        host,
        port,
        db,
        password,
        retry_strategy: (options) => {
            if (options.error && options.error.code === 'ECONNREFUSED') {
                return new Error('The server refused the connection');
            }

            return Math.min(options.attempt * 100, 3000);
        },
    });

    bluebird.promisifyAll(client);

    client.on('error', () => {
        logger.error(`Disconnected redis ${db}`);
    });

    client.on('connect', () => {
        logger.info(`Connected redis ${db}`);
    });

    return client;
}

function connect() {
    const {
        REDIS: { AUTH_CACHE, COMMON_CACHE },
    } = config;

    const commonCacheClient = createClient(COMMON_CACHE);
    global.commonCacheClient = commonCacheClient;

    const authCacheClient = createClient(AUTH_CACHE);
    global.authCacheClient = authCacheClient;
}

export { connect };
