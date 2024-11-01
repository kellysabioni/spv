
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('topo-scrolled');
    } else {
        header.classList.remove('topo-scrolled'); 1 
    }
});

const detailsElements = document.querySelectorAll('details');

        detailsElements.forEach(details => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    detailsElements.forEach(otherDetails => {
                        if (otherDetails !== details) {
                            otherDetails.open = false;
                        }
                    });
                }
            });
        });

const formulario = document.querySelector("form");
const campoTelefone = formulario.querySelector("#telefone");
$(campoTelefone).mask("(00) 00000-0000");

var form = document.getElementById("form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Obrigado! Mensagem enviada com sucesso. Aguarde nosso retorno. 🚗";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Parece que houve um problema ao enviar seu formulário. Por favor, tente novamente mais tarde."
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)