---
title: Breadth-First Search
description: 'A recursive traversal & search algorithm for reaching all vertices of a Graph or Tree data structure.'
category: graphsearch
---

A standard BFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

**The algorithm works as follows:**

1. Start by putting any one of the graph's vertices at the back of a queue.
2. Take the front item of the queue and add it to the visited list.
3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.
4. Keep repeating steps 2 and 3 until the queue is empty.

The graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the BFS algorithm on every node

### Pseudocode
```
create a queue Q 
mark v as visited and put v into Q 
while Q is non-empty 
    remove the head u of Q 
    mark and enqueue all (unvisited) neighbours of u
```

<details>
  <summary>
    Example Code
  </summary>
  <p>

  ```js
  const adjList = new Map([
    [10, [4, 17]],
    [4, [1, 9]],
    [17, [12, 18]],
    [1, []],
    [9, []],
    [12, []],
    [18, []]
  ])

  function bfs(node, target) {
    let queue = [];
    let visited = new Set();

    visited.add(node);
    queue.push(node);
    let found = false;

    while (queue.length > 0) {
      node = queue.shift();

      const neighbors = adjList.get(node);

      for (const n of neighbors) {
        if (n === target) {
          console.log('Found', n);
          found = true;
        }
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }

    if (!found) {
      console.log('Target not found.')
    }
  }
  ```
  </p>
</details>
