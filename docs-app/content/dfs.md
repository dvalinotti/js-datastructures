---
title: Depth-First Search
description: 'Another recursive traversal & search algorithm for reaching all vertices of a Graph or Tree data structure.'
category: graphsearch
---

A standard DFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

**The DFS algorithm works as follows:**

1. Start by putting any one of the graph's vertices on top of a stack.
2. Take the top item of the stack and add it to the visited list.
3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
4. Keep repeating steps 2 and 3 until the stack is empty.

### Pseudocode

```
DFS(G, u)
    u.visited = true
    for each v ∈ G.Adj[u]
        if v.visited == false
            DFS(G,v)
     
init() {
    For each u ∈ G
        u.visited = false
     For each u ∈ G
       DFS(G, u)
}
```

<details>
  <summary>Example Code</summary>
  <p>
  
  ```js
  function dfs(source, visited = {}, stack = new Stack()) {
    stack.push(source);

    while (!stack.isEmpty()) {
      let current = stack.pop();

      if (!visited[current.value]) {
        visited[current.value] = true;

        if (current.left !== null) {
          stack.push(current.left);
        }

        if (current.right !== null) {
          stack.push(current.right);
        }
      }
    }

    return stack;
  }
  ```
  
  </p>
</details>
