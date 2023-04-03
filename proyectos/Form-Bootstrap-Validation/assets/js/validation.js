
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function mypopup() {
    var input01 = document.getElementById("input01").value;
    var input02 = document.getElementById("input02").value;
    var input03 = document.getElementById("input03").value;
    var input04 = document.getElementById("input04").value;
    var input05 = document.getElementById("input05").value;
    var input06 = document.getElementById("input06").value;
    var input07 = document.getElementById("input07").value;
    var select01 = document.getElementById("select01").value;
    
    if (input01 == "" || input02 == "" || input03 == "" || input04 == "" || input05 == ""|| input06 == "" || input07 == "" || select01 == "") {
      alert("Por favor complete todos los campos.");
    } else {
      {
        alert("Datos guardados correctamente.");
      }
    }
  }