let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter the task")
    }
    else{
        let newele = document.createElement("ul");
        newele.innerHTML=`${inputs.value}<i class="fa-solid fa-trash-can-arrow-up"></i>`;
        text.appendChild(newele);
        inputs.value="";
        newele.querySelector("i").addEventListener("click", remove);
        function remove(){
            newele.remove()
        }
    }
}
