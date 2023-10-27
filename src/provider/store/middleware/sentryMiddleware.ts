import * as Sentry from '@sentry/react-native';
export const sentryMiddleware = store => next => action => {
  try {
    return next(action);
  } catch (error) {
    const state = store.getState();
    Sentry.withScope(scope => {
      scope.setExtra('action', action);
      scope.setExtra('state', state);
      Sentry.captureException(error);
    });

    throw error;
  }
};
