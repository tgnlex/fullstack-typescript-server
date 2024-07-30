import express from 'express';

const index = express.Router();

index.get('/', () => {
  res.render('index.ejs')
});

export default index;
