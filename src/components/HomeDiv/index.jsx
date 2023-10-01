import PropTypes from "prop-types"; // Importe PropTypes corretamente
import Title from "../Title";
import styles from "./styles.module.css";


export default function HomeDiv(props) {
  return props.imageFirst ? (
    <div className={styles.row}>
      <div className={styles.imagem}>
        <img src={props.src} alt="" />
      </div>
      <div className={styles.texto}>
        <Title title={props.title}></Title>
        {props.children}
      </div>
    </div>
  ) : (
    <div className={styles.row}>
      <div className={styles.texto}>
        <Title title={props.title}></Title>
        {props.children}
      </div>
      <div className={styles.imagem}>
        <img src={props.src} alt="" />
      </div>
    </div>
  );
}

HomeDiv.propTypes = {
  title: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
};
