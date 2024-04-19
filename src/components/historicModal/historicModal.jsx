import PropTypes from "prop-types"; // Importe PropTypes corretamente
import styles from "./styles.module.css";
import AnamnesisHistoric from './AnamnesisHistoric/anamnesisHistoric'
import BodyEvaluationHistoric from './BodyEvaluationHistoric/BodyEvaluationHistoric'

export default function HistoricModal({setIsHistoricModalOpen, anamnesis, bodyEvaluation}) {

  const listAnamnesisHistoric = anamnesis.length ? (
    anamnesis.map((anamnesis, index) => (
      <AnamnesisHistoric
        key={anamnesis.id}
        id={anamnesis.id}
        index={index}
        anamnesis={anamnesis}
      ></AnamnesisHistoric>
    ))
  ) : (
    <p>Não há nenhuma anamnsis para esse atleta</p>
  );

  const listBodyEvaluationHistoric = bodyEvaluation.length ? (
    bodyEvaluation.map((bodyEvaluation, index) => (
      <BodyEvaluationHistoric
        key={bodyEvaluation.id}
        id={bodyEvaluation.id}
        index={index}
        bodyEvaluation={bodyEvaluation}
      ></BodyEvaluationHistoric>
    ))
  ) : (
    <p>Não há nenhuma anamnsis para esse atleta</p>
  );

  return (
    <div className={styles.modal}>
      <button
        className={styles.closeButton}
        onClick={() => {
            setIsHistoricModalOpen(false);
        }}
      >
        x
      </button>
      <br></br>
      <br></br>
      <p className={styles.classTitle}><b>Histórico de atualizações de Anamnesis</b></p>
      {listAnamnesisHistoric}
      <br></br>
      <br></br>
      <p className={styles.classTitle}><b>Histórico de atualizações de Avaliações Corporais</b></p>
      {listBodyEvaluationHistoric}
    </div>
  );
}


HistoricModal.propTypes = {
  setIsHistoricModalOpen: PropTypes.func.isRequired,
  anamnesis: PropTypes.array.isRequired,
  bodyEvaluation: PropTypes.array.isRequired,
};
