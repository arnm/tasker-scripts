Utils = require "../utils/global.coffee"
Trello = require "../utils/trello.coffee"

getBoard = ->
  boards = Trello.get "members/my/boards"
  boardExists = (names) ->
    boards.filter((board) -> board.name is names[0].capitalize()).empty()

  boardName = Utils.askUntil("Which board?", boardExists)[0].capitalize()
  return boards.filter((board) -> board.name is boardName)[0]

getList = (board) ->
  lists = Trello.get "boards/#{board.id}/lists"
  listExists = (names) ->
    lists.filter((list) -> list.name is names[0].capitalize()).empty()

  listName = Utils.askUntil("Which list?", listExists)[0].capitalize()
  return lists.filter((list) -> list.name is listName)[0]

try

  board = getBoard()
  list = getList board

  cardName = Utils.askUntil("What's the card name?")[0].capitalize()
  Trello.post "lists/#{list.id}/cards", { name: cardName }

catch e
  say "Command was unsuccessful"
  flash "Error: #{e}"
