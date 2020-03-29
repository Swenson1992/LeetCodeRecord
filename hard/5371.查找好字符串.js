/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function (n, s1, s2, evil) {
    let mod = 1e9 + 7;
    let m = evil.length;
    // 第二维度中， 0表示s1和s2都有限制，1表s1有限制， 2表示s2有限制， 3表示s1和s2无限制； 第三维度表示前面已经匹配的evil的长度
    var dp = new Array();
    for (let i = 0; i < n + 1; i++) {
        dp[i] = new Array()
        for (let j = 0; j < 4; j++) {
            dp[i][j] = new Array()
            for (let z = 0; z < m + 1; z++) {
                dp[i][j][z] = 0
            }
        }
    }
    console.log(dp)
    // 初始化
    for (let i = 0; i < m; i++) {
        dp[n][0][i] = 1;
        dp[n][1][i] = 1;
        dp[n][2][i] = 1;
        dp[n][3][i] = 1;
    }
    console.log(dp)
    let p = evil.split("");
    console.log(p)
    let prefix = calcuPrefixFunction(p); // O(n)，计算前缀数组
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < m; j++) {
            // handle 0
            for (let k = s1.charAt(i); k <= s2.charAt(i); k++) {
                let state = 0;
                if (k == s1.charAt(i) && k == s2.charAt(i)) {
                    state = 0;
                } else if (k == s1.charAt(i)) {
                    state = 1;
                } else if (k == s2.charAt(i)) {
                    state = 2;
                } else {
                    state = 3;
                }
                dp[i][0][j] += dp[i + 1][state][getNext(prefix, p, k, j)];
                dp[i][0][j] %= mod;
            }
            // handle 1
            for (let k = s1.charAt(i); k <= 'z'; k++) {
                let state = k == s1.charAt(i) ? 1 : 3;
                dp[i][1][j] += dp[i + 1][state][getNext(prefix, p, k, j)];
                dp[i][1][j] %= mod;
            }
            //handle 2
            for (let k = 'a'; k <= s2.charAt(i); k++) {
                let state = k == s2.charAt(i) ? 2 : 3;
                dp[i][2][j] += dp[i + 1][state][getNext(prefix, p, k, j)];
                dp[i][2][j] %= mod;
            }
            // handle 3
            for (let k = 'a'; k <= 'z'; k++) {
                let state = 3;
                dp[i][3][j] += dp[i + 1][state][getNext(prefix, p, k, j)];
                dp[i][3][j] %= mod;
            }
        }
    }
    console.log(dp)
    return dp[0][0][0];
};

function calcuPrefixFunction(p) { // 考虑边界情况， 即p的长度为0
    let n = p.length;
    let prefixArray = new Array(n);  // 表示匹配的长度结果
    prefixArray[0] = 0;
    let j = 0;  // len of match string 表示匹配的长度
    for (let i = 1; i < n; i++) {
        while (j > 0 && p[i] != p[j]) {
            j = prefixArray[j - 1];
        }
        if (p[i] == p[j]) {
            j++;
        }
        prefixArray[i] = j;
    }
    return prefixArray;
}

function getNext(prefix, p, c, j) {
    while (j > 0 && c != p[j]) {
        j = prefix[j - 1];
    }
    if (c == p[j]) {
        j++;
    }
    return j;
}

let a = findGoodStrings(2,"ac","da","b")
console.log(a)