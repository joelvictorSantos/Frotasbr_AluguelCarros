const API_URL = "http://localhost:5000/dadosUsuario"; // URL base do servidor

// Função para cadastrar usuário
export const cadastrarUsuario = async (usuario) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar usuário");
    }

    return await response.json(); // Retorna o usuário criado
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
};

// Função para login do usuário
export const loginUsuario = async (email, senha) => {
  try {
    const response = await fetch(`${API_URL}?email=${email}&senha=${senha}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao autenticar usuário");
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Usuário ou senha inválidos");
    }

    return data[0]; // Retorna o usuário autenticado
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
};

// Função para adicionar veículo ao usuário
export const adicionarVeiculoAoUsuario = async (userId, veiculo) => {
  try {
    const responseGet = await fetch(`${API_URL}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseGet.ok) {
      throw new Error("Erro ao buscar os dados do usuário");
    }

    const usuario = await responseGet.json();

    // Adicionar o veículo ao array de veículos do usuário
    const novosVeiculos = [...(usuario.dadosVeiculos || []), veiculo];

    // Atualizar o usuário com os novos veículos
    const responsePatch = await fetch(`${API_URL}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dadosVeiculos: novosVeiculos }),
    });

    if (!responsePatch.ok) {
      throw new Error("Erro ao atualizar os veículos do usuário");
    }

    return await responsePatch.json(); // Retorna os dados atualizados
  } catch (error) {
    console.error("Erro ao adicionar veículo ao usuário:", error);
    throw error;
  }
};
