var EventEmitter = require("events").EventEmitter,
    OSinfo = require('./modules/OSinfo'),
    emitter = new EventEmitter();

emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        emitter.emit('beforeCommand', instruction);
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quiting app!');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.get();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
        emitter.emit('afterCommand');
    }
});