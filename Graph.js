class Graph {
  constructor() {
    this.nodes = {};
  }

  // Add node to map w/ list of adjacencies
  addNode(node) {
    this.nodes[node] = []
  }

  // Add an edge between two nodes
  addEdge(src, dest) {
    // Check if both source and desitination nodes exist
    if (this.nodes[src] === undefined || this.nodes[dest] === undefined) {
      return false;
    }

    // If source node does not have adjacency to dest, add it to its adj. list
    if (!this.nodes[src].includes(dest)) {
      this.nodes[src].push(dest);
    }

    // If dest node does not have adjacency to source, add it to its adj. list
    if (!this.nodes[dest].includes(src)) {
      this.nodes[dest].push(src);
    }
  }

  // Print nodes adjacency list
  showNodes() {
    console.log(this.nodes);
  }

  // Breadth-First Search
  bfs(source, destination) {
    const queue = [source]; // Queue of nodes starting with source
    const visited = {}; // Map of nodes that have been visited already

    while (queue.length > 0) {
      let current = queue.shift(); // Start with first node in queue

      // If node has already been visited, continue to next while loop iteration
      if (visited[current]) {
        continue;
      }

      // Check if current node is the destination we're looking for
      if (current === destination) {
        return true;
      }

      // Otherwise, mark this node as visited
      visited[current] = true;

      // Get neighbors of current node from this.nodes adj. list
      let neighbors = this.nodes[current];
      
      // Add every neighbor of current node to the queue
      for (let i = 0; i < neighbors.length; i++) {
        queue.push(neighbors[i]);
      }
    }

    return false; // Node not found in graph
  }

  // Depth-First Search - Recursive
  dfs(source, destination, visited = {}) {
    // Check if we have already visited the current node
    if (visited[source]) {
      return false;
    }

    // Check if we have arrived at the destination
    if (source === destination) {
      return true;
    }

    // Mark current node as visited
    visited[source] = true;

    // Get neighbors of current node from adj. list
    const neighbors = this.nodes[source];

    // Loop through neighbors of current node
    for (let i = 0; i < neighbors.length; i++) {
      // Recursively call DFS with neighbor node as new source, passing visited list
      if (this.dfs(neighbors[i], destination, visited)) {
        return true;
      }
    }

    // Otherwise, destination is not in the graph.
    return false;
  }
}

/**
 * Example:
 * 
 * Dan - John   Peter
 *   \     \     /
 *  Joe -  Rob - Bob
 */

const graph = new Graph();

// Add Nodes
graph.addNode('Dan');
graph.addNode('John');
graph.addNode('Joe');
graph.addNode('Rob');
graph.addNode('Bob');
graph.addNode('Peter');

// Add Edges
graph.addEdge('Dan', 'Joe');
graph.addEdge('Dan', 'John');
graph.addEdge('John', 'Rob');
graph.addEdge('Joe', 'Rob');
graph.addEdge('Rob', 'Bob');
graph.addEdge('Bob', 'Peter');

graph.showNodes();

console.log(graph.bfs('Dan', 'Peter'));
console.log(graph.dfs('Dan', 'Peter'));