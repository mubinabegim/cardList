let todos = [
    { id: 1, title: "Create a button" },
    { id: 2, title: "Create a edit button" },
    { id: 3, title: "Create a delete button" },
    { id: 4, title: "Create a add button" }];
let whichEl = null,
    isEdit = false;
let todos2 = [],
    todos3 = [];
// constants
const form1 = document.querySelector("#form1"),
    form2 = document.querySelector("#form2"),
    form3 = document.querySelector("#form3"),
    
    inputs = document.querySelectorAll("input"),
    spans = document.querySelectorAll(".spanBtn"),
    buttons = document.querySelectorAll("button"),
    draggables = document.querySelectorAll(".draggable"),
    cardBodys = document.querySelectorAll(".card-body"),
    uls = document.querySelectorAll("ul");

// writeToDos1
const WriteTodos1 = () => {
    uls[0].innerHTML = "";
    todos.map((todo, index) => {
        uls[0].innerHTML += `<li class="draggable" id="drag1" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo1(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo1(${todo.id})" class="btn bi bi-trash"></i>
        </span>
    </li>`
    })
}

// WriteTodos2
const WriteTodos2 = () => {
    uls[1].innerHTML = "";
    todos2.map((todo, index) => {
        uls[1].innerHTML += `<li class="draggable" id="drag2" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo2(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo2(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// WriteTodos3
const WriteTodos3 = () => {

    uls[2].innerHTML = "";
    todos3.map((todo, index) => {
        uls[2].innerHTML += `<li class="draggable" id="drag3" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo3(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo3(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// create via form1
form1.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") {
        if (!isEdit) {
            todos = [...todos, newToDo];
            form1.reset();
            WriteTodos1();
        } else {
            todos = todos.map(todo => {
                if (todo.id === whichEl) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
            WriteTodos1();
            form1.reset();
            isEdit = false;
            whichEl = null;
            inputs[0].style.color="black";
            inputs[0].style.fontWeight="normal";
            buttons[0].innerHTML = `
                <i class="bi bi-plus"></i>
                <span> Create</span>`
        };

    } else alert("Fill  the gaps")
};
// create via form2
form2.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value,
    };
    if (newToDo.title !== "") {
        if (!isEdit) {
            todos2 = [...todos2, newToDo];
            form2.reset();
            WriteTodos2();
        } else {
            todos2 = todos2.map(todo => {
                if (todo.id === whichEl) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
            WriteTodos2();
            form2.reset();
            isEdit = false;
            whichEl = null;
            inputs[1].style.color="black";
            inputs[1].style.fontWeight="normal";
            buttons[1].innerHTML = `
                <i class="bi bi-plus"></i>
                <span> Create</span>`
        }

    } else alert("Fill  the gaps")
}

// create via form3
form3.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") {
        if (!isEdit) {
            todos3 = [...todos3, newToDo];
            form3.reset();
            WriteTodos3();
        } else {
            todos2 = todos2.map(todo => {
                if (todo.id === whichEl) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
            WriteTodos3();
            form3.reset();
            isEdit = false;
            whichEl = null;
            inputs[2].style.color="black";
            inputs[2].style.fontWeight="normal"
            buttons[2].innerHTML = `
                <i class="bi bi-plus"></i>
                <span> Create</span>`
        }
    } else alert("Fill  the gaps")
}

const DeleteToDo1 = (id) => {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (confirmation) {
        todos = todos.filter(user => user.id !== id);
        WriteTodos1();
    }
}

const DeleteToDo2 = (id) => {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (confirmation) {
        todos2 = todos2.filter(user => user.id !== id);
        WriteTodos2();
    }
}

const DeleteToDo3 = (id) => {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (confirmation) {
        todos3 = todos3.filter(user => user.id !== id);
        WriteTodos3();
    }
}

const EditToDo1 = (id) => {
    isEdit = true;
    whichEl = id;
    inputs[0].style.color="crimson";
    inputs[0].style.fontWeight="bold";
    buttons[0].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    todos.map(todo => {
        if (todo.id === id) {
            inputs[0].value = todo.title;
        }
    })
}


const EditToDo2 = (id) => {
    isEdit = true;
    whichEl = id;
    inputs[1].style.color="crimson";
    inputs[1].style.fontWeight="bold";
    buttons[1].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    todos2.map(todo => {
        if (todo.id === id) {
            inputs[1].value = todo.title;
        }
    })
}
const EditToDo3 = (id) => {
    isEdit = true;
    whichEl = id;
    inputs[2].style.color="crimson";
    inputs[2].style.fontWeight="bold"
    buttons[2].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    todos3.map(todo => {
        if (todo.id === id) {
            inputs[2].value = todo.title;
        }
    })
}
// Drag and drop
// draggables.forEach(draggable =>{
//     draggable.addEventListener("dragstart", () => {
//         // console.log('drag start')
//         draggable.classList.add("dragging")
//     })
//     draggable.addEventListener("dragend", ()=>{
//         draggable.classList.remove("dragging")
//     })
// })
// uls.forEach(ul=>{
//     ul.addEventListener("dragover", e => {
//         e.preventDefault()
//         const afterElement = getDragAfterElement(ul, e.clientY)
//         // console.log("drag over")
//         const draggable = document.querySelector(".dragging");
//         if(afterElement === null){
//             ul.appendChild(draggable)
//     }else{
//         ul.insertBefore(draggable, afterElement)
//     }
//     })
// })
// const getDragAfterElement = (ul, y) =>{
//     const draggableElements = [...ul.querySelectorAll(".draggable:not(.dragging)")]
//    return draggableElements.reduce((closest, child)=>{
//         const box = child.getBoundingClientRect() 
//         const offset = y - box.top - box.height / 2 
//          if(offset < 0 && offset > closest.offset){
//              return { offset:offset, element: child }
//          } else{
//             return closest
//          }

//     }, {offset: Number.NEGATIVE_INFINITY}).element
// }
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
window.onload = () => WriteTodos1(), WriteTodos2(), WriteTodos3()