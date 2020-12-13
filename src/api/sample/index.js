import { Router } from 'express';
import * as sampleService from 'services/sampleService';

const sampleRouter = Router();

sampleRouter.get('/', (req, res) =>
    res.status(200).json({ message: 'Sample' }),
);

export default sampleRouter;
