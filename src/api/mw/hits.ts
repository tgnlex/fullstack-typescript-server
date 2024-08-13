import {Request, NextFunction} from 'express';
const hits = {count: 0}
function hitCounter(req: Request, next: NextFunction) {
  if (req) {
    hits.count = hits.count + 1;
  }
  console.log(hits.count);
  next()
}

export {hitCounter};

