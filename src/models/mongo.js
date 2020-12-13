import mongoose from 'mongoose';
import { logger } from 'logger';
import config from 'config';

const {
    MONGO: { DB_URI, DB_USER, DB_PASS },
} = config;

/**
 * @author seongmin
 *
 * @async
 * @function connect
 */
async function connect() {
    mongoose.Promise = global.Promise;

    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            user: DB_USER,
            pass: DB_PASS,
        });
        logger.info('Connected mongodb');
    } catch (e) {
        throw new Error(`Can't connect database: ${e.message}`);
    }
}

export { connect };
