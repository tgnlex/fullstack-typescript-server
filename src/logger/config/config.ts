<<<<<<< Updated upstream
import winston, {transports} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import {
  alertTransport, 
  errorTransport, 
  warnTransport,
  noticeTransport, 
  debugTransport, 
  infoTransport, 
  consoleTransport
  } from './transports.ts';
import {logFormat} from './format.ts';
import {custom} from './levels.ts';
import {logPath} from './logPath.ts';
import {LOG_LEVEL} from '../config/env.ts';

const log = winston.createLogger({
  levels: custom.levels,
  level: LOG_LEVEL,
  transports: [
    debugTransport, 
    infoTransport, 
    noticeTransport,
    warnTransport,
    errorTransport,
    alertTransport,
    consoleTransport
  ],		
  exceptionHandlers: [consoleTransport],
  rejectionHandlers: [consoleTransport],
  format: logFormat
});

export {log};
=======
import {Logger, ILogObj } from 'tslog';
import {logLevels} from './levels.ts';
const config = {
  prettyLogTemplate: "{{yyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{filePathWithLine}}{{name}}]\t",
  prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
  prettyErrorStackTemplate: "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
  prettyErrorParentNamesSeperator: ":",
  prettyErrorLoggerNameDelimiter: "\t",
  stylePrettyLogs: "true",
  prettyLogTimeZone: "UTC",
  prettyLogStyles:  {
    logLevelName: logLevels,
    dateIsoStr: "white",
		filePathWithLine: "white",
		name: ["white", "bold"],
		nameWithDelimiterPrefix: ["white", "bold"],
		nameWithDelimiterSuffix: ["white", "bold"],
		errorName: ["bold", "bgRedBright", "whiteBright"],
		fileName: ["yellow"],
		fileNameWithLine: "white",
  },
};

export {config};
>>>>>>> Stashed changes
