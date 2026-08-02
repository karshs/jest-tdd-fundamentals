

export function analyzeArray(arr){
    if(!arr  || arr.length===0) return null;

    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const sum = arr.reduce((sum , curr) => curr + sum , 0);
    const average = sum / length;

    return {
        average,
        min,
        max, 
        length
    };
};