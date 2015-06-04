var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  var urls;

  fs.readFile(this.paths.list, 'utf8', function(error, data) {
    urls = data.split('\n');
    callback(urls);
  });

};

exports.isUrlInList = function(url){ // todo

};

exports.addUrlToList = function(url){
  fs.appendFile(this.paths.list, url + '\n');
};

exports.isURLArchived = function(url, callback1, callback2) {
  console.log('checking if ' + this.paths.archivedSites + '/' + url + ' exists');
  fs.exists(this.paths.archivedSites + '/' + url, function(exists) {
    if( exists ) {
      console.log(url + ' is archived');
      callback1(url);
    } else {
      console.log(url + ' is NOT archived');
      callback2(url);
    }
  });

};

exports.downloadUrls = function(url, callback){
};
