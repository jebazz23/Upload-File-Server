import { Router } from 'express';
import { baseURL } from '../config';
import uploadMiddleware from '../middlewares/uploaderMiddleware';
    
const router = Router();

/**
 * @DESC Route to upload single file
 * @END-PT 'api/images/single'
 * @Access Public
 * @TYPE POST
 */

router.post('/single-upload', uploadMiddleware.single('file'), async (req, res) => { });

/**
 * @DESC Route to upload multiple file
 * @END-PT 'api/images/multi-upload'
 * @Access Public
 * @TYPE POST
 */

router.post('/multi-upload', uploadMiddleware.array('files'), async (req, res) => { });

export default router;