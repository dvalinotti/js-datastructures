const TreeNode = require('./TreeNode');

/**
 * Breadth-First Search - find shortest path to searchValue in tree
 * @param {Object} tree 
 * @param {TreeNode} source 
 * @param {any} searchValue 
 */
function bfs1(tree, source, searchValue) {
	console.log({
		source: source.value,
		searchValue
	})
	// Start queue with source node.
	let queue = [];
	let path = [];
	queue.push(source);

	// While there are nodes in the queue...
	while (queue.length > 0) {
		// Start with the first item in the queue.
		let current = queue[0];
		path.push(current.value);

		// If the current value is what we are searching for, return.
		if (current.value === searchValue) {
			console.log(searchValue, 'found!');
			return path;
		}

		// If the current node has a left neighbor, add it to the queue from the tree.
		if (current.left !== null) {
			queue.push(tree[current.left]);
		}

		// If the current node has a right neighbor, also add it to the queue.
		if (current.right !== null) {
			queue.push(tree[current.right]);
		}

		// Once this iteration is done, remove the current node from the queue.
		queue.shift();
	}

	return undefined;
}

let tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

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


const source = 10;
bfs(source, 12)
bfs(source, 42)