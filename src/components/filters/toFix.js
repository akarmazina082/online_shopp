export default function toFix(value){
    value = parseFloat(value)
    return value.toFix(2) + '$'
}