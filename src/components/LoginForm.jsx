import { useFormik } from "formik";
import { loginFormSchema } from "../schemas";
import { twMerge } from "tailwind-merge";

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
      className="flex flex-col gap-4 my-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={twMerge(
            "border rounded-lg py-2 px-4 focus:outline-none focus:border-2",
            errors.email && touched.email
              ? " border-red-700"
              : " border-gray-500"
          )}
          autoFocus={true}
        />
        <p
          className={twMerge(
            "text-sm text-red-700",
            errors.email && touched.email ? "visible" : "invisible"
          )}
        >
          {errors.email ?? "Invalid"}
        </p>
      </div>
      <div className="flex flex-col">
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={twMerge(
            "border rounded-lg py-2 px-4 focus:outline-none focus:border-2",
            errors.password && touched.password
              ? " border-red-700"
              : " border-gray-500"
          )}
          autoComplete="off"
        />
        <p
          className={twMerge(
            "text-sm text-red-700",
            errors.password && touched.password ? "visible" : "invisible"
          )}
        >
          {errors.password ?? "Invalid"}
        </p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-orange-600 text-white p-3 font-bold mt-5 disabled:bg-orange-300 "
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
