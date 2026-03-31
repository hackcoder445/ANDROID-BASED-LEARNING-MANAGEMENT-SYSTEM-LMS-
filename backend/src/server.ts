import { app } from './app';
import { config } from './config/env';

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`HackCoder Academy API running on port ${config.port}`);
});
