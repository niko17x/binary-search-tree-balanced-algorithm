class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array, startIndex, endIndex) {
    // Base case for recursion:
    if (startIndex > endIndex) {
      return null;
    }

    const mid = (startIndex + endIndex) / 2;
    const newNode = new Node(array[mid]);

    // Recursively construct the left subtree and make it left child of root:
    newNode.left = this.buildTree(array, startIndex, mid - 1);

    // Recursively construct the right subtree and make it right child of root:
    newNode.right = this.buildTree(array, mid + 1, endIndex);
    return newNode;
  }

  // Add new root if current root value empty:
  addNode(data) {
    const newNode = new Node(data);
    let currRoot = this.root;

    // If current root node = null:
    if (!currRoot) {
      currRoot = newNode; // If no root node exists, make newNode the root.
    } else {
      this.insertNode(currRoot, newNode);
    }
  }

  // Iterate through each tree node and insert new node:
  insertNode(node, newNode) {
    // If newNode value is less than existing node data, shift left:
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode; // Left node empty so assign position to new node.
      } else {
        this.insertNode(node.left, newNode); // If node.left is not null, keep traversing.
      }

      // Deal with right side of node (larger values):
    } else if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
}

const testArray = [1, 2, 3, 4, 5];
const newTree = new Tree();

const tree = newTree.buildTree(testArray, 0, testArray.length - 1);
newTree.addNode(100);
newTree.addNode(200);
newTree.addNode(300);
newTree.addNode(400);
