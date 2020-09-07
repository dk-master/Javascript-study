const kvArray = [{key : 1 , value : 10},
                {key : 2, value : 20},
                {key : 3, value : 30}]

const reformArray = kvArray.map(obj => {
    const reObj = {};
    reObj[obj.key] = obj.value;
    return reObj;
})
const result = kvArray.map(idx => idx.key)
console.log(result);

const result1 = result.filter(idx => idx !== 1)
console.log(result1);