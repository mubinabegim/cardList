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
    form3 = document.querySelector("#form3");
    todos_ul1 = document.querySelector("#ul1"),
    todos_ul2 = document.querySelector("#ul2"),
    todos_ul3 = document.querySelector("#ul3"),
    inputs = document.querySelectorAll("input"),
    spans = document.querySelectorAll(".spanBtn"),
    buttons = document.querySelectorAll("button");

// writeToDos1
const WriteTodos1 = () => {
    todos_ul1.innerHTML = "";
    todos.map((todo, index) => {
        todos_ul1.innerHTML += `<li>
        <span>${index + 1}. ${todo.title}</span>
        <span style="display:flex;">
            <i onclick="EditToDo1(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo1(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// WriteTodos2
const WriteTodos2 = () => {
    todos_ul2.innerHTML = "";
    todos2.map((todo, index) => {
        todos_ul2.innerHTML += `<li>
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

    todos_ul3.innerHTML = "";
    todos3.map((todo, index) => {
        todos_ul3.innerHTML += `<li>
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
                <span> Edit</span>`
        };

    } else alert("Fill all the gaps")
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
                <span> Edit</span>`
        }

    } else alert("Fill all the gaps")
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
                <span> Edit</span>`
        }
    } else alert("Fill all the gaps")
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
window.onload = () => WriteTodos1(), WriteTodos2(), WriteTodos3()