import {Router} from 'express';
//import taskRouter from './task.ts'
const api = Router();
//api.use(taskRouter);
api.post("/ping", async (req, res, next) => {
  const data = req.body.ping
  console.info(data);
  res.json({message: "pong" });
});


export default api;
