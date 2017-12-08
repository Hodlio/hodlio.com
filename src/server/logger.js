const winston = require('winston');
const { combine, timestamp, label, printf, colorize } = winston.format;

const format = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        label({ label: 'Hodlio' }),
        timestamp(),
        colorize(),
        format
    ),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console()
    ]
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

logger.emitErrs = false;

module.exports = logger;