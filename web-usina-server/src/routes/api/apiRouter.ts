import { Router } from 'express';
import { createPost, getIndex, getParamsById, getAndDeleteById } from '../../controllers/api/apiController';

const router = Router();

router.post('/endpoints', createPost);
router.get('/', getIndex);
router.put('/:endpoint', getParamsById);
router.delete('/:endpoint', getAndDeleteById);

export default router;