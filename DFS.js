const TreeNode = require('./TreeNode');
const Stack = require('./Stack');

/**
 * 
 * @param {TreeNode} source 
 * @param {any} destination 
 * @param {Stack} stack 
 */
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

const source = tree[10];
console.log(dfs(source))
console.log(dfs(source))