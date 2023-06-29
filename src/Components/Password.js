import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Password.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Password = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [hidePassWidth, setHidePassWidth] = useState(100);
  const [startAnimation, setStartAnimation] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(faEye);

  const showPassword = () => {
    if (!startAnimation) {
      setPasswordType("text");
      setStartAnimation(true);
      setEyeIcon(faEyeSlash);
    } else {
      setPasswordType("password");
      setStartAnimation(false);
      setEyeIcon(faEye);
      setHidePassWidth(100);
    }
  };

  useEffect(() => {
    if (startAnimation) {
        
      const timer = setTimeout(() => {
        if (hidePassWidth > 0) {
          setHidePassWidth(hidePassWidth - 1);
        }
      }, 14);

      return () => clearTimeout(timer);
    }
  }, [hidePassWidth, startAnimation]);

  return (
    <div className={style.passwordContainer}>
      <div className={style.inputCover}>
        {startAnimation && (
          <div
            className={style.tempCOver}
            style={{ width: hidePassWidth + "%" }}
          ></div>
        )}

        <input type={passwordType} placeholder="Enter Your Password" />
      </div>

      <button className={style.eyeButton} type="button" onClick={showPassword}>
        <FontAwesomeIcon icon={eyeIcon} />
      </button>
    </div>
  );
};
export default Password;
