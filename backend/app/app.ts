import express from 'express';
import morgan from 'morgan';
import indexRouter from "./routes";
import pokemonRouter from "./routes/pokemon";

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/pokemon/', pokemonRouter);

app.listen(port, () => {
  console.log('Server running on port: ', port);
});
