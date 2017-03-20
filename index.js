var EventEmitter = require('events');

module.exports = function(interval){
    if(isNaN(interval)){
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