import Scoreboard from "./../scoreboard.js";
import "jasmine";

describe("scoreboard with decorator validation", () => {
  it("should throw an error if the scoreboard's render method isn't passed a JWT token", () => {
    const scoreboard = new Scoreboard("Blue Jays", "Mariners");
    expect(function() {
      scoreboard.render();
    }).toThrow(new Error("Parsing is not possible"));
  });
});
