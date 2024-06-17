import { Router, Request, Response } from 'express';

const router = Router();

router.get('/api', (req: Request, res: Response) => {
    res.json({message: 'Hello from the API Microservice'})
})

export default router;