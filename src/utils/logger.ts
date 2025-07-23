import { pino } from 'pino';

export const logger = pino({
  transport:
    process.env.NODE_ENV === 'dev'
      ? {
        options: {
          colorize: true,
          ignore: 'pid,hostname',
          translateTime: 'SYS:standard',
        },
        target: 'pino-pretty',
      }
      : undefined,
});
