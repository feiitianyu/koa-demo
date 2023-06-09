const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/koa');

mongoose.connection.on('open', () => {
  console.log('mongodb connect success');
});
