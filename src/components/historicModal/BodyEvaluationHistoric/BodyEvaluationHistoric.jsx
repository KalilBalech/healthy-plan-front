import PropTypes from "prop-types"; // Importe PropTypes corretamente
import styles from "./styles.module.css";

export default function BodyEvaluationHistoric({bodyEvaluation, index}){

    return<div className={styles.historicCard}>
          <p>{"BodyEvaluation No "} <b>{(index + 1)}</b></p>
          <br/>
          <p className={styles.contentInfo}>Criada em 
          <b>{" " + bodyEvaluation.createdAt.split('T')[0].split('-')[2]+"/"+bodyEvaluation.createdAt.split('T')[0].split('-')[1]+"/"+bodyEvaluation.createdAt.split('T')[0].split('-')[0]}</b>
          
          {" às " + bodyEvaluation.createdAt.split('T')[1].substring(0, 8)}
          
          </p>
          {/* <p>{"Horário: "+bodyEvaluation.createdAt.split('T')[1].substring(0, 8)}</p> */}
          <br/>
    </div>
}

BodyEvaluationHistoric.propTypes = {
    bodyEvaluation: PropTypes.object.isRequired,
    index: PropTypes.number
  };
  