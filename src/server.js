import cfonts from 'cfonts';
import { logger } from './logger';
import config from './config';
import app from './app';
import { mongo, redis } from './models';

const { APP_NAME, HOST, PORT } = config;

async function main() {
    try {
        cfonts.say(APP_NAME, {
            font: '3d',
            colors: ['#82c91e', '#fff'],
            background: 'transparent',
            lineHeight: 3,
        });

        await mongo.connect();
        await redis.connect();

        app.listen(PORT, () => {
            logger.info(`server running at at ${HOST}:${PORT}`);
        });
    } catch (e) {
        logger.error(e.message);
    }
}

main();
