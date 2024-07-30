const log = async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.info(`${ctx.method} ${ctx.url} - ${rt}`);
}

const resTime = async (ctx, next) => {
  const start = Date.now()
  await next();
  const ms = Date.now() - start;
  console.info(`X-Response-Time:`, `${ms}`)
}

const greet = async (ctx) => {
  ctx.body = 'Hello world!'
}

