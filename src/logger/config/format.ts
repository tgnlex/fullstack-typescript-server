import {format} from 'winston';
const {json, combine, timestamp, printf, colorize, align} = format;
 
const logFormat = format.combine(
  format.timestamp(), 
  format.printf(
    info => 
    `[LOGGER]: [${info.level}] ${info.message} ### [${info.timestamp}]`),
    format.colorize({all: true})
);
export {logFormat};
