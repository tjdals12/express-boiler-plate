import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerStats from 'swagger-stats';
import config from './config';

const { HOST, PORT } = config;

/**
 * @author seongmin
 * @type {object}
 * @description Swagger Spec.
 */
const options = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'App',
            description: 'App API documentation',
            version: '1.0.0',
        },
        host: `${HOST}:${PORT}`,
        basePath: '/api/v1',
    },
    apis: ['./src/api/**/*.spec.yml'],
});

/**
 * @author kaka
 * @type {function}
 * @description API 문서화 (/swagger-apis)
 */
export const swaggerConfig = [
    '/swagger-apis',
    swaggerUI.serve,
    swaggerUI.setup(options),
];

/**
 * @author      kaka
 * @type {function}
 * @description API 모니터링 (/swagger-stats/ux)
 */
export const statsConfig = swaggerStats.getMiddleware({
    swaggerSpec: options,
    swaggerOnly: true,
});
