document.getElementById("enter").addEventListener("click", addlist)
document.addEventListener("keydown", (elt) => {
    if (elt.key === "Enter") addlist()
})

const userInput = document.getElementById("userinput")
const ulist = document.querySelector("ul")

function addlist() {
    let li = document.createElement("li")
    let text = document.createTextNode(userInput.value)
    li.appendChild(text)
    ulist.appendChild(li)
    userInput.value = ""
}