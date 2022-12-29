const myEmojis = ["👨‍💻", "⛷", "🍲"]
 

function renderEmojis() {
    document.getElementById("emoji-container").innerHTML = ""
    for (let myEmoji of myEmojis)
    {
        const emoji = document.createElement('span')
        emoji.textContent=myEmoji
        document.getElementById("emoji-container").append(emoji)}
      
      document.getElementById("emoji-input").value = ""
     
      }
      
renderEmojis()

document.addEventListener("click", e =>{
    e.preventDefault()
    e.target.id ==="pop-btn"? myEmojis.pop():
    e.target.id ==="shift-btn"? myEmojis.shift():
    e.target.id ==="push-btn" ? myEmojis.push (  document.getElementById("emoji-input").value):
    e.target.id ==="unshift-btn" ? myEmojis.unshift(  document.getElementById("emoji-input").value):""
    e.target.id === "pop-btn"||"shift-btn"||"push-btn"||"unshift-btn"? renderEmojis():""
    
    
})

