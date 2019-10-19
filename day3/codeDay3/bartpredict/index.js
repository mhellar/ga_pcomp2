var bart = require('bart').createClient({ "interval": 3000 });

bart.on('dbrk', function(estimates) {
    // console.log(estimates);
    console.log("next train is headed " + estimates[0].direction + " in " + estimates[0].minutes + " destination is " + estimates[0].destination);
});