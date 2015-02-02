let Trello = require('../utils/trello.js');

Trello.get('members/my/boards', function (data) {
  flash(data);
});
