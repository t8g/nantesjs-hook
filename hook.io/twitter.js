var twitter = require("ntwitter") // npm install ntwitter
    , conf = require('./twitter.conf.json')
    , Hook = require('hook.io').Hook
    , last_id = 0;

var hook = new Hook({
    name: "NantesJSTwitter"
});
hook.on('hook::ready', function() {

    hook.on('*::twittsearch', function(data) {

        var twit = new twitter(conf);
        twit.search('bieber', function(err, data) {
            if (data && data.results && data.results.length && last_id != data.max_id) {
                last_id = data.max_id;
                hook.emit('twitt', data.results[0].text);
            }
        });

    });

});

hook.start();
