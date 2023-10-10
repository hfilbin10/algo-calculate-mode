exports.calculateMode = function(arr) {
    const answer = []
    let freq = 0
    let obj = {}
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        obj[item] = (obj[item] || 0) + 1;
        if (obj[item] > freq) {
            freq = obj[item];
        }
    }

    for (const key in obj) {
        if (obj[key] === freq) {
            answer.push(key);
        }
    }
    return answer
}
