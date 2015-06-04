// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var helpers = require('../helpers/archive-helpers.js');

helpers.readListOfUrls(function(urls) {
  urls.forEach(function(url) {
    console.log(url);
  });
});

helpers.isURLArchived('www.google.com', function() {
  console.log('It exists!');
});
