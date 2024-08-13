import {Request, Response, NextFunction} from 'express';

const reqErr = (req: Request, res: Response, next: NextFunction) =>
  console.error(err.stack);
  res.status(500).send("Something went wrong.")
:}

export {reqErr}
