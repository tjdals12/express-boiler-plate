import { logger } from 'logger';
import * as _sampleService from './sampleService';

export const sample = () => {
    try {
        logger.debug(sample);
        return true;
    } catch (e) {
        logger.debug(e.message);
        return false;
    }
};
