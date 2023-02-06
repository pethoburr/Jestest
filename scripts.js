
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }
    
    divide() {
        return this.num1 / this.num2;
    }
}

export function ceaserCipher(str, num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const strLower = str.toLowerCase();
    let result = '';
    for (let i = 0; i < strLower.length; i++) {
        const char = strLower[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const shiftedIndex = (charIndex + num) % alphabet.length;
            const shiftedChar = alphabet[shiftedIndex];
            result += str[i] === char ? shiftedChar : shiftedChar.toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

class Node
{
	constructor(d, left = null, right = null)
	{
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

export function analyzeArray(arr) {
    const tree = buildTree(arr);
    let ordered = inOrder(tree);
    let last = findMax(tree);
    let average = getAvg(arr);
    let first = ordered[0];
    const length = arr.length;
    let obj = {
        avg: average,
        min: first,
        max: last,
        length: length,
    }
    return obj;
}

function getAvg(data) {
    return data.reduce((p, c) => p + c, 0) / data.length;
}

function inOrder(root) {
    const result = [];
    inOrderHelper(root, result);
    return result;
  }
  
  function inOrderHelper(node, result) {
    if (node === null) {
      return;
    }
    inOrderHelper(node.left, result);
    result.push(node.data);
    inOrderHelper(node.right, result);
  }

  function findMax(root) {
    let maxv = root;
    while (maxv.right !== null) {
        maxv = maxv.right;
    }
    return maxv.data;
  }

function buildTree(data) {
    if (data.length === 0) {
        return null;
      }
      
      data = Array.from(new Set(data)).sort((a, b) => a - b); 
      const mid = Math.floor(data.length / 2);
      const root = new Node(data[mid]);
      root.left = buildTree(data.slice(0, mid));
      root.right = buildTree(data.slice(mid + 1));
      return root;
     }