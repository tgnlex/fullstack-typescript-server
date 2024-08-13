import {Router, Request, Response} from 'express';
import prisma from '../../utils/prisma.ts';
const router = Router();
interface Task {
  id: int,
  title: string
}
const tasks: Task[];

const taskValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required').
  body('completed').isBoolean().withMessage('Completed must be a boolean'),
];

taskRouter.get('/',  (req: Request, res: Response) => {
  const data = await prisma.T.findMany({ include: * });
  res.json(data);
})

taskRouter.post('/', (req: Request, res: Response) => {
  const task = req.body.task;
  await prisma.Task.create({ data: { title: task } });
  res.json()
})

export default taskRouter;
