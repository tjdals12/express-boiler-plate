import { Router } from 'express';
import v1Sample from './sample';

const apiRouter = Router();

apiRouter.use('/v1/samples', v1Sample);

export default apiRouter;
