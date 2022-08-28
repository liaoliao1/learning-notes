// 1.两个栈实现一个队列
// 添加元素在stack1，弹出元素在stack2，当stack2为空时，从stack1弹出元素到stack2，然后stack2.pop()
var CQueue = function() {
    this.stack1 = [];  
    this.stack2 = [];
};

CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

CQueue.prototype.deleteHead = function() {
    if (this.stack2.length) {
        return this.stack2.pop();
    }
    else {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        if (this.stack2.length) {
            return this.stack2.pop();
        }
        else {
            return -1;
        }
    }
};

// 2.两个栈实现找到最小元素
// 最小栈每次放入最小值
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.minValue = Infinity;
};

MinStack.prototype.push = function(x) {
    if (this.minStack.length) {
        this.minValue = Math.min(x, this.minStack[this.minStack.length - 1]);
    }
    else {
        this.minValue = x;
    }
    this.minStack.push(this.minValue);
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1];
};

// 3.斐波那契数列、跳台阶
/*
* dp
*/
var fib = function(n) {
    let dp = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
    return dp[n] ;
};

var fib = function(n) {
    if (n < 2){return n;}
    let a = 0;
    let b = 1;
    let res = 0;
    for (let i = 2; i < n + 1; i++) {
        res = (a + b) %  1000000007;
        a = b;
        b = res;
    }
    return res;
};

/*
* 快速幂
*/
var fib = function(n) {
    if (n < 2){return n;}
    let matrix = [[1, 1],[1, 0]];
    let a = [[1, 1],[1, 0]];
    while(n > 2) {
        a = mutiply(a, matrix);
        n--;
    }
    return a[0][0];
};

function mutiply(a, b) {
    let n = a.length;
    let m = a[0].length;
    let res = [];

    for (let k = 0; k < n; k++) {
        arr = []
        for (let j = 0; j < n; j++) {
            let ele = 0;
            for(let i = 0; i < m; i++) {
                ele += a[k][i] * b[i][j]
            }
            arr[j] = ele % 1000000007;
        }
        res[k] = arr;
    }
    return res;
}
// 4.股票的最大利润，数组中找到最大差值
var maxProfit = function(prices) {
    let n = prices.length;
    let start = prices[0];
    let res = 0;
    for (let i = 1; i < n; i++) {
        if (prices[i] < start) {
            start = prices[i];
        }
        res = Math.max(res, prices[i] - start);
    }
    return res;
};

// 5.链表倒序输出
/*
* 递归
*/
var reversePrint = function(head) {
    if (head === null) {
        return [];
    }
    if(head.next === null) {
        return [head.val];
    }
    let arr = reversePrint(head.next);
    return [...arr, head.val];
};
/*
* 辅助栈
*/
var reversePrint = function(head) {
    let stack = [];
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    let res = [];
    while(stack.length) {
        res.push(stack.pop());
    }
    return res;
};
// 5.反转链表
/*
* 递归
*/
var reverseList = function(head) {
    if(head ===null || head.next ===null) {
        return head;
    }
    let node = reverseList(head);
    head.next.next = head;
    head.next = null;
    return node;
}
/*
* 迭代
*/
var reverseList = function(head) {
    let cur = head;
    let pre = null;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
// 6.复制复杂链表
var copyRandomList = function(start) {
    if (start === null) {
        return start;
    }
    let head = start;
    while(head) {
        let temp = head.next;
        let node = new Node(head.val, head.next, head.random);
        head.next = node;
        node.next = temp;
        head = temp;
    }
    head = start;
    while(head) {
        if (head.random !== null) {
            head.next.random = head.random.next;
        }
        head = head.next.next;
    }
    head = start;
    let res = start.next;
    while(head && head.next) {
        let temp = head.next;
        head.next = head.next.next;
        head = temp;
    }
    return res;
};

// 7.连续子数组的最大和
var maxSubArray = function(nums) {
    let n = nums.length;
    if(n === 0) {
        return null;
    }
    let sum = 0;
    let res = nums[0];
    for(let i = 0; i < n; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        res = Math.max(sum, res);
    }
    return res;
};
// 8.礼物最大值，矩阵从左上到右下和的最大值
var maxValue = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    if(m === 0) {return null;}
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i -1 < 0 && j -1 < 0) {
                continue;
            }
            else if(i - 1 < 0) {
                grid[i][j] =  grid[i][j-1] +  grid[i][j];
            }
            else if(j - 1 < 0) {
                grid[i][j] =  grid[i - 1][j] +  grid[i][j];
            }
            else{
                grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1]) + grid[i][j];
            }
        }
    }
    return grid[m - 1][n - 1];
};

// 9.左旋转字符串
var reverseLeftWords = function(s, n) {
    let str = s + s;
    return str.slice(n, s.length + n);
};

// 10.从上到下打印二叉树
// 层序遍历
var levelOrder = function(root) {
    let res = [];
    let queue = [];
    root && queue.push(root);

    while(queue.length) {
        let node = queue.shift();
        res.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return res;
};
// 每一层打印成一行
var levelOrder = function(root) {
    let res = [];
    let queue = [];
    root && queue.push(root);
    let arr = [];

    while(queue.length) {
        let len = queue.length;
        arr = [];
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            arr.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(arr);
    }
    return res;
};
// 之字形打印
var levelOrder = function(root) {
    let deque = [];
    let res = [];
    root && deque.push(root);
    let arr = [];
    let direct = false;

    while(deque.length) {
        arr = [];
        direct = !direct;
        let len = deque.length;
        for(let i = 0; i < len; i++) {
            if(direct) {
                let node = deque.pop();
                arr.push(node.val);
                node.left && deque.unshift(node.left);
                node.right && deque.unshift(node.right);
            }
            else {
                let node = deque.shift();
                arr.push(node.val);
                node.right && deque.push(node.right);
                node.left && deque.push(node.left);
            }
        }
        res.push(arr);
    }
    
    return res;
};