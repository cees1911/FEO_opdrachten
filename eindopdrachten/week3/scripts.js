
let getUl = document.querySelector("ul");

getToDoList().then ((getTaskData)=>{
    let tasks = Object.keys(getTaskData).map(key => ({
    id: key,
    description: getTaskData[key].description,
    done: getTaskData[key].done    
    }));
    
    
    tasks.forEach((toDo) => {

        let newLi = document.createElement('li');
        let trashBt = document.createElement("button")
        trashBt.innerHTML = `<img src="trashcan.png">`;
        trashBt.className = "delBt";
        trashBt.addEventListener("click", function deleteTask(){             
            fetch("https://wincacademydatabase.firebaseio.com/Cees/Tasks/" + toDo.id +".json", {method: "DELETE"},);})
        newLi.innerHTML = "Taak is : " + toDo.description + " - " + toDo.done + "       ";
        newLi.appendChild(trashBt);
        getUl.appendChild(newLi);        

    });


})
