var Hook = require('hook.io-cron').CronHook // npm install hook.io-cron
    ;

var hook = new Hook({
    name: "NantesJSCron"
});

hook.addJob({
    'event': 'twittsearch',
    'data': null
});

hook.start();
