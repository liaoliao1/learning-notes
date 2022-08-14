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