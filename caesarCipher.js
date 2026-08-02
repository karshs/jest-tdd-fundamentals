
function shiftChar(str, shift){
    
    const code  = str.charCodeAt(0);

    if( code >= 65 && code <= 90){
        return String.fromCharCode(((code - 65 + shift) % 26)  + 65);
    }
    else if( code >= 97 && code <= 122){
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }

    return str;

}

export function caesarCipher(str, shift){
    const cleanShift  = ((shift % 26) + 26) % 26;

    return str.split('').map(char => shiftChar(char, cleanShift) ).join('');
}