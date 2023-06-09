const Router = require('@koa/router');
const { userService } = require('../service')

const router = new Router();

router.post('/user', async (ctx, next) => {
  const user = ctx.body;
  const res = await userService.addUser(user);
  ctx.body = res;
  next();
});

router.delete('/user', async (ctx, next) => {
  const res = await userService.deleteUserById();
  ctx.body = res;
  next();
});

router.patch('/user', async (ctx, next) => {
  const res = await userService.updateUserById();
  ctx.body = res;
  next();
});

router.get('/user', async (ctx, next) => {
  const res = await userService.getUsetList();
  ctx.body = { name: 'clz', age: 18, address: '666' };
  next()
});

module.exports = router;
