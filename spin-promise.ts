import * as ora from 'ora';

import chalk from 'chalk';

export default function spinPromise<T extends Promise<any>>(promise: T, taskLabel: string): T {
  let spinner = ora(taskLabel).start();

  const errorCb = (e: any) => {
    spinner.fail();
    chalk.red(e);
  };

  promise
    .then(() => spinner.succeed(), errorCb)
    .catch(errorCb);

  return promise;
}
