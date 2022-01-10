import { createLogger } from '../logger';

it('should return stored logs', () => {
  const logger = createLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});

it('should save stored logs', () => {
  const logger = createLogger('user login');
  logger.log('login success');
  expect(logger.getLogs()).toEqual(['log - user login - login success ']);
});
