exports.morpion = class {
  /**
   * @constructor
   */
  constructor() {
    this.grille = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    this.ended = false;
  }

  /**
   * @param {int} player Player Id either -1 or 1
   * @param {int} x Coordinates
   * @param {int} y Coordinates
   */
  move(player, x, y) {
    this.grille[x][y] = player;
  }

  /**
   * @returns this.ended If the game has ended
   */
  checkWinner() {
    for (let i = 0; i < 3; i + 1) {
      if (Math.abs(this.grille[i][0] + this.grille[i][1] + this.grille[i][2]) === 3) {
        this.ended = true;
        return this.ended;
      }

      if (Math.abs(this.grille[0][i] + this.grille[1][i] + this.grille[2][i]) === 3) {
        this.ended = true;
        return this.ended;
      }
    }

    if (Math.abs(this.grille[0][0] + this.grille[1][1] + this.grille[2][2]) === 3) {
      this.ended = true;
      return this.ended;
    }

    if (Math.abs(this.grille[0][2] + this.grille[1][1] + this.grille[2][0]) === 3) {
      this.ended = true;
      return this.ended;
    }

    return this.ended;
  }
};
