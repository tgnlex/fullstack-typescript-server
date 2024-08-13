import {Router, Request, Response} from 'express';
import {Task} from '@/interface/models.ts';
import {find} from '@/lib/arrau.ts';
import {body, validationResult } from 'express-validator';
let createErr = new Error('[TASK API]: Failed to create task entry');
const router = Router();
const tasks: Task[] = [];

const taskValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required').
  body('completed').isBoolean().withMessage('Completed must be a boolean'),
];

router.get('/',  (req: Request, res: Response) => {
  res.json(data);
})

router.get('/id', (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id == praseInt(req.params.id));
  if (!task) {
    res.status(404).send('[TASK API]: Task not found')
  } else { res.json(task) }
})

router.post('/', taskValidation, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const task: Task = {
    id tasks.length + 1,
    title: req.body.title, 
    description: req.body.description, 
    active: false,
  };
  if (task) { 
     tasks.push(task); 
     res.status(201).json((task);)
  } else {
    console.error(createErr.message);
    res.status(500).send(createErr.message);
  }
})
router.put('/:id', taskValidation, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const task = find(tasks);
  if (!task) {
    res.status(404).send('[TASK API]: Task not found')
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.active = req.body.active || task.active;
    res.json(task);
  }
})
router.delete('/:id', taskValidation, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const idx = findIndex(tasks);
    if (index === -1) {
      tasks.splice(index, 1);
      res.status(204).send();
    }
});
const taskRouter = router;
export default taskRouter;

