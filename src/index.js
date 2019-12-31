import createApp from './app';

const app = createApp();

app.listen(process.env.PORT || 8081, () => {
  // eslint-disable-next-line no-console
  console.log('Running on port 8081');
});
