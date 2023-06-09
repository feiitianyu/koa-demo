const Koa = require('koa');
const Router = require('@koa/router');
const routers = require('./routers');

const app = new Koa();

console.log('routers', routers);

for(let r in routers) {
  if (routers[r] instanceof Router) {
    app.use(routers[r].routes()).use(routers[r].allowedMethods());
  }
}

app.listen(19007, () => {
  console.log('listen success')
});
