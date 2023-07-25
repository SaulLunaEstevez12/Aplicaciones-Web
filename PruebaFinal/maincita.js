let taskDateInput = document.getElementById("taskDateInput");
let taskTimeInput = document.getElementById("taskTimeInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (taskDateInput.value === "" || taskTimeInput.value === "") {
    console.log("Error");
    msg.innerHTML = "Todos los campos son requeridos.";
  } else {
    console.log("Éxito");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data3 = [{}];

let acceptData = () => {
  data3.push({
    date: taskDateInput.value,
    time: taskTimeInput.value,
  });

  localStorage.setItem("data3", JSON.stringify(data3));

  console.log(data3);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data3.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="small text-secondary">Fecha: ${x.date}, Hora: ${x.time}</span>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data3.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data3", JSON.stringify(data3));
  console.log(data3);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  const datetime = selectedTask.children[0].innerHTML.split(", ");
  taskDateInput.value = datetime[0].replace("Fecha: ", "");
  taskTimeInput.value = datetime[1].replace("Hora: ", "");

  deleteTask(e);
};

let resetForm = () => {
  taskDateInput.value = "";
  taskTimeInput.value = "";
};

(() => {
  data3 = JSON.parse(localStorage.getItem("data3")) || [];
  console.log(data3);
  createTasks();
})();

let deleteall = () => {
    localStorage.removeItem("data3");
    window.location.reload();
  };