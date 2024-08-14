import { useFormik } from "formik";
import { loginFormSchema } from "../schemas";

const LoginForm = ({ onLogin }) => {
  const onSubmit = async (values, actions) => {
    //mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    onLogin(values.email);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-2 my-8"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? "border border-red-700 " : ""
        }
      />
      {errors.email && touched.email && <p>{errors.email}</p>}
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.password && touched.password ? "border border-red-700 " : ""
        }
        autoComplete="off"
      />
      {errors.password && touched.password && <p>{errors.password}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:opacity-5"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
