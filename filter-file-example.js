//mmc
var fs = require('fs');
var filter = function(req, body, res) {
        // console.log(req.url," url");
    var outValue = true;
    if (req.url.indexOf('/etc/designs/kporg/coverage-costs/') != -1 && req.url.indexOf('.js') != -1) {
        console.log('Using local version of MCC application');
        res.statusCode = 200;
        res.end(fs.readFileSync('/Users/bharadwaj/Desktop/workspace/test/coverage-costs/ui.resources/dist/mcc/app.bundle.js',{ encoding: 'utf8' }));
    } else {
        outValue = false;
    }
    return outValue;
};
module.exports = filter;


//dt
// var fs = require('fs');
// var filter = function(req, body, res) {
//         // console.log(req.url," url");
//     var outValue = true;
//     if (req.url.indexOf('/etc/designs/kporg/deductible-tracker/') != -1 && req.url.indexOf('.js') != -1) {
//         console.log('Using local version of MCC application');
//         res.statusCode = 200;
//         res.end(fs.readFileSync('/Users/bharadwaj/Desktop/workspace/deductible-tracker-ui/ui.resources/dist/dt/app.bundle.js',{ encoding: 'utf8' }));
//     } else {
//         outValue = false;
//     }
//     return outValue;
// };
// module.exports = filter;



//
//
//
// var filter = function(req, body, res) {
//     var outValue = true;
//     console.log('Start Filter File');
//     console.log('req.url = ' + req.url);
//     if (req.url.indexOf('/etc/designs/kporg/coverage-costs/clientlib-all') != -1 && req.url.indexOf('.js') != -1) {
//         // res.statusCode = 500;
//         // console.log('into the response');
//         // res.end('');
//         console.log('Using local version of PM application');
//       res.statusCode = 200;
//       res.end(fs.readFileSync('/Users/bharadwaj/Desktop/workspace/coverage-costs/ui.resources/dist/mcc/app.bundle.js',{ encoding: 'utf8' }));
//
//     } else {
//         outValue = false;
//     }
//     return outValue;
// };
//
// module.exports = filter;
//
// //console.log('End Filter File');
