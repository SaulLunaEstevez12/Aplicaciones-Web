let stylistNameInput = document.getElementById("stylistNameInput");
let backupStylistNameInput = document.getElementById("backupStylistNameInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (stylistNameInput.value === "" || backupStylistNameInput.value === "") {
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

let data2 = [{}];

let acceptData = () => {
  data2.push({
    stylistName: stylistNameInput.value,
    backupStylistName: backupStylistNameInput.value,
  });

  localStorage.setItem("data2", JSON.stringify(data2));

  console.log(data2);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data2.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="small text-secondary">Nombre de Estilista: ${x.stylistName}, Nombre de Estilista de Respaldo: ${x.backupStylistName}</span>
  
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
  data2.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data2", JSON.stringify(data2));
  console.log(data2);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  const names = selectedTask.children[0].innerHTML.split(", ");
  stylistNameInput.value = names[0].replace("Nombre de Estilista: ", "");
  backupStylistNameInput.value = names[1].replace("Nombre de Estilista de Respaldo: ", "");

  deleteTask(e);
};

let resetForm = () => {
  stylistNameInput.value = "";
  backupStylistNameInput.value = "";
};

(() => {
  data2 = JSON.parse(localStorage.getItem("data2")) || [];
  console.log(data2);
  createTasks();
})();

let deleteall = () => {
    localStorage.removeItem("data2");
    window.location.reload();
  };