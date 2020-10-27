import express from 'express';
const app = express();

app.use('/', express.static('public'));

app.listen(3000, () =>
  console.log('centSybil ready to dispense sage budget advice on port 3000')
);
