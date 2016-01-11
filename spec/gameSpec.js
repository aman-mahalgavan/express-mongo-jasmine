var Game = require('../public/js/game');

describe('Bowling', function() {

  var game = new Game();

  it('should score 0 for a gutter game', function() {
    for (var i = 0; i < 20; i ++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});
