document.addEventListener("DOMContentLoaded", () => {
    const fotoPerfil = document.querySelector(".fotoPerfil");
    const iconeEditar = document.querySelector(".fotoUsuario i");
    const nomeInput = document.querySelector(".nomeUsuario input");
    const nomeExibido = document.querySelector(".nomeAtualUsuario");
    const mensagemAtualizacao = document.querySelector(".mensagemAtualizacao");

    // Carrega dados do localStorage (se existirem)
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    const fotoSalva = localStorage.getItem("fotoPerfil");

    if (nomeSalvo) {
      nomeInput.value = nomeSalvo;
      nomeExibido.textContent = nomeSalvo;
    }

    if (fotoSalva) {
      fotoPerfil.src = fotoSalva;
    }

    // Atualiza nome e mostra mensagem
    nomeInput.addEventListener("input", () => {
      const novoNome = nomeInput.value;
      nomeExibido.textContent = novoNome;
      localStorage.setItem("nomeUsuario", novoNome);

      // Mostrar mensagem de sucesso
      mensagemAtualizacao.style.display = "block";
      mensagemAtualizacao.style.opacity = 1;

      // Esconde após 3 segundos
      setTimeout(() => {
        mensagemAtualizacao.style.opacity = 0;
        setTimeout(() => {
          mensagemAtualizacao.style.display = "none";
        }, 300);
      }, 3000);
    });

    // Cria input oculto para upload de imagem
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "image/*";
    inputFile.style.display = "none";
    document.body.appendChild(inputFile);

    iconeEditar.addEventListener("click", () => {
      inputFile.click();
    });

    inputFile.addEventListener("change", () => {
      const file = inputFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          fotoPerfil.src = reader.result;
          localStorage.setItem("fotoPerfil", reader.result);
        };
        reader.readAsDataURL(file);
      }
    });
  });