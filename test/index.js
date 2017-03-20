var crel = require('crel');
var onUrlChange = require('../');

var emitter = onUrlChange();

emitter.on('change', function(url){
    crel(document.body, crel('div', url));
});

window.addEventListener('load', function(){
    var button;

    crel(document.body,
        button = crel('button', 'change the url')
    );

    button.addEventListener('click', function(){
        var url = 'random-url-' + parseInt(Math.random() * 1000);
        history.pushState(null, url, './' + url);
    });
});