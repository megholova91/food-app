import { useFormik } from "formik";
import { contactFormSchema } from "../schemas";
import { twMerge } from "tailwind-merge";

const Contact = () => {
  const onSubmit = async (values, actions) => {
    //mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
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
      name: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  return (
    <div className="mx-80 p-4 my-4 text-center">
      <h1 className="font-bold text-xl p-4 m-4">
        For any queries please fill this form and we will get back to you
      </h1>
      <form
        autoComplete="off"
        className="flex flex-col gap-4 mx-32 text-left"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={twMerge(
              "border rounded-lg py-2 px-4 focus:outline-none focus:border-2",
              errors.contactFormEmail && touched.contactFormEmail
                ? " border-red-700"
                : " border-gray-500"
            )}
            autoFocus={true}
          />
          <p
            className={twMerge(
              "text-sm text-red-700",
              errors.contactFormEmail && touched.contactFormEmail
                ? "visible"
                : "invisible"
            )}
          >
            {errors.contactFormEmail ?? "Invalid"}
          </p>
        </div>
        <div className="flex flex-col">
          <input
            id="message"
            type="text"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={twMerge(
              "border rounded-lg py-2 px-4 focus:outline-none focus:border-2",
              errors.message && touched.message
                ? " border-red-700"
                : " border-gray-500"
            )}
          />
          <p
            className={twMerge(
              "text-sm text-red-700",
              errors.message && touched.message ? "visible" : "invisible"
            )}
          >
            {errors.message ?? "Invalid"}
          </p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-orange-600 text-white p-3 font-bold mt-5 disabled:bg-orange-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
