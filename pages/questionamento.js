import React, { useState } from "react";

const Questionamento = () => {
  const [showMore, setShowMore] = useState(false);
  const [question, setQuestion] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleShowImage = () => {
    setShowMore(true);
  };
  const startQuestion = () => {
    setQuestion(true);
  };
  const Confirm = () => {
    setConfirm(true);
  };

  return (
    <div>
      <h1>Questionamento. O que é questionar?</h1>
      <p className="text-justify">SER OU NÃO SER? Não é tão simples assim!</p>
      <hr />
      <p className="text-justify">
        Questionar, indagar, investigar, duvidar, procurar respostas. O
        questionamento é uma atitude fundamental para a aquisição de
        conhecimento e para o desenvolvimento do pensamento crítico. Através do
        questionamento, podemos descobrir novas informações, novas ideias, novos
        pontos de vista. O questionamento nos ajuda a compreender o mundo à
        nossa volta e a tomar decisões informadas. O questionamento é uma
        habilidade essencial para a vida e para o trabalho. Sem questionamento,
        não há progresso, não há inovação, não há aprendizado.
      </p>

      <h2>Você entendeu o que quer dizer questionamento?</h2>
      <div className="button">
        <button onClick={handleShowImage}>Sim, entendi</button>
      </div>

      {showMore && (
        <div>
          <h2>VAMOS FAZER UM QUESTIONAMENTO ENTÃO</h2>
          <p>Abaixo um botão para iniciar</p>
          <button onClick={startQuestion}>Questão</button>
          {question && (
            <div className="question">
              <p>ESTA CANALHA, É PUTA OU NÃO É?</p>
              <img className="img" src="/img/velha.jpg"></img>
              <button onClick={Confirm}>SIM</button>
              <button onClick={Confirm}>CLARO</button>
              {confirm && (
                <div className="confirm">
                  <h1>Parabens você acertou!!</h1>
                  <h3>Esta canalha é uma putona</h3>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Questionamento;
