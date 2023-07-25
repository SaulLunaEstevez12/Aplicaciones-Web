// Variables para obtener los elementos del formulario y otros elementos del DOM
let nameInput = document.getElementById("nameInput");
let lastnameInput = document.getElementById("lastnameInput");
let phoneInput = document.getElementById("phoneInput");
let emailInput = document.getElementById("emailInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

// Agregar un evento al formulario para validar y prevenir el envío
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// Función para validar el formulario antes de agregar un nuevo usuario
let formValidation = () => {
  if (nameInput.value === "" || lastnameInput.value === "" || phoneInput.value === "" || emailInput.value === "") {
    // Mostrar mensaje de error si hay campos vacíos
    console.log("Error");
    msg.innerHTML = "Todos los campos son requeridos.";
  } else {
    // Si no hay errores, agregar el nuevo usuario y cerrar el modal
    console.log("Éxito");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    // Restablecer el atributo 'data-bs-dismiss' después de cerrar el modal
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

// Arreglo para almacenar los datos de los usuarios
let data = [{}];

// Agregar los datos del nuevo usuario al arreglo y almacenar en el almacenamiento local
let acceptData = () => {
  data.push({
    name: nameInput.value,
    lastname: lastnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

// Crear y mostrar las tareas de los usuarios en el DOM
let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.name} ${x.lastname}</span>
          <span class="small text-secondary">${x.phone}</span>
          <p>${x.email}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

// Eliminar una tarea de usuario
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

// Editar una tarea de usuario
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    let name = selectedTask.querySelector(".fw-bold").textContent;
    let lastName = name.split(" ")[1]; // Obtener el apellido del nombre
    name = name.split(" ")[0]; // Obtener el nombre del nombre
  
    let phone = selectedTask.querySelector(".small").textContent;
    let email = selectedTask.querySelector("p").textContent;
  
    nameInput.value = name;
    lastnameInput.value = lastName; // Establecer el valor del apellido en el campo de entrada
    phoneInput.value = phone;
    emailInput.value = email;
    deleteTask(e);
  };

// Restablecer el formulario después de agregar un nuevo usuario
let resetForm = () => {
  nameInput.value = "";
  lastnameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
};

// Obtener los datos del almacenamiento local y crear las tareas al cargar la página
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTasks();
})();

// Función para borrar todos los registros del almacenamiento local y recargar la página
let deleteall = () => {
    localStorage.removeItem("data");
    window.location.reload();
  };
