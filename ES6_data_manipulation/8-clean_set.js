export default function cleanSet(set, startString) {
    if (typeof startString !== "string" || startString.length === 0) {
        return "";
    }
    let result = "";
    
    set.forEach(element => {
        if (element.startsWith(startString)) {
            result += element.slice(startString.length) + "-";
        }
    });
    // Remove the trailing hyphen if result is not empty
    return result.slice(0, -1);
}
