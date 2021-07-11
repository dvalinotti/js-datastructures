const PriorityQueue = require('./PriorityQueue.js');

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(from, to, weight) {
    this.edges[from].push({ to, weight });
    this.edges[to].push({ from, weight });
  }
}

/**
 * @param {Graph} graph
 * @param {string} start
 * @param {string} end
 */
let Dijkstras = function(graph, start, end) {
  let pq = new PriorityQueue();
  let distances = {};
  
  distances[start] = 0;
  distances[end] = Infinity;

  let parents = { end: null };

  let path = [end];

  return path;
}

let romanNumerals = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
]
let romanValues = [
  1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
]

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B', 3);
graph.addEdge('A', 'C', 5);
graph.addEdge('A', 'D', 7);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'F', 4);
graph.addEdge('C', 'F', 1);
graph.addEdge('D', 'E', 2);
graph.addEdge('D', 'E', 1);

let path = Dijkstras(graph, 'A', 'F');

console.log(path);