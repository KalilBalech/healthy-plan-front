import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

import axios from "axios";

export default function BodyEvaluationCard(props) {

  const [open, setOpen] = useState(false)
  const [bodyEvaluationExists, setBodyEvaluationExists] = useState(true)

  const deleteBodyEvaluation = () =>{
    console.log(props.id)
    axios
      .delete(`https://healthy-plan-api.onrender.com/v1/body-evaluation/${props.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("BodyEvaluation deletado com sucesso!");
        setBodyEvaluationExists(false);
      })
      .catch((error) => {
        alert(
          "Houve algum erro na atualização das informações do Anamnesis: " + error
        );
      });
  }

  return (      
        bodyEvaluationExists && <div className={styles.athleteContainer} onClick={()=>setOpen(!open)}>
          <b>Criação</b>
          <p>{"Data: "+props.createdAt.split('T')[0].split('-')[2]+"/"+props.createdAt.split('T')[0].split('-')[1]+"/"+props.createdAt.split('T')[0].split('-')[0]}</p>
          <p>{"Horário: "+props.createdAt.split('T')[1].substring(0, 8)}</p>
          {open && <div>
            <br></br>
            <p>{"chest_circ_cm: "+props.chest_circ_cm}</p>
            <p>{"rightForearm_circ_cm: "+props.rightForearm_circ_cm}</p>
            <p>{"leftForearm_circ_cm: "+props.leftForearm_circ_cm}</p>
          </div>}
          <button onClick={()=>{deleteBodyEvaluation()}}>Deletar Avaliação Corporal</button>
        </div>
  );
}

BodyEvaluationCard.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  chest_circ_cm: PropTypes.number.isRequired,
  rightForearm_circ_cm: PropTypes.number.isRequired,
  leftForearm_circ_cm: PropTypes.number.isRequired,
  rightArm_circ_cm: PropTypes.number.isRequired,
  leftArm_circ_cm: PropTypes.number.isRequired,
  waist_circ_cm: PropTypes.number.isRequired,
  abdomen_circ_cm: PropTypes.number.isRequired,
  hip_circ_cm: PropTypes.number.isRequired,
  rightThigh_circ_cm: PropTypes.number.isRequired,
  leftThigh_circ_cm: PropTypes.number.isRequired,
  rightCalf_circ_cm: PropTypes.number.isRequired,
  leftCalf_circ_cm: PropTypes.number.isRequired,
  fatPercentage: PropTypes.number.isRequired,
  bodyMassIndex: PropTypes.number.isRequired,
  skeletalMass: PropTypes.number.isRequired,
  bodyAge: PropTypes.number.isRequired,
  basalMetabolicRate: PropTypes.number.isRequired,
  waistRatioHip: PropTypes.number.isRequired,
  ageAtTheMoment: PropTypes.number.isRequired,
  fatMass_kg: PropTypes.number.isRequired,
  leanMass_kg: PropTypes.number.isRequired,
  weight_cm: PropTypes.number.isRequired,
  height_kg: PropTypes.number.isRequired,
};
