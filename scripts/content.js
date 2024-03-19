console.log('here')
// `document.querySelector` may return null if the selector doesn't match anything.
if (true) {
    const badge = document.createElement("div");
    badge.style.cssText = 'display:grid;padding:10px 20px;border-radius:15px;overflow:hidden;background-color:red;width:70vw;height:70vh;position:absolute;top:50%;left:50%;  transform: translate(-50%, -50%);z-index:100;'
    layout = document.createElement('div')
    layout.style.cssText = 'display:flex; flex-direction:column;width:100%;height:100%;'
    prompts = document.createElement("div")
    prompts.style.cssText = 'flex: auto;'
    layout.appendChild(prompts)
    prompts.innerText = 'hello this is a prompts'
    textBox = document.createElement('textarea')
    textBox.style.cssText = 'width:100%;flex:initial; position:relative'
    submit = document.createElement('button')
    submitLayout = document.createElement('div')
    submitLayout.style.cssText = 'position:relative;display:flex'
    submit.innerText = 'send'
    submit.style.cssText = ''
    submitLayout.appendChild(textBox)
    submitLayout.appendChild(submit)
    layout.appendChild(submitLayout)
    badge.appendChild(layout)
    // Use the same styling as the publish information in an article's header
    console.log(badge)
    // Support for API reference docs
    const heading = document.querySelector("body");
    document.body.appendChild(badge);

}