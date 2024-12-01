export function setLocalStorage(user) {
  if (user) {
    localStorage.setItem("Users", JSON.stringify(user));
  } else {
    localStorage.removeItem("Users"); // Remove o usuário em caso de logout
  }
}

export function getLocalStorage() {
  const json = localStorage.getItem("Users");
  return json ? JSON.parse(json) : null; // Retorna o objeto ou null se não houver dados
}
