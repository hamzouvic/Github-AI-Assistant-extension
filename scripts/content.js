import {getConversation, submitPrompt} from "../src/ApiCalls";

export async function generateWidget() {

    const badge = document.createElement("div");
    badge.style.cssText = 'color:black;display:grid;padding:10px 20px;border-radius:15px;overflow:hidden;background-color:white;width:70vw;height:70vh;position:absolute;top:50%;left:50%;  transform: translate(-50%, -50%);z-index:100;'
    let layout;
    layout = document.createElement('div')
    layout.style.cssText = 'display:flex; flex-direction:column;width:100%;height:80%;'
    let prompts;
    prompts = document.createElement("div")
    prompts.id = 'promptsLayout'
    prompts.style.cssText = 'flex: auto;overflow-y:auto;height:inherit'
    layout.appendChild(prompts)
    let textBox;
    textBox = document.createElement('input')
    textBox.type = 'text'
    textBox.id = 'prompt'
    textBox.style.cssText = 'background-color:gray;width:100%;flex:initial; position:relative'
    let submit;
    submit = document.createElement('button')
    let submitLayout;
    submitLayout = document.createElement('div')
    submitLayout.style.cssText = 'position:relative;display:flex'
    submit.innerText = 'send'
    submit.style.cssText = ''
    submitLayout.appendChild(textBox)
    submitLayout.appendChild(submit)
    layout.appendChild(submitLayout)
    badge.appendChild(layout)
// Use the same styling as the publish information in an article's header
    console.log('here')
// Support for API reference docs
    const heading = document.querySelector("body");

    const open = document.createElement('button')
    open.style.cssText = 'position:absolute; right:10px; bottom:10px;'
    open.innerText = 'click me ';

    document.body.appendChild(open);
    open.addEventListener('click', () => {
        if(badge.style.display === 'none'){
            badge.style.display = 'grid'
        }else{
            badge.style.display = 'none'
        }
    })

    document.body.appendChild(badge);
    const result = await getConversation()
    result.map((prompt)=>{
        const text = document.createElement('div')
        text.style.cssText = 'width:100%;height:fit-content;padding:10px 20px;'
        text.innerText = prompt.content
        prompts.appendChild(text)
    })
    submit.addEventListener('click',sendData)
}
async function sendData(){
    const layout = document.getElementById("promptsLayout")
    const text = document.createElement('div')
    text.style.cssText = 'width:100%;height:fit-content;padding:10px 20px;'

    console.log('sending')
    const prompt = document.getElementById('prompt').value
    text.innerText = prompt
    layout.appendChild(text)

    const response = await submitPrompt(prompt)
    console.log(response)
    text.innerText = response.content
    layout.appendChild(text)
}


await generateWidget()