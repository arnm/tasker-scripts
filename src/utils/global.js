// Keep trying to get voice input until predicate returns false.
exports.askUntil = function(prompt,
  predicate = (rs) => {
    rs !== undefined
  }) {

  let results;
  do {
    results = getVoice(prompt, 'free', 1000);
  }
  while (predicate(results));

  return results.split(',')[0].toLowerCase();
};
