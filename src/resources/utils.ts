import { EnhancedFastifyApp } from '../types';

export const addAuthToOpts = <T>(fastify: EnhancedFastifyApp, optsObj: T) => ({
  ...optsObj,
  preValidation: [fastify.authenticate],
});
