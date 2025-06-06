
document.addEventListener( "DOMContentLoaded", () => {

    const search    =  document.querySelector(".searchform");
    const taskInput = document.querySelector(".inputarea");
    const addButton = document.querySelector(".addTaskbutton");
    const newTask   = document.querySelector(".tasklist");
    const removeImg = document.querySelector(".bgimg");
    const todoList = document.querySelector(".todocontainer");


  
    const addTask = (event) => {
     event.preventDefault();   
     const taskText = taskInput.value.trim();     
     if(!taskText){
        return;
     }
    
     const li = document.createElement("li")
     li.textContent = taskText;
     li.innerHTML =
     `
     <input type="checkbox" class="checkbox">
     <span class="line">${ taskText}</span>
     <div class ="listbtns"> 
     <button class="dltbtn"> <i class="fa-regular fa-trash-can"></i></button>                
     <button class="editbtn"> <i class="fa-regular fa-pen-to-square"></i></button>                
     
     
     </div>
     
     `

     
    const span = li.querySelector("span"); 
    const checkbox = li.querySelector(".checkbox");


    checkbox.addEventListener("change", () => {
        span.classList.toggle("line-through", checkbox.checked);
    });



    


     li.querySelector(".dltbtn").
     addEventListener("click" ,  ()=> {li.remove();
        toggleEmptyspace();
     });
    
     const editBtn = li.querySelector(".editbtn");
     editBtn.addEventListener("click", ()=>{
        if(!checkbox.checked){
            taskInput.value =li.querySelector("span").textContent;
            li.remove();
            toggleEmptyspace();
        }
     });

     checkbox.addEventListener("change", () => {
        span.classList.toggle("line-through", checkbox.checked);
       });

     
     newTask.appendChild(li);
     taskInput.value = "";
     toggleEmptyspace();
        
    };
          
    


    addButton.addEventListener( "click", addTask );

    taskInput.addEventListener("click" ,(a) => {
        if(a.key === "Enter"){
            addTask(a);
        }


    });


    const toggleEmptyspace = () => {
    removeImg.style.display = newTask.children.length  === 0 ? 'block' : 'none';
    todoList.style.width = newTask.children.length  > 0 ? '100%' : '50%' ;
    };




search.addEventListener("keyup", () => {
  const items = newTask.children; //
  const text = search.querySelector(".search").value.toLowerCase().trim(); 

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const hasMatch = item.textContent.toLowerCase().includes(text);

    if (!hasMatch) {
      item.style.display = "none"; 
    } else {
      item.style.display = ""; 
    }
  }
});




    

});



