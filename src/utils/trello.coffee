$ = require "jquery"

domain = "https://api.trello.com/1/"
key = global "TRELLO_KEY"
token = global "TRELLO_TOKEN"

_ajax = (config) ->
  config.url = domain + config.path
  config.type or= "GET"
  config.dataType or= "json"
  config.success or= -> flash "Success"
  config.error or= (x, s, e) -> throw e

  credentials = {
    key: key
    token: token
  }

  if config.data?
    config.data = $.extend credentials, config.data
  else
    config.data = credentials

  $.ajax {
    async: false
    type: config.type
    dataType: config.dataType
    url: config.url
    data: config.data
    success: config.success
    error: config.error
  }

exports.get = (path, params = null) ->
  data = null
  _ajax {
    path: path
    data: params
    success: (d) -> data = d
  }
  return data

exports.post = (path, params) ->
  data = null
  _ajax {
    type: "POST"
    path: path
    data: params
    success: (d) -> data = d
  }
  return data
