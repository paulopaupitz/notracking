export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];

export const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));

export const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

export const readClient = () => getLocalStorage();

export const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

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



