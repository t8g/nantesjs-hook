var email = require("mailer") // npm install mailer
    , conf = require('./mail.conf.json')
    , Hook = require('hook.io').Hook
    ;

conf.subject = 'Nouveau tweet';

var hook = new Hook({
    name: 'NantesJSMailer'
});

hook.on('hook::ready', function() {

    hook.on('*::twitt', function(data) {
        conf.body = data;
        email.send(conf, function(err, result) {
            if (err) console.log(err);
            else console.log('Mail envoyé :)');
        });
    });

});

hook.start();