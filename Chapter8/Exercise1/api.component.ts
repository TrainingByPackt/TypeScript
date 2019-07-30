const apiEndpoints = {};

const apiEndpoint = constructor => {
  const className = constructor.name;
  const endpointPath = "/" + className.toLowerCase();
  apiEndpoints[endpointPath] = new constructor();
};

@apiEndpoint
class DevQueries {
  private topics = ["React", "JavaScript", "TypeScript"];

  get() {
    return this.topics;
  }

  post(request) {
    this.topics.push(request.body);
  }
}

@apiEndpoint
class MachineLearningQueries {
  private topics = ["Python", "Data Science"];

  get() {
    return this.topics;
  }

  post(request) {
    this.topics.push(request.body);
  }
}

apiEndpoint(DevQueries);
apiEndpoint(MachineLearningQueries);

console.log(apiEndpoints);
apiEndpoints["/machinelearningqueries"].get(); //?
