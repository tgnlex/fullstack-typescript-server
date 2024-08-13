<<<<<<< Updated upstream
const custom = {
    levels: {
      alert:  0,
      error:  1,
      warn:   2,
      notice: 3,
      info:   4,
      http:   5,
      trace:  6,
      debug:  7
  },
}
export {custom}; 
=======

const logLevels = {
  "*": ["bold,  black", "bgBrightWhite", "dim"]
  ALERT:  ["bold", "red", "bgwhiteBright", "dim"],
  ERROR:  ["bold", "red"],
  WARN:   ["bold", "orange"],
  NOTICE: ["bold", "purple"],
  INFO:   ["bold", "green"],
  HTTP:   ["bold", "yellow"],
  EVENT:  ["bold", "blue"],
  SIGNAL: ["bold", "pink"],
  DEBUG:  ["bold", "gray"],
};
export {logLevels}; 

>>>>>>> Stashed changes
