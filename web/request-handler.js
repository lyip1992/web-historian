var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  // TODO: move into http-helpers.js
  if( req.method === 'GET' ) {
    if( req.url === '/' ) {
      res.writeHead(200);
      fs.readFile('./public/index.html', function(error, data) {
        res.end(data);
      });
    }

    if (req.url === '/styles.css') {
      res.writeHead(200);
      fs.readFile('./public/styles.css', function(error, data) {
        res.end(data);
      });
    }
  }

  if( req.method === 'POST' ) {
    if( req.url === '/') {



      req.on('data', function(data) {
        var url = data.toString().substr(4);
        res.writeHead(302);

        archive.isURLArchived(url, function() {
          // if the url is in our list, serve page from the archive
          fs.readFile(archive.paths.archivedSites + '/' + url, function(error, data) {
            res.end(data);
          });

        }, function() {
         // else add to the list, serve the loading page
          archive.addUrlToList(url);
          fs.readFile(archive.paths.siteAssets + '/loading.html', function(error, data) {
            res.end(data);
          });
        });

      });

    }
  }
};
