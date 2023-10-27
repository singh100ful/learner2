import Config from 'react-native-config';

const env = Config.ENVIRONMENT;

export default {
  ENV: env,
  ...Config,
};
