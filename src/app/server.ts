import app from './config/setup.ts';
import type {Request, Response, NextFunction} from 'express';


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index')
})



function server() {
  app.listen(PORT, () => {

  })
}
