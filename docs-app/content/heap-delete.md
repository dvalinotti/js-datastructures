---
title: Deletion (Heap)
description: 'Algorithm for deleting nodes into a Min/Max Heap.'
category: heapalgo
---

Because our min-heap has the smallest element at the root node, we know exactly where it is in our array. Accessing this element takes O(1) time.

If we want to delete the element, we must shift the entire tree upwards to fill the root node’s place. To do this:

1. Take the bottom level’s right most node (the last element in the array) and move it to top, replacing the deleted node.
2. Compare the new root to its children. If it is larger than either child, swap the item with the smaller of the two children.
3. Continue comparing and swapping, bubbling down the node until it is smaller than both of its children.

Like insertion, the worst case scenario is that we have to traverse the entire tree, but this time we are moving downwards. The cost of this is O(log(n)).
