// Required Libraries
var prompt = require('prompt');
var bignum = require ('bn.js');

// Setting the loop to NOT run
module.exports.doWhile = false;

/**
 * Start iteration
 * @author Nathan Leadill
 * @param   {number}  limit  The number of fibonacci numbers to generate
 */

function generateSequence (limit)
{

  // EXPLAINATION: The first number (last) is set at 0, the next number (next) is set at 1, the current number (current) is set at -1 and the loop iterations (loop) is set at 0;
  var next    = new bignum (1),
  last        = new bignum (0),
  loop        = new bignum (0),
  current     = new bignum (-1),
  result      = {},
  limitResult = {},
  sequence    = [];
  limit       = limit && new bignum (limit - 1);

  module.exports.doWhile = true;

  while (module.exports.doWhile)
  {
    last      = current;
    current   = next;
    next      = current.add (last);

    // Add the fibonacci number to the sequence array.
    sequence.push(next.toString());

    // When the sequence has reached its limit.
    if (limit && loop.eq (limit))
    {
      module.exports.doWhile = false;
    }

    // Ensure that the sequence cannot infinity so here we 'Catch Infinity'.
    if (next === 'Infinity')
    {
      limitResult =
      {
        reason: 'infinity',
        max_limit: Number.MAX_LIMIT.toString(),
        last_result: result,
        iterations: loop.toString(),
        intended: limit ? limit : null
      };

      module.exports.doWhile = false;
      return limitResult;
    }

    // The number of times the loop has run
    loop = loop.add (new bignum (1));
  }
  console.log(sequence);;
}


// ready
prompt.start();

prompt.get(['number'], function (err, result)
{
  if (err)
  {
    return 'error';
  }
  module.exports.iterate = generateSequence(result.number);
});
