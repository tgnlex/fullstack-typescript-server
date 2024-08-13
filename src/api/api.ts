import {PORT, ADDRESS} from './config/const.ts';
import type {Request, Response, NextFunction} from 'express';

import app from './config/setup.ts';



app.post("/ping", async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body.ping
  console.info(data);
  res.json({message: "pong" });
});



const api = async() => {
  app.listen(PORT, () => { console.info(`Server Running on ${ADDRESS}`)})
    .on("error", (error) => {
         console.error(error.mesaage);
         throw new Error(error);
     })
}


export default api;

