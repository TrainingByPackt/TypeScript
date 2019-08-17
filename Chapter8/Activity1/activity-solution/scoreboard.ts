export default class Scoreboard {
  homeTeam: String;
  awayTeam: String;

  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  render() {
    return `<div>${this.homeTeam} vs ${this.awayTeam}</div>`;
  }
}
