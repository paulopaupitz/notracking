export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];

export const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));

// VERIFICA SE JÁ EXISTE UM CLIENTE COM ESSE EMAIL
  
const cadastrarUsuarioLocalmente = () => {
  const email = getEmail();
  const password = getPassword();

  // Verifica se o usuário já existe no armazenamento local
  const usuariosCadastrados =
    JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioExistente = usuariosCadastrados.find((u) => u.email === email);

  if (usuarioExistente) {
    displayMessageToUser("Esse email já está em uso.");
    return; // Interrompe o cadastro
  }

  // Cria um novo objeto de usuário
  const novoUsuario = {
    email: email,
    password: password,
    nome: getName(),
    genero: getGender(),
    dataNascimento: getBirthDate(),
    data: new Date(),
  };

  // Adiciona o novo usuário ao array de usuários cadastrados
  usuariosCadastrados.push(novoUsuario);

  // Salva a lista atualizada no armazenamento local
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

  setTimeout(() => {
    toggleLoadingIcon();
  }, 100);

  console.log("Usuário cadastrado com sucesso!");
  window.location.href = "entrar.html";
};


//CREATE/CRIAR CLIENTE
export const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//READ/LER CLIENTE
export const readClient = () => getLocalStorage();

//UPDATE/ATUALIZAR CLIENTE
export const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};
//DELETE/DELETAR CLIENTE
export const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

// < ------------------------ADMIN ------------------------>

export const getLocalStorageAdmin = () =>
  JSON.parse(localStorage.getItem("dbAdmin")) ?? [];

export const setLocalStorageAdmin = (dbAdmin) =>
  localStorage.setItem("dbAdmin", JSON.stringify(dbAdmin));

export const createAdmin = (admin) => {
  const dbAdmin = getLocalStorageAdmin();
  dbAdmin.push(admin);
  setLocalStorageAdmin(dbAdmin);
};



