import ButtonS from "../ButtonS";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import Title from "../Title";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

import axios from "axios";

export default function Athlete(props) {
  const id = props.id;
  const birthDateFomated = props.birthDate.split("T")[0];
  const authTOKEN = localStorage.getItem("token");

  const [isCreateAnamnesisModalOpen, setIsCreateAnamnesisModalOpen] =
    useState(false);
  const [isCreateBodyEvaluationModalOpen, setIsCreateBodyEvaluationModalOpen] =
    useState(false);
  const [isUpdateAthleteModalOpen, setIsUpdateAthleteModalOpen] =
    useState(false);

  const [name, setName] = useState(props.name);
  const [surname, setSurname] = useState(props.surname);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(parseInt(props.phone));
  const [sex, setSex] = useState(props.sex);
  const [birthDate, setBirthDate] = useState(birthDateFomated);

  const [provName, setProvName] = useState(props.name);
  const [provSurname, setProvSurname] = useState(props.surname);
  const [provEmail, setProvEmail] = useState(props.email);
  const [provPhone, setProvPhone] = useState(parseInt(props.phone));
  const [provSex, setProvSex] = useState(props.sex);
  const [provBirthDate, setProvBirthDate] = useState(birthDateFomated);

  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [isSmoker, setIsSmoker] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [PhysicalActivityHabits, setPhysicalActivityHabits] = useState("");
  const [HydrationHabits, setHydrationHabits] = useState("");
  const [EatingHabits, setEatingHabits] = useState("");
  const [AmountWater, setAmountWater] = useState(0);
  const [UseFoodSupplement, setUseFoodSupplement] = useState("");
  const [isAnemic, setIsAnemic] = useState(false);
  const [isDiabetic, setIsDiabetic] = useState(false);
  const [systolicBloodPressure, setSystolicBloodPressure] = useState(0);
  const [diastolicBloodPressure, setDiastolicBloodPressure] = useState(0);
  const [restingHeartRate, setRestingHeartRate] = useState(0);
  const [haveAnxiety, setHaveAnxiety] = useState(false);
  const [haveDepression, setHaveDepression] = useState(false);
  const [haveBipolarDisorder, setHaveBipolarDisorder] = useState(false);
  const [haveObsessiveCompDisorder, setHaveObsessiveCompDisorder] =
    useState(false);
  const [haveOtherDisorders, setHaveOtherDisorders] = useState(false);
  const [AthleteId] = useState(id);
  const [heartProblems, setHeartProblems] = useState("");
  const [allergies, setAllergies] = useState("");
  const [otherDiseases, setOtherDiseases] = useState("");
  const [medicalTreatments, setMedicalTreatments] = useState("");
  const [medicationUse, setMedicationUse] = useState("");
  const [UseHealthDevice, setUseHealthDevice] = useState("");
  const [additionalObservations, setAdditionalObservations] = useState("");
  const [userExists, setUserExists] = useState(true);

  const [ageAtTheMoment, setageAtTheMoment] = useState(0);
  const [fatMass_kg, setfatMass_kg] = useState(0);
  const [leanMass_kg, setleanMass_kg] = useState(0);
  const [weight_cm, setweight_cm] = useState(0);
  const [height_kg, setheight_kg] = useState(0);
  const [bodyMassClass, setbodyMassClass] = useState('');
  const [bodyMassIndex, setbodyMassIndex] = useState(0);
  const [skeletalMass, setskeletalMass] = useState(0);
  const [bodyAge, setbodyAge] = useState(0);
  const [basalMetabolicRate, setbasalMetabolicRate] = useState(0);
  const [waistRatioHip, setwaistRatioHip] = useState(0);
  const [visceralFat, setvisceralFat] = useState("");
  const [neck_circ_cm, setneck_circ_cm] = useState(0);
  const [chest_circ_cm, setchest_circ_cm] = useState(0);
  const [rightForearm_circ_cm, setrightForearm_circ_cm] = useState(0);
  const [leftForearm_circ_cm, setleftForearm_circ_cm] = useState(0);
  const [rightArm_circ_cm, setrightArm_circ_cm] = useState(0);
  const [leftArm_circ_cm, setleftArm_circ_cm] = useState(0);
  const [waist_circ_cm, setwaist_circ_cm] = useState(0);
  const [abdomen_circ_cm, setabdomen_circ_cm] = useState(0);
  const [hip_circ_cm, sethip_circ_cm] = useState(0);
  const [rightThigh_circ_cm, setrightThigh_circ_cm] = useState(0);
  const [leftThigh_circ_cm, setleftThigh_circ_cm] = useState(0);
  const [rightCalf_circ_cm, setrightCalf_circ_cm] = useState(0);
  const [leftCalf_circ_cm, setleftCalf_circ_cm] = useState(0);
  const [fatPercentage, setfatPercentage] = useState(0);
  // const [AthleteId] = useState(id);


  const handleCreateAnamnesis = async (e) => {
    console.log("ENTROU NA FUNÇÃO CREATE ANAMNESIS")
    e.preventDefault();
    console.log("SYSTOLITIC BLOOD PRESSURE: " + systolicBloodPressure + " tipo: "+typeof systolicBloodPressure);
    setSystolicBloodPressure(parseInt(systolicBloodPressure));
    console.log("SYSTOLITIC BLOOD PRESSURE: " + systolicBloodPressure + " tipo: "+typeof systolicBloodPressure);
    setDiastolicBloodPressure(parseInt(diastolicBloodPressure));
    setAmountWater(parseInt(AmountWater));
    setRestingHeartRate(parseInt(restingHeartRate));

    const userData = {
      isAlcoholic,
      isSmoker,
      sleepQuality,
      PhysicalActivityHabits,
      HydrationHabits,
      EatingHabits,
      AmountWater,
      UseFoodSupplement,
      isAnemic,
      isDiabetic,
      systolicBloodPressure,
      diastolicBloodPressure,
      restingHeartRate,
      haveAnxiety,
      haveDepression,
      haveBipolarDisorder,
      haveObsessiveCompDisorder,
      haveOtherDisorders,
      AthleteId,
      heartProblems,
      allergies,
      otherDiseases,
      medicalTreatments,
      medicationUse,
      UseHealthDevice,
      additionalObservations,
    };

    console.log("isAlcoholic: " + isAlcoholic + " type: " + typeof isAlcoholic);
    console.log("isSmoker: " + isSmoker + " type: " + typeof isSmoker);
    console.log(
      "sleepQuality: " + sleepQuality + " type: " + typeof sleepQuality
    );
    console.log(
      "PhysicalActivityHabits: " +
        PhysicalActivityHabits +
        " type: " +
        typeof PhysicalActivityHabits
    );
    console.log(
      "HydrationHabits: " + HydrationHabits + " type: " + typeof HydrationHabits
    );
    console.log(
      "EatingHabits: " + EatingHabits + " type: " + typeof EatingHabits
    );
    console.log("AmountWater: " + AmountWater + " type: " + typeof AmountWater);
    console.log(
      "UseFoodSupplement: " +
        UseFoodSupplement +
        " type: " +
        typeof UseFoodSupplement
    );
    console.log("isAnemic: " + isAnemic + " type: " + typeof isAnemic);
    console.log("isDiabetic: " + isDiabetic + " type: " + typeof isDiabetic);
    console.log(
      "systolicBloodPressure: " +
        systolicBloodPressure +
        " type: " +
        typeof systolicBloodPressure
    );
    console.log(
      "diastolicBloodPressure: " +
        diastolicBloodPressure +
        " type: " +
        typeof diastolicBloodPressure
    );
    console.log(
      "restingHeartRate: " +
        restingHeartRate +
        " type: " +
        typeof restingHeartRate
    );
    console.log("haveAnxiety: " + haveAnxiety + " type: " + typeof haveAnxiety);
    console.log(
      "haveDepression: " + haveDepression + " type: " + typeof haveDepression
    );
    console.log(
      "haveBipolarDisorder: " +
        haveBipolarDisorder +
        " type: " +
        typeof haveBipolarDisorder
    );
    console.log(
      "haveObsessiveCompDisorder: " +
        haveObsessiveCompDisorder +
        " type: " +
        typeof haveObsessiveCompDisorder
    );
    console.log(
      "haveOtherDisorders: " +
        haveOtherDisorders +
        " type: " +
        typeof haveOtherDisorders
    );
    console.log("AthleteId: " + AthleteId + " type: " + typeof AthleteId);
    console.log(
      "heartProblems: " + heartProblems + " type: " + typeof heartProblems
    );
    console.log("allergies: " + allergies + " type: " + typeof allergies);
    console.log(
      "otherDiseases: " + otherDiseases + " type: " + typeof otherDiseases
    );
    console.log(
      "medicalTreatments: " +
        medicalTreatments +
        " type: " +
        typeof medicalTreatments
    );
    console.log(
      "medicationUse: " + medicationUse + " type: " + typeof medicationUse
    );
    console.log(
      "UseHealthDevice: " + UseHealthDevice + " type: " + typeof UseHealthDevice
    );
    console.log(
      "additionalObservations: " +
        additionalObservations +
        " type: " +
        typeof additionalObservations
    );
    console.log("TOKEN DA HEADER PARA MOSTRAR AUTORIZAÇÃO: " + authTOKEN)
    await axios
      .post("https://healthy-plan-api.onrender.com/v1/anamnesis", userData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ` + authTOKEN,
        },
      })
      .then((response) => {
        console.log("Anamnesis criada com sucesso");
        setIsAlcoholic(false);
        setIsSmoker(false);
        setSleepQuality("");
        setPhysicalActivityHabits("");
        setHydrationHabits("");
        setEatingHabits("");
        setAmountWater(0);
        setUseFoodSupplement("");
        setIsAnemic(false);
        setIsDiabetic(false);
        setSystolicBloodPressure(0);
        setDiastolicBloodPressure(0);
        setRestingHeartRate(0);
        setHaveAnxiety(false);
        setHaveDepression(false);
        setHaveBipolarDisorder(false);
        setHaveObsessiveCompDisorder(false);
        setHaveOtherDisorders(false);
        setHeartProblems("");
        setAllergies("");
        setOtherDiseases("");
        setMedicalTreatments("");
        setMedicationUse("");
        setUseHealthDevice("");
        setAdditionalObservations("");
        setIsCreateAnamnesisModalOpen(false);
        if (response.status === 200 || response.status === 201) {
          console.log("ANAMNESIS CRIADA COM SUCESSO")
          // const token = response.data.token;
          // localStorage.setItem("token", token);
          // console.log("Token JWT:", token);
        }
      })
      .catch((error) => {
        console.log("Deu ruim");
        console.error("Erro ao conectar com a API:", error);
      });
  };
  const handleCreateBodyEvaluation = async (e) => {
    e.preventDefault();
    console.log("ENTROU NA FUNÇÃO CREATE BODY EVALUATION")


    const userData = {
      ageAtTheMoment,
      fatMass_kg,
      leanMass_kg,
      weight_cm,
      height_kg,
      bodyMassClass,
      bodyMassIndex,
      skeletalMass,
      bodyAge,
      basalMetabolicRate,
      waistRatioHip,
      visceralFat,
      neck_circ_cm,
      chest_circ_cm,
      rightForearm_circ_cm,
      leftForearm_circ_cm,
      rightArm_circ_cm,
      leftArm_circ_cm,
      waist_circ_cm,
      abdomen_circ_cm,
      hip_circ_cm,
      rightThigh_circ_cm,
      leftThigh_circ_cm,
      rightCalf_circ_cm,
      leftCalf_circ_cm,
      fatPercentage,
      athleteId: AthleteId
    };
    
    console.log("ageAtTheMoment: " + ageAtTheMoment + " type: " + typeof ageAtTheMoment);
    console.log("fatMass_kg: " + fatMass_kg + " type: " + typeof fatMass_kg);
    console.log("leanMass_kg: " + leanMass_kg + " type: " + typeof leanMass_kg);
    console.log("weight_cm: " + weight_cm + " type: " + typeof weight_cm);
    console.log("height_kg: " + height_kg + " type: " + typeof height_kg);
    console.log("bodyMassClass: " + bodyMassClass + " type: " + typeof bodyMassClass);
    console.log("bodyMassIndex: " + bodyMassIndex + " type: " + typeof bodyMassIndex);
    console.log("skeletalMass: " + skeletalMass + " type: " + typeof skeletalMass);
    console.log("bodyAge: " + bodyAge + " type: " + typeof bodyAge);
    console.log("basalMetabolicRate: " + basalMetabolicRate + " type: " + typeof basalMetabolicRate);
    console.log("waistRatioHip: " + waistRatioHip + " type: " + typeof waistRatioHip);
    console.log("visceralFat: " + visceralFat + " type: " + typeof visceralFat);
    console.log("neck_circ_cm: " + neck_circ_cm + " type: " + typeof neck_circ_cm);
    console.log("chest_circ_cm: " + chest_circ_cm + " type: " + typeof chest_circ_cm);
    console.log("rightForearm_circ_cm: " + rightForearm_circ_cm + " type: " + typeof rightForearm_circ_cm);
    console.log("leftForearm_circ_cm: " + leftForearm_circ_cm + " type: " + typeof leftForearm_circ_cm);
    console.log("rightArm_circ_cm: " + rightArm_circ_cm + " type: " + typeof rightArm_circ_cm);
    console.log("leftArm_circ_cm: " + leftArm_circ_cm + " type: " + typeof leftArm_circ_cm);
    console.log("waist_circ_cm: " + waist_circ_cm + " type: " + typeof waist_circ_cm);
    console.log("abdomen_circ_cm: " + abdomen_circ_cm + " type: " + typeof abdomen_circ_cm);
    console.log("hip_circ_cm: " + hip_circ_cm + " type: " + typeof hip_circ_cm);
    console.log("rightThigh_circ_cm: " + rightThigh_circ_cm + " type: " + typeof rightThigh_circ_cm);
    console.log("leftThigh_circ_cm: " + leftThigh_circ_cm + " type: " + typeof leftThigh_circ_cm);
    console.log("rightCalf_circ_cm: " + rightCalf_circ_cm + " type: " + typeof rightCalf_circ_cm);
    console.log("leftCalf_circ_cm: " + leftCalf_circ_cm + " type: " + typeof leftCalf_circ_cm);
    console.log("fatPercentage: " + fatPercentage + " type: " + typeof fatPercentage);
    console.log("AthleteId: " + AthleteId + " type: " + typeof AthleteId);
    
    await axios
      .post("https://healthy-plan-api.onrender.com/v1/body-evaluation", userData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Avaliação corporal criada com sucesso");
        setageAtTheMoment(0);
        setfatMass_kg(0);
        setleanMass_kg(0);
        setweight_cm(0);
        setheight_kg(0);
        setbodyMassClass('');
        setbodyMassIndex(0);
        setskeletalMass(0);
        setbodyAge(0);
        setbasalMetabolicRate(0);
        setwaistRatioHip(0);
        setvisceralFat('');
        setneck_circ_cm(0);
        setchest_circ_cm(0);
        setrightForearm_circ_cm(0);
        setleftForearm_circ_cm(0);
        setrightArm_circ_cm(0);
        setleftArm_circ_cm(0);
        setwaist_circ_cm(0);
        setabdomen_circ_cm(0);
        sethip_circ_cm(0);
        setrightThigh_circ_cm(0);
        setleftThigh_circ_cm(0);
        setrightCalf_circ_cm(0);
        setleftCalf_circ_cm(0);
        setfatPercentage(0);
        
        if (response.status === 200 || response.status === 201) {
          console.log("BODY EVALUATION CRIADA COM SUCESSO")
          // const token = response.data.token;
          // localStorage.setItem("token", token);
          // console.log("Token JWT:", token);
        }
      })
      .catch((error) => {
        console.log("Deu ruim na criação da avaliação corporal");
        console.error("Erro ao conectar com a API:", error);
      });
  };

  const editAthlete = async (e) => {
    e.preventDefault();

    const athleteNewData = {
      name: provName,
      surname: provSurname,
      phone: provPhone,
      email: provEmail,
      sex: provSex,
      birthDate: provBirthDate,
    };

    await axios
      .patch(
        `https://healthy-plan-api.onrender.com/v1/athlete/${id}`,
        athleteNewData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        setIsUpdateAthleteModalOpen(false);

        setName(athleteNewData.name);
        setSurname(athleteNewData.surname);
        setPhone(athleteNewData.phone);
        setEmail(athleteNewData.email);
        setSex(athleteNewData.sex);
        setBirthDate(athleteNewData.birthDate);
      })
      .catch((error) => {
        alert(
          "Houve algum erro na atualização das informações do atleta: " + error
        );
      });
  };

  const deleteAthlete = () => {
    axios
      .delete(`https://healthy-plan-api.onrender.com/v1/athlete/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("Atleta deletado com sucesso!");
        setUserExists(false);
      })
      .catch((error) => {
        alert(
          "Houve algum erro na atualização das informações do atleta: " + error
        );
      });
  };

  return (
    <>
      {userExists && (
        <div className={styles.athleteContainer}>
          <div className={styles.athlete}>
            <h1>{name + " " + surname}</h1>
            <p>{email}</p>
            <ButtonS
              text="Adicionar Anamnesis"
              OnClickFunction={() => setIsCreateAnamnesisModalOpen(true)}
            ></ButtonS>
            <ButtonS
              text="Adicionar Avaliação Corporal"
              OnClickFunction={() => setIsCreateBodyEvaluationModalOpen(true)}
            ></ButtonS>
          </div>
          <div className={styles.athleteButtons}>
            <button
              className={styles.editAthleteButton}
              onClick={() => setIsUpdateAthleteModalOpen(true)}
            >
              Editar aluno
            </button>
            <button
              className={styles.deleteAthleteButton}
              onClick={() => deleteAthlete()}
            >
              Deletar aluno
            </button>
          </div>
          {isCreateAnamnesisModalOpen && (
            <div className={styles.anamnesesDiv}>
              <button
                className={styles.closeButton}
                onClick={() => setIsCreateAnamnesisModalOpen(false)}
              >
                x
              </button>
              <Title title="Criar Anamneses para o atleta"></Title>
              <form onSubmit={handleCreateAnamnesis}>
                <Input
                  block={true}
                  type="checkbox"
                  value={isAlcoholic}
                  onChange={(e) => {
                    setIsAlcoholic(e.target.checked);
                    console.log("isAlcoholic: " + isAlcoholic);
                  }}
                  label="É alcoólatra?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={isSmoker}
                  onChange={(e) => setIsSmoker(e.target.checked)}
                  label="É fumante?"
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Qualidade do sono"
                  value={sleepQuality}
                  onChange={(e) => setSleepQuality(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Hábitos de atividade física"
                  value={PhysicalActivityHabits}
                  onChange={(e) => setPhysicalActivityHabits(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Hábitos de hidratação"
                  value={HydrationHabits}
                  onChange={(e) => setHydrationHabits(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Hábitos alimentares"
                  value={EatingHabits}
                  onChange={(e) => setEatingHabits(e.target.value)}
                />

                <Input
                  block={true}
                  type="number"
                  placeholder="Quantidade de água"
                  value={AmountWater}
                  onChange={(e) => setAmountWater(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Uso de suplementos alimentares"
                  value={UseFoodSupplement}
                  onChange={(e) => setUseFoodSupplement(e.target.value)}
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={isAnemic}
                  onChange={(e) => setIsAnemic(e.target.checked)}
                  label="É anêmico?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={isDiabetic}
                  onChange={(e) => setIsDiabetic(e.target.checked)}
                  label="É diabético?"
                />
                <Input
                  block={true}
                  type="number"
                  placeholder="Pressão arterial sistólica"
                  value={systolicBloodPressure}
                  onChange={(e) => setSystolicBloodPressure(e.target.value)}
                />

                <Input
                  block={true}
                  type="number"
                  placeholder="Pressão arterial diastólica"
                  value={diastolicBloodPressure}
                  onChange={(e) => setDiastolicBloodPressure(e.target.value)}
                />

                <Input
                  block={true}
                  type="number"
                  placeholder="Frequência cardíaca em repouso"
                  value={restingHeartRate}
                  onChange={(e) => setRestingHeartRate(e.target.value)}
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={haveAnxiety}
                  onChange={(e) => setHaveAnxiety(e.target.checked)}
                  label="Tem ansiedade?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={haveDepression}
                  onChange={(e) => setHaveDepression(e.target.checked)}
                  label="Tem depressão?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={haveBipolarDisorder}
                  onChange={(e) => setHaveBipolarDisorder(e.target.checked)}
                  label="Tem transtorno bipolar?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={haveObsessiveCompDisorder}
                  onChange={(e) =>
                    setHaveObsessiveCompDisorder(e.target.checked)
                  }
                  label="Tem transtorno obsessivo-compulsivo?"
                />

                <Input
                  block={true}
                  type="checkbox"
                  value={haveOtherDisorders}
                  onChange={(e) => setHaveOtherDisorders(e.target.checked)}
                  label="Tem outros transtornos?"
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Problemas cardíacos"
                  value={heartProblems}
                  onChange={(e) => setHeartProblems(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Alergias"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Outras doenças"
                  value={otherDiseases}
                  onChange={(e) => setOtherDiseases(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Tratamentos médicos"
                  value={medicalTreatments}
                  onChange={(e) => setMedicalTreatments(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Uso de medicamentos"
                  value={medicationUse}
                  onChange={(e) => setMedicationUse(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Uso de dispositivos de saúde"
                  value={UseHealthDevice}
                  onChange={(e) => setUseHealthDevice(e.target.value)}
                />

                <Input
                  block={true}
                  type="text"
                  placeholder="Observações adicionais"
                  value={additionalObservations}
                  onChange={(e) => setAdditionalObservations(e.target.value)}
                />
                <Button text="Enviar" />
              </form>
            </div>
          )}
          {isCreateBodyEvaluationModalOpen && (
            <div className={styles.anamnesesDiv}>
              <button
                className={styles.closeButton}
                onClick={() => setIsCreateBodyEvaluationModalOpen(false)}
              >
                x
              </button>
              <Title title="Criar Avaliação corporal"></Title>
              <form onSubmit={handleCreateBodyEvaluation}>
                <Input
                  block={true}
                  type="number"
                  value={ageAtTheMoment}
                  onChange={(e) => {
                    setageAtTheMoment(e.target.value);
                    console.log("ageAtTheMoment: " + ageAtTheMoment);
                  }}
                  label="Idade no momento?"
                  placeholder="Idade atual"
                />

                <Input
                  block={true}
                  type="number"
                  value={fatMass_kg}
                  onChange={(e) => {
                    setfatMass_kg(e.target.value);
                    console.log("fatMass_kg: " + fatMass_kg);
                  }}
                  placeholder="Gordura corporal (em kg)"
                />
                <Input
                  block={true}
                  type="number"
                  value={leanMass_kg}
                  onChange={(e) => {
                    setleanMass_kg(e.target.value);
                    console.log("leanMass_kg: " + leanMass_kg);
                  }}
                  placeholder="Massa magra (em kg)"
                />

                <Input
                  block={true}
                  type="number"
                  value={weight_cm}
                  onChange={(e) => {
                    setweight_cm(e.target.value);
                    console.log("weight_cm: " + weight_cm);
                  }}
                  placeholder="Peso (em kg)"
                />

                <Input
                  block={true}
                  type="number"
                  value={height_kg}
                  onChange={(e) => {
                    setheight_kg(e.target.value);
                    console.log("height_kg: " + height_kg);
                  }}
                  placeholder="Altura (em cm)"
                />

                <Input
                  block={true}
                  type="text"
                  value={bodyMassClass}
                  onChange={(e) => {
                    setbodyMassClass(e.target.value);
                    console.log("bodyMassClass: " + bodyMassClass);
                  }}
                  placeholder="Classe de massa corporal"
                />

                <Input
                  block={true}
                  type="number"
                  value={bodyMassIndex}
                  onChange={(e) => {
                    setbodyMassIndex(e.target.value);
                    console.log("bodyMassIndex: " + bodyMassIndex);
                  }}
                  placeholder="Índice de massa corporal"
                />
                <Input
                  block={true}
                  type="number"
                  value={skeletalMass}
                  onChange={(e) => {
                    setskeletalMass(e.target.value);
                    console.log("skeletalMass: " + skeletalMass);
                  }}
                  placeholder="Massa esquelética (em kg)"
                />

                <Input
                  block={true}
                  type="number"
                  value={bodyAge}
                  onChange={(e) => {
                    setbodyAge(e.target.value);
                    console.log("bodyAge: " + bodyAge);
                  }}
                  placeholder="Idade corporal"
                />

                <Input
                  block={true}
                  type="number"
                  value={basalMetabolicRate}
                  onChange={(e) => {
                    setbasalMetabolicRate(e.target.value);
                    console.log("basalMetabolicRate: " + basalMetabolicRate);
                  }}
                  placeholder="Taxa metabólica basal?"
                />

                <Input
                  block={true}
                  type="number"
                  value={waistRatioHip}
                  onChange={(e) => {
                    setwaistRatioHip(e.target.value);
                    console.log("waistRatioHip: " + waistRatioHip);
                  }}
                  placeholder="Relação cintura-quadril"
                />

                <Input
                  block={true}
                  type="text"
                  value={visceralFat}
                  onChange={(e) => {
                    setvisceralFat(e.target.value);
                    console.log("visceralFat: " + visceralFat);
                  }}
                  placeholder="Gordura visceral"
                />

                <Input
                  block={true}
                  type="number"
                  value={neck_circ_cm}
                  onChange={(e) => {
                    setneck_circ_cm(e.target.value);
                    console.log("neck_circ_cm: " + neck_circ_cm);
                  }}
                  placeholder="Circunferência do pescoço (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={chest_circ_cm}
                  onChange={(e) => {
                    setchest_circ_cm(e.target.value);
                    console.log("chest_circ_cm: " + chest_circ_cm);
                  }}
                  placeholder="Circunferência do peito (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={rightForearm_circ_cm}
                  onChange={(e) => {
                    setrightForearm_circ_cm(e.target.value);
                    console.log(
                      "rightForearm_circ_cm: " + rightForearm_circ_cm
                    );
                  }}
                  placeholder="Circunferência do antebraço direito (em cm)"
                />
                <Input
                  block={true}
                  type="number"
                  value={leftForearm_circ_cm}
                  onChange={(e) => {
                    setleftForearm_circ_cm(e.target.value);
                    console.log("leftForearm_circ_cm: " + leftForearm_circ_cm);
                  }}
                  placeholder="Circunferência do antebraço esquerdo (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={rightArm_circ_cm}
                  onChange={(e) => {
                    setrightArm_circ_cm(e.target.value);
                    console.log("rightArm_circ_cm: " + rightArm_circ_cm);
                  }}
                  placeholder="Circunferência do braço direito (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={leftArm_circ_cm}
                  onChange={(e) => {
                    setleftArm_circ_cm(e.target.value);
                    console.log("leftArm_circ_cm: " + leftArm_circ_cm);
                  }}
                  placeholder="Circunferência do braço esquerdo (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={waist_circ_cm}
                  onChange={(e) => {
                    setwaist_circ_cm(e.target.value);
                    console.log("waist_circ_cm: " + waist_circ_cm);
                  }}
                  placeholder="Circunferência da cintura (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={abdomen_circ_cm}
                  onChange={(e) => {
                    setabdomen_circ_cm(e.target.value);
                    console.log("abdomen_circ_cm: " + abdomen_circ_cm);
                  }}
                  placeholder="Circunferência do abdômen (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={hip_circ_cm}
                  onChange={(e) => {
                    sethip_circ_cm(e.target.value);
                    console.log("hip_circ_cm: " + hip_circ_cm);
                  }}
                  placeholder="Circunferência do quadril (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={rightThigh_circ_cm}
                  onChange={(e) => {
                    setrightThigh_circ_cm(e.target.value);
                    console.log("rightThigh_circ_cm: " + rightThigh_circ_cm);
                  }}
                  placeholder="Circunferência da coxa direita (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={leftThigh_circ_cm}
                  onChange={(e) => {
                    setleftThigh_circ_cm(e.target.value);
                    console.log("leftThigh_circ_cm: " + leftThigh_circ_cm);
                  }}
                  placeholder="Circunferência da coxa esquerda (em cm)"
                />
                <Input
                  block={true}
                  type="number"
                  value={rightCalf_circ_cm}
                  onChange={(e) => {
                    setrightCalf_circ_cm(e.target.value);
                    console.log("rightCalf_circ_cm: " + rightCalf_circ_cm);
                  }}
                  placeholder="Circunferência da panturrilha direita (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={leftCalf_circ_cm}
                  onChange={(e) => {
                    setleftCalf_circ_cm(e.target.value);
                    console.log("leftCalf_circ_cm: " + leftCalf_circ_cm);
                  }}
                  placeholder="Circunferência da panturrilha esquerda (em cm)"
                />

                <Input
                  block={true}
                  type="number"
                  value={fatPercentage}
                  onChange={(e) => {
                    setfatPercentage(e.target.value);
                    console.log("fatPercentage: " + fatPercentage);
                  }}
                  placeholder="Percentual de gordura corporal"
                />

                <Button text="Enviar" />
              </form>
            </div>
          )}
          {isUpdateAthleteModalOpen && (
            <div className={styles.anamnesesDiv}>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setIsUpdateAthleteModalOpen(false);
                  setProvName(name);
                  setProvSurname(surname);
                  setProvEmail(email);
                  setProvPhone(phone);
                  setProvSex(sex);
                  setProvBirthDate(birthDate);
                }}
              >
                x
              </button>
              <Title title="Editar informações do atleta"></Title>
              <form onSubmit={editAthlete}>
                <Input
                  block={true}
                  type="text"
                  value={provName}
                  placeholder="Nome do atleta"
                  onChange={(e) => setProvName(e.target.value)}
                  required={true}
                />
                <Input
                  block={true}
                  type="text"
                  value={provSurname}
                  placeholder="Sobrenome do atleta"
                  onChange={(e) => setProvSurname(e.target.value)}
                  required={true}
                />
                <Input
                  block={true}
                  type="text"
                  placeholder={"Número de telefone"}
                  value={provPhone}
                  onChange={(e) => setProvPhone(e.target.value)}
                  required={true}
                />
                <Input
                  block={true}
                  type="text"
                  value={provEmail}
                  placeholder="email do atleta"
                  onChange={(e) => setProvEmail(e.target.value)}
                  required={true}
                />
                <Select
                  name="Genero"
                  id="Genero"
                  placeholder="Genero"
                  value={provSex}
                  onChange={(e) => setProvSex(e.target.value)}
                  required={true}
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Neutre">Neutre</option>
                </Select>
                <Input
                  block={true}
                  type="date"
                  placeholder="Data de Nascimento"
                  value={provBirthDate}
                  onChange={(e) => setProvBirthDate(e.target.value)}
                  required={true}
                />
                <Button text="Enviar" />
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

Athlete.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};
