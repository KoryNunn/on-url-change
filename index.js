var EventEmitter = require('events');
Number.isInteger = require('is-integer');

module.exports = function(interval){
    if(Number.isInteger(interval)){
        interval = 50;
    }

    var emitter = new EventEmitter();

    var lastPage;
    function update(){
        var path = window.location.href;

        if(lastPage === path){
            return;
        }
        lastPage = path;

        emitter.emit('change', path);
    }

    setInterval(update, interval);

    return emitter;
};
