const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiInput = document.getElementById("emoji-input")

function renderEmojis() {
    document.getElementById("emoji-container").innerHTML = ""
    for (let myEmoji of myEmojis)
    {
        const emoji = document.createElement('span')
        emoji.textContent=myEmoji
        document.getElementById("emoji-container").append(emoji)}
      }
      
renderEmojis()

function pushUnshift(){
        emojiInput.value = ""
        renderEmojis()  }

document.getElementById("pop-btn").addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()  })

document.getElementById("shift-btn").addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()  })

document.getElementById("unshift-btn").addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        pushUnshift()  }
})

 document.getElementById("push-btn").addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
       pushUnshift()    }
})
document.getElementById("btn").addEventListener("click",function gfgMenu() 
            {const nav = document.querySelector('.nav');
  
            if (nav.style.display === "none") 
            {nav.style.display = "block";}
            else {nav.style.display = "none";}
              }
        )
