const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); 
});

function salvar() {
      
      let nome = document.getElementById("nome").value;
      let telefone = document.getElementById("telefone").value;
      let email = document.getElementById("email").value;

      
      let usuario = {
        nome: nome,
        telefone: telefone,
        email: email
      };

     
      localStorage.setItem("usuario", JSON.stringify(usuario));

      alert("Informação salva com sucesso!");
    }

    function mostrar() {
      
      let usuario = localStorage.getItem("usuario");

      
      usuario = JSON.parse(usuario);

      
      document.getElementById("resultado").innerText =
        ` Nome: ${usuario.nome} |  Telefone: ${usuario.telefone} | Email: ${usuario.email}`;
    }

