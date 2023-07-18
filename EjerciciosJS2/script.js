function loadExercise(file) {
    const script = document.createElement('script');
    script.src = file;
    document.head.appendChild(script);
  }
  
  function setOutput(text) {
    document.getElementById("output").textContent = text;
  }
  
  function requestInput(callback) {
    const input = prompt("Ingrese los datos:");
  
    if (input !== null) {
      callback(input);
    }
  }
  