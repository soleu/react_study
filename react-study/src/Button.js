//npm install prop-types
import PropTypes from "prop-types";
import styles from "./Button.module.css"; //create-react 로 만드는 css 모듈화
function Button({ text }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
      }}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
