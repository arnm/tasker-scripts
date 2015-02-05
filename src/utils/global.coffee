String::capitalize = ->
  return @.charAt(0).toUpperCase() + @.slice(1)

Array::empty = ->
  @.length > 0

exports.askUntil = (prompt, predicate = (r) -> r?) ->
  answer = null
  loop
    say prompt
    result = getVoice prompt, "free", 1000
    results = result.split(",")
    break if predicate(results)
  return results.map (s) -> s.toLowerCase()
