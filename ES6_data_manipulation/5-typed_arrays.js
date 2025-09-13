export default function createInt8TypedArray(length, position, value) {
    if (position > length || position < 0) {
        throw  new Error("Position outside range");
    }

    let int_8_array = new Int8Array(length);
    int_8_array[position] = value;

    return int_8_array.buffer;
}
