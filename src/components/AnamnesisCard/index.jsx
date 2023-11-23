import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

import axios from "axios";

export default function AnamnesisCard(props) {

  const [open, setOpen] = useState(false)
  const [anamnesisExists, setAnamnesisExists] = useState(true)

  const deleteAnamnesis = () =>{
    console.log(props.id)
    axios
      .delete(`https://healthy-plan-api.onrender.com/v1/anamnesis/${props.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("Anamnesis deletado com sucesso!");
        setAnamnesisExists(false);
      })
      .catch((error) => {
        alert(
          "Houve algum erro na atualização das informações do Anamnesis: " + error
        );
      });
  }

  return (      
        anamnesisExists && <div className={styles.athleteContainer} onClick={()=>setOpen(!open)}>
          <b>Criação</b>
          <p>{"Data: "+props.createdAt.split('T')[0].split('-')[2]+"/"+props.createdAt.split('T')[0].split('-')[1]+"/"+props.createdAt.split('T')[0].split('-')[0]}</p>
          <p>{"Horário: "+props.createdAt.split('T')[1].substring(0, 8)}</p>
          {open && <div>
            <br></br>
            <p>{"AmountWater: "+props.AmountWater}</p>
            <p>{"Pressão sanguínia sistólica: "+props.systolicBloodPressure}</p>
            <p>{"Pressão sanguínia diastólica: "+props.diastolicBloodPressure}</p>
          </div>}
          <button onClick={()=>{deleteAnamnesis()}}>Deletar Anamnesis</button>
        </div>
  );
}

AnamnesisCard.propTypes = {
  id: PropTypes.string.isRequired,
  AmountWater: PropTypes.number.isRequired,
  systolicBloodPressure: PropTypes.number.isRequired,
  diastolicBloodPressure: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};
