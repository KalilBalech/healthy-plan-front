import ButtonS from "../ButtonS";
import Button from "../Button";
import Input from "../Input";
// import Select from "../Select";
import Title from "../Title";
import AnamnesisCard from "../AnamnesisCard";
import BodyEvaluationCard from "../BodyEvaluationCard";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import axios from "axios";

import Plot from "react-plotly.js";

export default function Athlete(props) {
  const id = props.id;
  // const birthDateFomated = props.birthDate;
  const authTOKEN = localStorage.getItem("token");

  const [isCreateAnamnesisModalOpen, setIsCreateAnamnesisModalOpen] =
    useState(false);
  const [isCreateBodyEvaluationModalOpen, setIsCreateBodyEvaluationModalOpen] =
    useState(false);
  const [isUpdateAthleteModalOpen, setIsUpdateAthleteModalOpen] =
    useState(false);

  const [isAnamnesisModalOpen, setAnamnesisModalOpen] = useState(false);
  const [reloadAnamnesis, setReloadAnamnesis] = useState(false);
  const [anamnesis, setAnamnesis] = useState([]);

  const [isBodyEvaluationModalOpen, setBodyEvaluationModalOpen] =
    useState(false);
  const [reloadBodyEvaluation, setReloadBodyEvaluation] = useState(false);
  const [bodyEvaluation, setBodyEvaluation] = useState([]);

  useEffect(() => {
    getAnamnesis();
    getBodyEvaluations();
    console.log(bodyEvaluation);
  }, []);

  useEffect(() => {
    getAnamnesis();
    getBodyEvaluations();
    console.log(bodyEvaluation);
  }, [reloadAnamnesis, reloadBodyEvaluation]);

  const [name, setName] = useState(props.name);
  const [surname, setSurname] = useState(props.surname);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(parseInt(props.phone));
  // const [sex, setSex] = useState(props.sex);
  // const [birthDate, setBirthDate] = useState(props.birthDate);

  const [provName, setProvName] = useState(props.name);
  const [provSurname, setProvSurname] = useState(props.surname);
  const [provEmail, setProvEmail] = useState(props.email);
  const [provPhone, setProvPhone] = useState(parseInt(props.phone));
  // const [provSex, setProvSex] = useState(props.sex);
  // const [provBirthDate, setProvBirthDate] = useState(birthDateFomated);

  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [isSmoker, setIsSmoker] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [PhysicalActivityHabits, setPhysicalActivityHabits] = useState("");
  const [HydrationHabits, setHydrationHabits] = useState("");
  const [EatingHabits, setEatingHabits] = useState("");
  const [AmountWater, setAmountWater] = useState(null);
  const [UseFoodSupplement, setUseFoodSupplement] = useState("");
  const [isAnemic, setIsAnemic] = useState(false);
  const [isDiabetic, setIsDiabetic] = useState(false);
  const [systolicBloodPressure, setSystolicBloodPressure] = useState(null);
  const [diastolicBloodPressure, setDiastolicBloodPressure] = useState(null);
  const [restingHeartRate, setRestingHeartRate] = useState(null);
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

  const [ageAtTheMoment, setageAtTheMoment] = useState(null);
  const [fatMass_kg, setfatMass_kg] = useState(null);
  const [leanMass_kg, setleanMass_kg] = useState(null);
  const [weight_cm, setweight_cm] = useState(null);
  const [height_kg, setheight_kg] = useState(null);
  const [bodyMassClass, setbodyMassClass] = useState("");
  const [bodyMassIndex, setbodyMassIndex] = useState(null);
  const [skeletalMass, setskeletalMass] = useState(null);
  const [bodyAge, setbodyAge] = useState(null);
  const [basalMetabolicRate, setbasalMetabolicRate] = useState(null);
  const [waistRatioHip, setwaistRatioHip] = useState(null);
  const [visceralFat, setvisceralFat] = useState("");
  const [neck_circ_cm, setneck_circ_cm] = useState(null);
  const [chest_circ_cm, setchest_circ_cm] = useState(null);
  const [rightForearm_circ_cm, setrightForearm_circ_cm] = useState(null);
  const [leftForearm_circ_cm, setleftForearm_circ_cm] = useState(null);
  const [rightArm_circ_cm, setrightArm_circ_cm] = useState(null);
  const [leftArm_circ_cm, setleftArm_circ_cm] = useState(null);
  const [waist_circ_cm, setwaist_circ_cm] = useState(null);
  const [abdomen_circ_cm, setabdomen_circ_cm] = useState(null);
  const [hip_circ_cm, sethip_circ_cm] = useState(null);
  const [rightThigh_circ_cm, setrightThigh_circ_cm] = useState(null);
  const [leftThigh_circ_cm, setleftThigh_circ_cm] = useState(null);
  const [rightCalf_circ_cm, setrightCalf_circ_cm] = useState(null);
  const [leftCalf_circ_cm, setleftCalf_circ_cm] = useState(null);
  const [fatPercentage, setfatPercentage] = useState(null);

  const createAnamnesis = async (e) => {
    e.preventDefault();
    setSystolicBloodPressure(parseInt(systolicBloodPressure));
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

    await axios
      .post("https://healthy-plan-api.onrender.com/v1/anamnesis", userData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ` + authTOKEN,
        },
      })
      .then((response) => {
        setIsAlcoholic(false);
        setIsSmoker(false);
        setSleepQuality("");
        setPhysicalActivityHabits("");
        setHydrationHabits("");
        setEatingHabits("");
        setAmountWater(null);
        setUseFoodSupplement("");
        setIsAnemic(false);
        setIsDiabetic(false);
        setSystolicBloodPressure(null);
        setDiastolicBloodPressure(null);
        setRestingHeartRate(null);
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
          console.log("ANAMNESIS CRIADA COM SUCESSO");
          setReloadAnamnesis(!reloadAnamnesis);
        }
      })
      .catch((error) => {
        console.log("Deu ruim");
        console.error("Erro ao conectar com a API:", error);
      });
  };
  const createBodyEvaluation = async (e) => {
    e.preventDefault();

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
      athleteId: AthleteId, // erro de padronização na api... as vezes athleteId deve ser mandado com a maiusculo, as vezs com a minusculo
    };

    await axios
      .post(
        "https://healthy-plan-api.onrender.com/v1/body-evaluation",
        userData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setageAtTheMoment(null);
        setfatMass_kg(null);
        setleanMass_kg(null);
        setweight_cm(null);
        setheight_kg(null);
        setbodyMassClass("");
        setbodyMassIndex(null);
        setskeletalMass(null);
        setbodyAge(null);
        setbasalMetabolicRate(null);
        setwaistRatioHip(null);
        setvisceralFat("");
        setneck_circ_cm(null);
        setchest_circ_cm(null);
        setrightForearm_circ_cm(null);
        setleftForearm_circ_cm(null);
        setrightArm_circ_cm(null);
        setleftArm_circ_cm(null);
        setwaist_circ_cm(null);
        setabdomen_circ_cm(null);
        sethip_circ_cm(null);
        setrightThigh_circ_cm(null);
        setleftThigh_circ_cm(null);
        setrightCalf_circ_cm(null);
        setleftCalf_circ_cm(null);
        setfatPercentage(null);

        if (response.status === 200 || response.status === 201) {
          console.log("BODY EVALUATION CRIADA COM SUCESSO");
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
      // sex: provSex,
      // birthDate: provBirthDate,
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
        // setSex(athleteNewData.sex);
        // setBirthDate(athleteNewData.birthDate);
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
  const getAnamnesis = async () => {
    await axios
      .get(
        `https://healthy-plan-api.onrender.com/v1/athlete/${props.id}/anamnesis`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Anamnesis buscada com sucesso");
        if (response.status === 200 || response.status === 201) {
          setAnamnesis(response.data.anamnesis);
        }
      })
      .catch((error) => {
        console.log("Deu ruim na busca da anamnesis");
        console.error("Erro ao conectar com a API:", error);
      });
  };
  const getBodyEvaluations = async () => {
    await axios
      .get(
        `https://healthy-plan-api.onrender.com/v1/athlete/${props.id}/body-evaluation`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log("BODY EVALUATION buscada com sucesso");
          setBodyEvaluation(response.data.bodyEvaluations);
        }
      })
      .catch((error) => {
        console.log("Deu ruim na busca da BODY EVALUATION");
        console.error("Erro ao conectar com a API:", error);
      });
  };

  const [graphic, setGraphic] = useState(null);

  const [amountWaterGraphic, setAmountWaterGraphic] = useState(false);
  const [sisPressGraphic, setSisPressGraphic] = useState(false);
  const [diasPressGraphic, setDiasPressGraphic] = useState(false);

  const [reloadGraphic, setReloadGraphic] = useState(false);

  // to do kalil - fazer a visualização dos body evaluations que já foram criados
  // fazer os gráficos dos atributos numericos do body evaluations
  // fazer a autenticação de login

  useEffect(() => {
    getAnamnesis();
    const sortedList = anamnesis.sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
    // const createAtList = sortedList.map((item) => item.createdAt);
    if (amountWaterGraphic) {
      const amountWaterList = sortedList.map((item) => item.AmountWater);
      const yTitle = "Quantidade de água em ml";
      setGraphic(createGraphic("Quantidade de água", amountWaterList, yTitle));
    } else {
      if (sisPressGraphic) {
        const sisPressList = sortedList.map(
          (item) => item.systolicBloodPressure
        );
        const yTitle = "Pressão Sistólica em mmHg";
        setGraphic(createGraphic("Pressão Sistólica", sisPressList, yTitle));
      } else if (diasPressGraphic) {
        const diasPressList = sortedList.map(
          (item) => item.diastolicBloodPressure
        );
        const yTitle = "Pressão Diastólica em mmHg";
        setGraphic(createGraphic("Pressão Diastólica", diasPressList, yTitle));
      } else {
        setGraphic(null);
      }
    }
  }, [amountWaterGraphic, sisPressGraphic, diasPressGraphic, reloadGraphic]);

  const createGraphic = (title, yAxis, yTitle) => {
    const xAxis = [];
    console.log("yAxis lenght: ", yAxis.length);
    console.log("type of yAxis lenght: ", typeof yAxis.length);

    for (let i = 1; i <= yAxis.length; i++) {
      xAxis.push(i);
      console.log("xAxis: ", xAxis);
    }

    return (
      <>
        <Plot
          data={[
            {
              x: xAxis,
              y: yAxis,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "black" },
              name: title,
              line: {
                color: "#cb6ce6",
                width: 2,
              },
            },
          ]}
          layout={{
            width: 500,
            height: 500,
            title: title,
            xaxis: {
              title: "Progressão Temporal",
            },
            yaxis: {
              title: yTitle,
            },
          }}
        />
      </>
    );
  };

  const listAnamnesis = anamnesis.length ? (
    anamnesis.map((anamnesis) => (
      <AnamnesisCard
        key={anamnesis.id}
        id={anamnesis.id}
        AmountWater={anamnesis.AmountWater}
        diastolicBloodPressure={anamnesis.diastolicBloodPressure}
        systolicBloodPressure={anamnesis.systolicBloodPressure}
        createdAt={anamnesis.createdAt}
      ></AnamnesisCard>
    ))
  ) : (
    <p>Não há nenhuma anamnsis para esse atleta</p>
  );

  const listBodyEvaluations = bodyEvaluation.length ? (
    bodyEvaluation.map((bodyEvaluation) => (
      <BodyEvaluationCard
        key={bodyEvaluation.id}
        id={bodyEvaluation.id}
        createdAt={bodyEvaluation.createdAt}
        neck_circ_cm={bodyEvaluation.neck_circ_cm}
        chest_circ_cm={bodyEvaluation.chest_circ_cm}
        rightForearm_circ_cm={bodyEvaluation.rightForearm_circ_cm}
        leftForearm_circ_cm={bodyEvaluation.leftForearm_circ_cm}
        rightArm_circ_cm={bodyEvaluation.rightArm_circ_cm}
        leftArm_circ_cm={bodyEvaluation.leftArm_circ_cm}
        waist_circ_cm={bodyEvaluation.waist_circ_cm}
        abdomen_circ_cm={bodyEvaluation.abdomen_circ_cm}
        hip_circ_cm={bodyEvaluation.hip_circ_cm}
        rightThigh_circ_cm={bodyEvaluation.rightThigh_circ_cm}
        leftThigh_circ_cm={bodyEvaluation.leftThigh_circ_cm}
        rightCalf_circ_cm={bodyEvaluation.rightCalf_circ_cm}
        leftCalf_circ_cm={bodyEvaluation.leftCalf_circ_cm}
        fatPercentage={bodyEvaluation.fatPercentage}
        bodyMassIndex={bodyEvaluation.bodyMassIndex}
        skeletalMass={bodyEvaluation.skeletalMass}
        bodyAge={bodyEvaluation.bodyAge}
        basalMetabolicRate={bodyEvaluation.basalMetabolicRate}
        waistRatioHip={bodyEvaluation.waistRatioHip}
        ageAtTheMoment={bodyEvaluation.ageAtTheMoment}
        fatMass_kg={bodyEvaluation.fatMass_kg}
        leanMass_kg={bodyEvaluation.leanMass_kg}
        weight_cm={bodyEvaluation.weight_cm}
        height_kg={bodyEvaluation.height_kg}
      ></BodyEvaluationCard>
    ))
  ) : (
    <p>Não há nenhuma anamnsis para esse atleta</p>
  );

  return (
    <>
      {userExists && (
        <div className={styles.athleteContainer}>
          <div className={styles.leftButtons}>
            <button
              className={styles.leftButton}
              onClick={() => setAnamnesisModalOpen(true)}
            >
              Visuzalizar anamnesis
            </button>
            <button
              className={styles.leftButton}
              onClick={() => setBodyEvaluationModalOpen(true)}
            >
              Visuzalizar avaliações corporais
            </button>
          </div>
          <div className={styles.athlete}>
            <h1>{name + " " + surname}</h1>
            <p>{email}</p>
            <ButtonS
              text="Adicionar Anamnesis"
              onClick={() => setIsCreateAnamnesisModalOpen(true)}
            ></ButtonS>
            <ButtonS
              text="Adicionar Avaliação Corporal"
              onClick={() => setIsCreateBodyEvaluationModalOpen(true)}
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
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => setIsCreateAnamnesisModalOpen(false)}
              >
                x
              </button>
              <Title title="Criar Anamneses para o atleta"></Title>
              <form onSubmit={createAnamnesis}>
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
                <Button text="Criar" />
              </form>
            </div>
          )}
          {isCreateBodyEvaluationModalOpen && (
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => setIsCreateBodyEvaluationModalOpen(false)}
              >
                x
              </button>
              <Title title="Criar Avaliação corporal"></Title>
              <form onSubmit={createBodyEvaluation}>
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

                <Button text="Criar" />
              </form>
            </div>
          )}
          {isUpdateAthleteModalOpen && (
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setIsUpdateAthleteModalOpen(false);
                  setProvName(name);
                  setProvSurname(surname);
                  setProvEmail(email);
                  setProvPhone(phone);
                  // setProvSex(sex);
                  // setProvBirthDate(birthDate);
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
                  type="number"
                  placeholder="Número de telefone"
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
                {/* <Select
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
                /> */}
                <Button text="Enviar" />
              </form>
            </div>
          )}
          {isAnamnesisModalOpen && (
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setAnamnesisModalOpen(false);
                }}
              >
                x
              </button>
              {listAnamnesis}
              <br></br>
              <h3>Visualizar por: </h3>
              <ButtonS
                text={"Quantidade de água"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(true);
                  setDiasPressGraphic(false);
                  setSisPressGraphic(false);
                }}
              ></ButtonS>
              <ButtonS
                text={"Pressão disatólica"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(false);
                  setDiasPressGraphic(true);
                  setSisPressGraphic(false);
                }}
              ></ButtonS>
              <ButtonS
                text={"Pressão sistólica"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(false);
                  setDiasPressGraphic(false);
                  setSisPressGraphic(true);
                }}
              ></ButtonS>
              {graphic}
            </div>
          )}
          {isBodyEvaluationModalOpen && (
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setBodyEvaluationModalOpen(false);
                }}
              >
                x
              </button>
              {listBodyEvaluations}
              <br></br>
              <h3>Visualizar por: </h3>
              <ButtonS
                text={"Quantidade de água"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(true);
                  setDiasPressGraphic(false);
                  setSisPressGraphic(false);
                }}
              ></ButtonS>
              <ButtonS
                text={"Pressão disatólica"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(false);
                  setDiasPressGraphic(true);
                  setSisPressGraphic(false);
                }}
              ></ButtonS>
              <ButtonS
                text={"Pressão sistólica"}
                onClick={() => {
                  setReloadGraphic(!reloadGraphic);
                  setAmountWaterGraphic(false);
                  setDiasPressGraphic(false);
                  setSisPressGraphic(true);
                }}
              ></ButtonS>
              {graphic}
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
};
