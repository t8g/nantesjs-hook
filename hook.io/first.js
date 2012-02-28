# Juste un premier hook simplissime
var Hook = require('hook.io').Hook;
var hook = new Hook({ name: 'NantesJS' });
hook.on('hook::ready', function() {
    hook.on('*::hello', function(data) {
        console.log('MESSAGE RECEIVED');
        hook.emit('received', 'message received');
    });
});
hook.start();