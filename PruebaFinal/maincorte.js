let haircutTypeSelect = document.getElementById("haircutTypeSelect");
let cuttingMethodSelect = document.getElementById("cuttingMethodSelect");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (haircutTypeSelect.value === "" || cuttingMethodSelect.value === "") {
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

let data1 = [{}];

let acceptData = () => {
  data1.push({
    haircutType: haircutTypeSelect.value,
    cuttingMethod: cuttingMethodSelect.value,
  });

  localStorage.setItem("data1", JSON.stringify(data1));

  console.log(data1);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data1.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="small text-secondary">Tipo de Corte: ${x.haircutType}, Método de Corte: ${x.cuttingMethod}</span>
  
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
  data1.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data1", JSON.stringify(data1));
  console.log(data1);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  const typeMethod = selectedTask.children[0].innerHTML.split(", ");
  haircutTypeSelect.value = typeMethod[0].replace("Tipo de Corte: ", "");
  cuttingMethodSelect.value = typeMethod[1].replace("Método de Corte: ", "");

  deleteTask(e);
};

let resetForm = () => {
  haircutTypeSelect.value = "Corto";
  cuttingMethodSelect.value = "Maquina";
};

(() => {
  data1 = JSON.parse(localStorage.getItem("data1")) || [];
  console.log(data1);
  createTasks();
})();

let deleteall = () => {
    localStorage.removeItem("data1");
    window.location.reload();
  };