// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = require('../helpers/archive-helpers.js');
var fs = require('fs');
var request = require('request');

var firstCallback = function(url) {
  // console.log(url + ' is already archived!');
};

var secondCallback = function(url) {
  request('http://' + url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      fs.writeFile(archive.paths.archivedSites + '/' + url, body);
      console.log(url);
    }
  });
};

archive.readListOfUrls(function(urls) {
  urls.forEach(function(url) {
    // console.log('checking on ' + url);
    archive.isURLArchived(url, firstCallback, secondCallback);
  });
});

// archive.isURLArchived('www.google.com', function() {
//   console.log('It exists!');
// });
