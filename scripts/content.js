import {getConversation, submitPrompt} from "../src/ApiCalls";

export async function generateWidget() {


    const Widget = document.createElement("div");
    Widget.style.cssText = 'box-shadow:0px 0 108px var(--borderColor-muted, var(--color-border-muted));font-size:var(--text-body-size-medium, 0.875rem);border:1px solid var(--borderColor-default, var(--color-border-default));font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";color:black;display:grid;padding:10px 20px;border-radius:15px;overflow:hidden;background-color:var(--bgColor-default, var(--color-canvas-default));border-radius:var(--borderRadius-medium, 6px);width:70vw;height:70vh;position:fixed;top:50%;left:50%;  transform: translate(-50%, -50%);z-index:100;'
    let container = document.createElement('div')
    container.style.cssText = "position:relative;max-height:100%;overflow:hidden"

    let layout;
    layout = document.createElement('div')
    layout.style.cssText = 'position:relative;display:flex; flex-direction:column;width:100%;height:100%;'
    let prompts;
    prompts = document.createElement("div")
    prompts.id = 'promptsLayout'
    prompts.style.cssText = 'max-height:100%;flex:auto;overflow-y:auto;height:inherit'
    layout.appendChild(prompts)
    let textBox;
    textBox = document.createElement('input')
    textBox.type = 'text'
    textBox.id = 'prompt'
    textBox.style.cssText = 'border:1px solid var(--borderColor-default, var(--color-border-default));border-radius:var(--borderRadius-medium, 6px);padding:10px 20px;background-color:transparent;width:100%;flex:initial; position:relative'
    textBox.addEventListener('keypress',e=>{
        if(e.key === 'Enter'){
            this.form.submit()
        }
    })
    let submit;
    submit = document.createElement('button')
    submit.style.cssText = 'border:none;outline:none;border-left:1px solid var(--borderColor-default, var(--color-border-default));position:absolute;right:0px;top:50%;transform: translateY(-50%);height:30px;padding: 0 10px 0 8px; background-color:transparent'
    submit.innerHTML = '<svg fill="var(--fgColor-muted, var(--color-fg-muted))" class="svg-icon" height="100%" width="100%" viewBox="0 0 20 20"> <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path></svg>'
    let submitLayout;
    submitLayout = document.createElement('form')
    submitLayout.style.cssText = 'position:relative;display:flex;'
    submitLayout.onsubmit = (e=>{
        e.preventDefault()
        console.log('submit')
    })
    submitLayout.appendChild(textBox)
    submitLayout.appendChild(submit)
    layout.appendChild(submitLayout)
    container.appendChild(layout)
    Widget.appendChild(container)
// Use the same styling as the publish information in an article's header
    console.log('here')
// Support for API reference docs
    const heading = document.querySelector("body");

    const open = document.createElement('button')
    open.style.cssText = ''
    open.classList.add('AppHeader-button','Button','Button--iconOnly','Button--medium','Button--secondary','color-fg-muted')
    open.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual"> <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path> </svg>';
    parent = document.querySelector('.AppHeader-globalBar-end')
    parent.insertBefore(open,parent.childNodes[6]);
    open.addEventListener('click', () => {
        if(Widget.style.display === 'none'){
            Widget.style.display = 'grid'
        }else{
            Widget.style.display = 'none'
        }
    })

    document.body.appendChild(Widget);
    const result = await getConversation()
    result.map((prompt,indx)=>{
        const text = document.createElement('div')
        text.style.cssText = 'color:white;border-bottom:1px solid var(--borderColor-default, var(--color-border-default));margin:10px 20px; max-width:100%;height:fit-content;padding:10px 20px;'
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