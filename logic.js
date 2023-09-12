var addbutton = document.getElementById("add");
var taskinput = document.getElementById("task");
var tasklist = document.getElementById("taskList");



// Onclick, addfunction is executed. Which adds the users input as an item to the list.

addbutton.addEventListener("click",addfunction);

function addfunction() {

   var task = taskinput.value;

  //If is not an empty string
  if(task.trim()){
    
    //add new task to list
    var newItem = document.createElement("LI");
    var newitemtext = document.createTextNode(task);
    newItem.appendChild(newitemtext);
    newItem.setAttribute('class','new-item-text')

    var Done = document.createElement("BUTTON")
    Done.setAttribute('class','done')
    Done.innerHTML = "DONE";
    newItem.appendChild(Done)
    
    var tasklist2 = tasklist.children;
    tasklist.insertBefore(newItem,tasklist2[0]);
    
    
    //clear input box
    taskinput.value = "";

    // This is to clear task when Done is pressed
    Done.addEventListener("click",cleartask)


    }

  else{

    window.alert("invalid input")

  }

};


// This is to clear tasklist when Clear is pressed.
var clearbutton = document.getElementById("clear")
clearbutton.addEventListener("click",clearall)


function clearall() {

      tasklist.innerHTML = "";
}

// This is to clear task function

function cleartask(){


  var taskItem = event.target.parentElement; // event.target hace referencia 
  //al elemento que sufrio el evento en este caso event.target == Done
  
  tasklist.removeChild(taskItem); 
  

}