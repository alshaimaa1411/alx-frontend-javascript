export default function concatArrays(array1, array2, string) {
    let x = [...array1, ...array2, ...string];
    return x;
}