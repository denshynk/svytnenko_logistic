function splitString(inputString){
    const character = [];
    const regex = /[\s\S]/gu

    let match;

    while ((match = regex.exec(inputString)) !==null){
        character.push(match[0])
    }

    return character
}
export default splitString;