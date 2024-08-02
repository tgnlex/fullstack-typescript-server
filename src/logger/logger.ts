import {config} from './config.ts';
import {Logger,ILogObj} from 'ts-log';

const log: Logger<ILogObj> = new Logger({config});
