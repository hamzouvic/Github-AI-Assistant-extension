

const data = {
    prompt: 'what is the temperature',
    answer: 'the temperature is 2 degree outside'
}
function ApiCall(prompt){
    return data;
}

async function getConversation() {
    const result = await fetch('http://localhost:3000/conversation')
    return result.json()
}

module.exports = {getConversation, ApiCall}