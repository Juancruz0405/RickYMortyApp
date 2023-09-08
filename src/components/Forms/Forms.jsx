import { useState } from "react";
import style from "../Forms/Forms.module.css";
import validate from "../Forms/validation";

const Forms = (props) => {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserdata({ ...userdata, [property]: value });
    setErrors(validate({ ...userdata, [property]: value }, setErrors, errors));
  };
  console.log(userdata);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userdata);
  };

  return (
    <div className={style.div}>
      <h1 className={style.titulo}>Iniciar sesión</h1>
      <form className={style.form}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={userdata.email}
            onChange={handleChange}
            className={style.inputs}
          />
        </label>
        <span>{errors.email} </span>
        <br />
        <label htmlFor="password">
          Contraseña:
          <input
            type="password"
            name="password"
            value={userdata.password}
            onChange={handleChange}
            className={style.inputs}
          />
        </label>
        <span>{errors.password} </span>
        <br />
        <button onClick={handleSubmit} className={style.boton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
