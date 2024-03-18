const button= document.querySelector("button");

function refresh(){
    window.location.reload();
}

button.addEventListener("click", refresh);