import { errObj } from './../types.d';
import express from 'express';
const app: express.Application = express();
const authRouter = require('./routers/authRouter');
const crudRouter = require('./routers/crudRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//serve static files
app.use(express.static('public'));

//send to crud router
// app.use('/', crudRouter);

//send to auth router
app.use('/', authRouter)



//global error handler
app.use((err: errObj, req: any, res: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };

  const errorObject = Object.assign({}, defaultErr, err);
  return res.status(errorObject.status).json(errorObject.message);
});

//handle unknown path
app.use((req, res) => {
  res.status(404).json('These are not the droids you are looking for');
});

app.listen(3000, () =>
  console.log('centSybil ready to dispense sage budget advice on port 3000')
);
