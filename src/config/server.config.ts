import * as config from 'config';
import ServerConfigInterface from './interfaces/server-config.interface';

const SERVER_CONFIG = config.get<ServerConfigInterface>('server');

const serverConfiguration = {
  port: SERVER_CONFIG.PORT,
};

export default serverConfiguration;
