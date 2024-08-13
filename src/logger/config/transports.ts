import winston, {transports} from 'winston';
import {logPath} from './logPath.ts';
import DailyRotateFile from "winston-daily-rotate-file"
const alertTransport = new DailyRotateFile({
				filename: logPath('alert/%DATE%.log'),
				level: 'alert',
				datePattern: 'MM-DD',
				maxSize:'20m',
				maxFiles: '30d'
});
const errorTransport = new DailyRotateFile({
				filename: logPath('error/%DATE%.log'),
				level: 'error',
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '30d'
});
const warnTransport = new DailyRotateFile({
				filename: logPath('warn/%DATE%.log'),
				level :'warn',
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '21d'
});
const noticeTransport = new DailyRotateFile({ 
				filename: logPath('notice/%DATE%.log'), 
				level: 'notice', 
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '21d'
    });
const infoTransport = new DailyRotateFile({ 
				filename: logPath('info/data-%DATE%.log'), 
				level: 'info',
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '14d'
    });
const httpTransport = new DailyRotateFile({
				filename: logPath('http/%DATE%.log'),
				level: 'http',
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '10d'
});
const debugTransport = new DailyRotateFile({ 
				filename: logPath('debug/%DATE%.log'), 
				level: 'debug',
				datePattern: 'MM-DD',
				maxSize: '20m',
				maxFiles: '7d'
});


const consoleTransport = new winston.transports.Console({ level: 'debug' });
export {alertTransport, errorTransport, warnTransport, noticeTransport, httpTransport, infoTransport, debugTransport, consoleTransport};

