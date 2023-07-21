import { Router } from 'express';

const indexRouter = Router();
/* GET home page. */
indexRouter.get('/', (req, res) => {
  res.send('home');
});

export default indexRouter;
