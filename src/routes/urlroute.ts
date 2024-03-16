import express from 'express';
import { getOriginalUrlHandler, createUrlHandler } from '../controllers/urlcontroller';
const router = express.Router();
router.post('/shorten', createUrlHandler);
router.get('/:shorturl', getOriginalUrlHandler);
export default router;