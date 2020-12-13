import { format, createLogger, transports } from 'winston';
import timestampColorize from 'winston-timestamp-colorize';
import DailyRotateFile from 'winston-daily-rotate-file';
import config from './config';

const { APP_NAME, LOG_LEVEL } = config;

/**
 * @author seongmin
 * @type {object}
 * @description 공통 포맷
 */
const commonFormat = format.combine(
    format((info) => ({ ...info, level: `[${info.level.toUpperCase()}]` }))(),
    format.label({ label: APP_NAME }),
    format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
);

/**
 * @author seongmin
 * @type {object}
 * @description 콘솔 포맷
 */
const consoleFormat = format.combine(
    timestampColorize({ color: 'white' }),
    format.colorize({
        all: true,
        level: { info: 'green', debug: 'yellow', error: 'red' },
    }),
    format.printf(
        ({ timestamp, label, level, message }) =>
            `🔥 ${timestamp} ${label}::${level} - ${message}`,
    ),
);

/**
 * @author seongmin
 * @type {object}
 * @description 파일 포맷
 */
const fileFormat = format.printf((info) => `${info.timestamp} ${info.message}`);

/**
 * @author seongmin
 * @type {object}
 * @description 콘솔 로그
 */
const logger = createLogger({
    transports: [
        new transports.Console({
            level: LOG_LEVEL,
            format: format.combine(commonFormat, consoleFormat),
        }),
    ],
});

/**
 * @author seongmin
 * @type {object}
 * @description 파일 포맷
 */
const fileLogger = createLogger({
    transports: [
        new DailyRotateFile({
            dirname: 'logs/',
            filename: 'log_%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxFiles: '15d',
            format: format.combine(commonFormat, fileFormat),
        }),
    ],
});

export { logger, fileLogger };
