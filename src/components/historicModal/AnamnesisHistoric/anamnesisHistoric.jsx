import PropTypes from "prop-types"; // Importe PropTypes corretamente
import styles from "./styles.module.css";

export default function AnamnesisHistoric({anamnesis, index}){

    return<div className={styles.historicCard}>
          <p>{"Anamnesis No "} <b>{(index + 1)}</b></p>
          <br/>
          <p className={styles.contentInfo}>Criada em
          
          <b>{" " + anamnesis.createdAt.split('T')[0].split('-')[2]+"/"+anamnesis.createdAt.split('T')[0].split('-')[1]+"/"+anamnesis.createdAt.split('T')[0].split('-')[0]}</b>
          {" às " + anamnesis.createdAt.split('T')[1].substring(0, 8)}</p>
          <br/>
    </div>
}

AnamnesisHistoric.propTypes = {
    anamnesis: PropTypes.object.isRequired,
    index: PropTypes.number
  };
  