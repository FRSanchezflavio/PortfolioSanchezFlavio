import { Router } from 'express';
import { contactFormHandler } from '../controllers/contactController';

const router = Router();

router.post('/', contactFormHandler);

export default router;
