export default async (ctx, next) => {
  const title = 'koa2 e'

  await ctx.render('index', {
    title
  })
}
