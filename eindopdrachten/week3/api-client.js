
const getToDoList = async () => {
    try{         
        const res = await fetch("https://wincacademydatabase.firebaseio.com/Cees/Tasks.json", { method: "GET" });        
        const getTaskData = await res.json();
        return getTaskData;
    } catch (error){ 
        console.log(error);}
}
    
const taskInput = document.getElementById("taskButton").addEventListener("click", () =>{

    const pdt = { description: (document.getElementById("myInput").value), done: "false" };
        fetch("https://wincacademydatabase.firebaseio.com/Cees/Tasks.json", { method: "POST",
            headers: {
                'Content-Type': 'application/json',        
            },
            body: JSON.stringify(pdt),
    }); 
        let newLi = document.createElement('li');
        let trashBt = document.createElement("button")
        trashBt.innerHTML = `<img src="trashcan.png">`;
        trashBt.className = "delBt";
        trashBt.addEventListener("click", function deleteTask(){ 
            fetch("https://wincacademydatabase.firebaseio.com/Cees/Tasks/" + pdt.id +".json", {method: "DELETE"},);})
        newLi.innerHTML = "Taak is : " + pdt.description + " - " + pdt.done + "       ";
        newLi.appendChild(trashBt);
        getUl.appendChild(newLi);  
    
});


    
    

    



