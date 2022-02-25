let lists = [
    { id: 1, title: "Create a button" },
    { id: 2, title: "Create a edit button" },
    { id: 3, title: "Create a delete button" },
    { id: 4, title: "Create a add button" }];
    // ----- Local storage for lists ------
localStorage.setItem('lists', JSON.stringify(lists))
const localData = localStorage.getItem('lists')
const listsInfo = JSON.parse(localData)
let selectedItem = null,
isEditMode = false;
let doingList = [],
doneList = [];
// ------ constants  -------
const formOfLists = document.querySelector("#form1"),
formOfDoingList = document.querySelector("#form2"),
formOfDoneList = document.querySelector("#form3"),
inputs = document.querySelectorAll("input"),
spans = document.querySelectorAll(".spanBtn"),
buttons = document.querySelectorAll("button"),
draggables = document.querySelectorAll(".draggable"),
cardBodys = document.querySelectorAll(".card-body"),
unOrderedLists1 = document.querySelector("#ul1");
const unOrderedLists2 = document.getElementById("ul2");
const unOrderedLists3 = document.getElementById("ul3");

// Create list
const CreateLists = () => {
    localStorage.setItem('unOrderedLists1', JSON.stringify(unOrderedLists1))
    const ul1 = localStorage.getItem("unOrderedLists1", JSON.stringify(unOrderedLists1))
    const ulCard1 = JSON.parse(ul1)
    ulCard1.innerHTML = "";
    
    listsInfo.map((todo, index) => {
        ulCard1.innerHTML += `<li class="draggable" id="drag1" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo1(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo1(${todo.id})" class="btn bi bi-trash"></i>
        </span>
    </li>`
    })
    
}

// createToDoingList
const createToDoingList = () => {
    unOrderedLists2.innerHTML = "";
    doingList.map((todo, index) => {
        unOrderedLists2.innerHTML += `<li class="draggable" id="drag2" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo2(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo2(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// createToDoneList
const createToDoneList = () => {

    unOrderedLists3.innerHTML = "";
    doneList.map((todo, index) => {
        unOrderedLists3.innerHTML += `<li class="draggable" id="drag3" ondragstart="drag(event)" draggable="true">
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo3(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo3(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// create via formOflists
formOfLists.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") {
        if (!isEditMode) {
            lists = [...lists, newToDo];
            formOfLists.reset();
            CreateLists();
        } else {
            lists = lists.map(todo => {
                if (todo.id === selectedItem) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
            CreateLists();
            formOfLists.reset();
            isEditMode = false;
            selectedItem = null;
            inputs[0].style.color="black";
            inputs[0].style.fontWeight="normal";
            buttons[0].innerHTML = `
                <i class="bi bi-plus"></i>
                <span> Create</span>`
        };

    } else alert("Fill the gaps")
    localStorage.setItem("newToDo", JSON.stringify(newToDo))
    localStorage.getItem("newToDo", JSON.parse(newToDo))
};
// create via formOfDoingList
formOfDoingList.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value,
    };
    if (newToDo.title !== "") {
        if (!isEditMode) {
            doingList = [...doingList, newToDo];
            formOfDoingList.reset();
           createToDoingList();
        } else {
           doingList =doingList.map(todo => {
                if (todo.id === selectedItem) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
           createToDoingList();
            formOfDoingList.reset();
            isEditMode = false;
            selectedItem = null;
            inputs[1].style.color="black";
            inputs[1].style.fontWeight="normal";
            buttons[1].innerHTML = `
                <i class="bi bi-plus"></i>
                <span> Create</span>`
        }

    } else alert("Fill  the gaps")
}

// create via formOfDoneList
formOfDoneList.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") {
        if (!isEditMode) {
           doneList = [...doneList, newToDo];
            formOfDoneList.reset();
            createToDoneList();
        } else {
            doneList = doneList.map(todo => {
                if (todo.id === selectedItem) {
                    todo.title = newToDo.title;
                };
                return todo;
            });
            createToDoneList();
            formOfDoneList.reset();
            isEditMode = false;
            selectedItem = null;
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
        lists = lists.filter(user => user.id !== id);
        CreateLists();
    }
}

const DeleteToDo2 = (id) => {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (confirmation) {
        doingList = doingList.filter(user => user.id !== id);
       createToDoingList();
    }
}

const DeleteToDo3 = (id) => {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (confirmation) {
        doneList = doneList.filter(user => user.id !== id);
        createToDoneList();
    }
}

const EditToDo1 = (id) => {
    isEditMode = true;
    selectedItem = id;
    inputs[0].style.color="crimson";
    inputs[0].style.fontWeight="bold";
    buttons[0].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    lists.map(todo => {
        if (todo.id === id) {
            inputs[0].value = todo.title;
        }
    })
}


const EditToDo2 = (id) => {
    isEditMode = true;
    selectedItem = id;
    inputs[1].style.color="crimson";
    inputs[1].style.fontWeight="bold";
    buttons[1].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    doingList.map(todo => {
        if (todo.id === id) {
            inputs[1].value = todo.title;
        }
    })
}
const EditToDo3 = (id) => {
    isEditMode = true;
    selectedItem = id;
    inputs[2].style.color="crimson";
    inputs[2].style.fontWeight="bold"
    buttons[2].innerHTML = `
    <i class="bi bi-pencil"></i>
    <span> Edit</span>`
    doneList.map(todo => {
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
// unOrderedLists.forEach(ul=>{
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
window.onload = () => CreateLists(),createToDoingList(), createToDoneList()