const jwtTokenAuth = (target, propertyKey, descriptor) => {
  const originalFunction = descriptor.value;

  descriptor.value = function(request) {
    if (request && request.token) {
      const bindedOriginalFunction = originalFunction.bind(this);
      const result = bindedOriginalFunction(request);
      return result;
    } else {
      throw new Error("Not authenticated");
    }
  };

  return descriptor;
};

export default class Scoreboard {
  homeTeam: String;
  awayTeam: String;

  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  @jwtTokenAuth
  render() {
    return `<div>${this.homeTeam} vs ${this.awayTeam}</div>`;
  }
}
