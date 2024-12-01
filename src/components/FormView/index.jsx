import React, { useState, Fragment, useContext } from "react";
import {
  PlanContact,
  PlanFormContact,
  PlanMonthly,
  PlanDescription,
  CarInfoContainer,
  VehicleImage,
} from "./styles";
import Button from "../Button";
import Cars from "../../cardata/Cars";
import { AppContext } from "../../context/AppContext";
import Input from "../Input"; // Certifique-se de que existe este componente

const Form = () => {
  const { addVehicle } = useContext(AppContext); // Obtém a função addVehicle do contexto
  const [selectedCarId, setSelectedCarId] = useState(Cars[0]?.id || null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  // Estados para CNPJ, Estado e Cidade
  const [cnpj, setCnpj] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");

  const estadosECidades = {
    Bahia: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    "São Paulo": ["São Paulo", "Campinas", "Santos"],
    "Rio de Janeiro": ["Rio de Janeiro", "Teresópolis", "Cabo Frio"],
    Pará: ["Belém", "Santarém", "Ananindeua"],
  };

  const handleCarSelection = (e) => {
    setSelectedCarId(Number(e.target.value));
  };

  const handleCnpjChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 14) value = value.slice(0, 14);
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    if (value.length > 5) value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    if (value.length > 8) value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    if (value.length > 12) value = value.replace(/\/(\d{4})(\d)/, "/$1-$2");

    setCnpj(value);
  };

  const handleEstadoChange = (e) => {
    setSelectedEstado(e.target.value);
    setSelectedCidade(""); // Reseta a cidade ao mudar o estado
  };

  const handleCidadeChange = (e) => {
    setSelectedCidade(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(null);

    const selectedCar = Cars.find((car) => car.id === selectedCarId);

    if (!selectedCar || !cnpj || !selectedEstado || !selectedCidade) {
      setError("Preencha todos os campos corretamente.");
      setLoading(false);
      return;
    }

    const payload = {
      slug: selectedCar.slug,
      date: new Date().toISOString().split("T")[0], // Adiciona a data atual
    };

    try {
      const success = await addVehicle(payload);

      if (success) {
        setSuccess("Veículo adicionado com sucesso!");
      } else {
        setError("Faça o cadastro para enviar a solicitação.");
      }
    } catch (err) {
      setError("Erro ao enviar os dados. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectedCar = Cars.find((car) => car.id === selectedCarId);

  return (
    <Fragment>
      <PlanMonthly>
        <PlanDescription>
          <h3>Monte sua frota com os melhores veículos</h3>
          <hr />
        </PlanDescription>
        <PlanFormContact>
          <PlanContact>
            <span>
              Escolha o veículo desejado e envie a solicitação para nossa equipe.
            </span>
            <h3>Selecione o veículo</h3>
          </PlanContact>

          <form onSubmit={handleSubmit}>
            {/* Dropdown para seleção do carro */}
            <select
              id="carSelect"
              value={selectedCarId || ""}
              onChange={handleCarSelection}
            >
              {Cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name} - {car.price}
                </option>
              ))}
            </select>

            {/* Informações do veículo selecionado */}
            {selectedCar && (
              <CarInfoContainer>
                <VehicleImage>
                  <img src={selectedCar.img} alt={selectedCar.name} />
                </VehicleImage>
                <div className="car-details">
                  <span>{selectedCar.name}</span>
                  <p>{selectedCar.description}</p>
                  <h4>A partir de: {selectedCar.price}</h4>
                </div>
              </CarInfoContainer>
            )}

            {/* Campo CNPJ */}
            <label htmlFor="cnpj">CNPJ</label>
            <Input
              type="text"
              name="cnpj"
              value={cnpj}
              onChange={handleCnpjChange}
              placeholder="__.___.___/____-__"
            />

            {/* Estado e Cidade */}
            <h4>Escolha o local de retirada</h4>
            <div className="row">
              <div className="field">
                <label htmlFor="estado">Estado</label>
                <select
                  name="estado"
                  value={selectedEstado}
                  onChange={handleEstadoChange}
                >
                  <option value="">Selecione o estado</option>
                  {Object.keys(estadosECidades).map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="cidade">Cidade</label>
                <select
                  name="cidade"
                  value={selectedCidade}
                  onChange={handleCidadeChange}
                  disabled={!selectedEstado}
                >
                  <option value="">
                    {selectedEstado ? "Selecione a cidade" : "Selecione"}
                  </option>
                  {(estadosECidades[selectedEstado] || []).map((cidade) => (
                    <option key={cidade} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botão de envio */}
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar solicitação"}
            </Button>
          </form>

          {/* Mensagens de sucesso ou erro */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </PlanFormContact>
      </PlanMonthly>
    </Fragment>
  );
};

export default Form;
