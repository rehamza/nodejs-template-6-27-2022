import { Router } from 'express';

const router = Router();

import User from './UserRoutes'


router.use('/user', User);

export default router;