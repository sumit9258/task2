document.getElementById("bar").addEventListener("click",()=>{
    const list=document.getElementById("nav-btn")
    if (list.style.display=="none") {
        list.style.display="block"
    } else{
        list.style.display="none"
    }
})
