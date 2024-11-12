var ulElem = document.getElementById("ul")
function add(){
    var input = document.getElementById("input") ;
    if(input.value){
     var liElement = document.createElement("li") ;
     var liText = document.createTextNode(input.value) ;
     liElement.appendChild(liText) ;
       ulElem.appendChild(liElement) ;
       var remove = document.createElement("button") ;
       remove.innerHTML = '<i class="fas fa-times"></i> Remove';
       liElement.appendChild(remove) ;
       remove.setAttribute("onclick","cut(this)")
       

       var edit = document.createElement("button") ;
      edit.innerHTML = `  <i class="fas fa-edit"></i> Edit`
       liElement.appendChild(edit) ;
       edit.setAttribute("onclick","edit(this)")
       
     

         input.value = "" ;
    }
    else{
        alert("Please Fill the Input Feild !")
    }
}

function cut(e){
     e.parentNode.remove()
 }

function edit(e){
    var newInput = prompt("Edit the task") 
    e.parentNode.firstChild.nodeValue  = newInput
}

function dltAll(){
    ulElem.innerHTML = ""
}