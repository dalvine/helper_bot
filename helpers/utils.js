export function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
}
