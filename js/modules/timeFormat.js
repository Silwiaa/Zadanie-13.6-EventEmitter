var os = require('os'),
    upTime = os.uptime();

function timeFormat(upTime) {
    var upTimeHour = Math.floor(upTime / 3600),
        upTimeMin = Math.floor(upTime / 60),
        upTimeSek = (upTime % 60).toFixed(0);
    
    console.log(upTimeHour + 'h' + upTimeMin + 'min' + upTimeSek + 's');
}

exports.print = timeFormat;
