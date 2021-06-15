const Queue = require('./Queue');

function bfs(node, target, adjList) {
  let queue = new Queue();
  let path = [];
  let visited = {};
  visited[node] = true;
  queue.enqueue(node);

  while (!queue.isEmpty()) {
    const current = queue.first;
    path.push(current);

    if (current.value === target) {
      return path;
    }

    console.log(current.value);

    let edges = adjList[current.value];

    for (let i = 0; i < edges.length; i++) {
      if (!visited[edges[i]]) {
        queue.enqueue(edges[i]);
        visited[edges[i]] = true;
      }
    }

    queue.dequeue();
  }

  return false;
}

let adjList = {
  "1": ["2", "3"],
  "2": ["1", "4", "5"],
  "3": ["1", "4"],
  "4": ["2", "3", "5"],
  "5": ["2", "4"]
};

console.log(bfs(1, 5, adjList));