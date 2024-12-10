const textbox = document.getElementById("textarea");
const totalcounter = document.getElementById("Tchar");
const Remaining = document.getElementById("rem")
 

textbox.addEventListener("keyup", ()=>{
        updatecounter()
});

function updatecounter(){
        totalcounter.innerText = textbox.value.length
        Remaining.innerText = textbox.getAttribute("maxlength") - textbox.value.length
}