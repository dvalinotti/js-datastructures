---
title: Insertion (Heap)
description: 'Algorithm for inserting new nodes into a Min/Max Heap.'
category: heapalgo
---

1. Add the node to the bottom of the tree.
2. Look at the parent node. If the parent is greater than the node, swap them.
3. Continue comparing and swapping to allow the node to bubble up until it finds a parent node that is smaller than it.

Cost: As mentioned before, the height of a tree is log(n). Therefore, the worst case scenario is that the newly added node is smaller than every single parent node, causing us to traverse all the way to the top of the tree. This will cost us O(log(n)) time.
