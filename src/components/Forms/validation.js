// const combinedRegex =
//   /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;

// const passwordRegex = /^(?=.*\d).{6,10}$/;

// const validate = (userData, setErrors, errors) => {
//   if (!userData.email) {
//     setErrors({ ...errors, email: "Email vacio" });
//   } else {
//     if (!combinedRegex.test(userData.email)) {
//       setErrors({ ...errors, email: "Email invalido" });
//     } else {
//       setErrors({ ...errors, email: "" });
//     }
//   }

//   if (!userData.password) {
//     setErrors({ ...errors, password: "Contraseña vacia" });
//   } else {
//     if (!passwordRegex.test(userData.password)) {
//       setErrors({ ...errors, password: "Contraseña invalida" });
//     } else {
//       setErrors({ ...errors, password: "" });
//     }
//   }
//};
export default function validate(userData) {
  let errors = {};

  const combinedRegex =
    /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;

  if (!userData.email) {
    errors.email = "Enter tour email";
  }
  if (!combinedRegex.test(userData.email)) {
    errors.email = "Invalid email";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
  }

  if (!userData.password) {
    errors.password = "Enter a password";
  }

  return errors;
}
