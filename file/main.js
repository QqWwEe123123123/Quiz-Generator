function click(c){
    return c + 1
}
function myfunction(){
    var c = 0;
    var bnt = document.createElement("BUTTON");

    bnt.innerText = "Button";
    document.body.appendChild(bnt);
    
    bnt.addEventListener("click",() =>{
        console.log(click(c));
    })
}