const TreeClient = require('@inexor-game/treeclient').TreeClient;
const log = require('@inexor-game/logger')();

// Configuration for creating a media repository
exports.command = 'create <name> [url]'
exports.describe = 'Creates a media repository'

exports.builder = {
  name: {
    type: 'string',
    describe: 'The name of the media repository.'
  },
  url: {
    type: 'string',
    describe: 'The url to a GIT repository.'
  }
}

exports.handler = function(argv) {
  log.info('Removing the media repository ' + argv.name);
  var client = new TreeClient('localhost', 31416);
  client.flex.media.repositories.create(argv.name, argv.url, function(data, response) {
    log.info('Response: ' + response.statusCode + ' ' + response.statusMessage);
  });
}
