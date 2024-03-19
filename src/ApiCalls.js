

const data = {
    prompt: 'what is the temperature',
    answer: 'the temperature is 2 degree outside'
}
async function submitPrompt(prompt) {
    const raw = JSON.stringify({
        "prompt": prompt
    });

    console.log('data',raw)
    const result = await fetch('http://localhost:3000/prompt', {
        method: 'POST',
        headers : {"Content-Type": "application/json"},
        body: raw
    })
    return result.json()
}

async function getConversation() {
    const result = await fetch('http://localhost:3000/conversation')
    return result.json()
}

module.exports = {getConversation, submitPrompt}