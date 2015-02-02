let $ = require('jquery');

const domain = 'https://api.trello.com/1/';
const key = global('TRELLO_KEY');
const token = global('TRELLO_TOKEN');

function ajax(props) {

}

exports.get = function(path, success, error) {
  ajax({
    path: path,
    success: success,
    error: error
  });
};
