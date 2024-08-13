import {config} from './config/config.ts';
import {Logger,ILogObj} from 'ts-log';

const log: Logger<ILogObj> = new Logger({config});
