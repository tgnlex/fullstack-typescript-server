import {Request} from 'express';

export async function find(items: any[], req: Request = req) {
  const item = await items.find((t) => 
    t.id === parseInt(req.params.id));
  return item;
};

export async function findIndex(items: any[], req: Request = req) {
  const idx = items.findIndex((t) => t.id === parseInt(req.params.id));
  return idx;
})

export async function delete(items: any[], idx: number, res: Response = res) {
  if (idx === -1) {
    res.status(404).send('[TASK API]: Task not found.')
  } else {
    tasks.splice(idx, 1);
    res.status(204.send())
  }
}

export async function update(item: any, req: Request) {
  if (!task) {
    res.status(404.send('Task not found!'))
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;
  }
}
