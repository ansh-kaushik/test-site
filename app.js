// console.log('Hi');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/user', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.status(200).json({
    status: 'success',
    message: 'hello from database',
  });
});
app.listen(8000, () => {
  console.log('App running on port 5500');
});
