import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { inputValidPattern } from "../helpers/inputHelpers";
import Input from "../input";
import Styles from "./style.module.scss";
import Button from "../button";
import FormErrorMessages from "../formError/formErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    getValues,
  } = useForm({
    mode: "all",
  });

  const watchAllFields = watch();
  const [isActiveSendButton, setIsActiveSendButton] = useState(false);
  useEffect(() => {
    const formDataArray = Object.entries(watchAllFields);
    const errorsLength = Object.keys(errors).length;
    const isActive = formDataArray.every((item) => item[1]);
    setIsActiveSendButton(isActive && errorsLength === 0);
  }, [watchAllFields]);

  const onSubmit = () => {
    const formData = getValues();
    let jsonData = [];
    const existingData = localStorage.getItem("jsonData");

    if (existingData) {
      try {
        jsonData = JSON.parse(existingData);
      } catch (error) {
        console.error("localStorage'dan geçerli JSON verisi alınamadı.", error);
      }
    }

    jsonData.push({
      id: jsonData.length + 1,
      nameSurname: formData.nameSurname,
      email: formData.email,
      website: formData.website,
      country: formData.country,
      city: formData.city,
    });

    localStorage.setItem("jsonData", JSON.stringify(jsonData));

    if (handleSubmit) {
      reset({
        nameSurname: "",
        country: "",
        city: "",
        country: "",
        email: "",
        website: "",
      });
    }
  };

  const validateWordCount = (value) => {
    const words = value.trim().split(/\s+/);
    if (words.length < 2) {
      return "You must enter at least two words.";
    }
    return true;
  };

  const showErrorToast = (message) => {
    toast.error(message);
  };

  const combineErrorMessages = () => {
    const errorMessages = [
      errors.nameSurname?.message,
      errors.country?.message,
      errors.city?.message,
      errors.email?.message,
      errors.website?.message,
    ]
      .filter(Boolean)
      .join("\n");

    showErrorToast(errorMessages);
  };

  console.log(errors);

  return (
    <div className={Styles.formContainer}>
      <form
        className={Styles.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className={Styles.formRow}>
          <Controller
            name="nameSurname"
            control={control}
            defaultValue=""
            rules={{
              validate: validateWordCount,
            }}
            register={register("nameSurname", {
              required: {
                value: true,
                message: "Please enter name and surname.",
              },
              minLength: {
                value: 2,
                message: "You must enter at least two words.",
              },
            })}
            render={({ field }) => {
              return (
                <Input
                  isform
                  type="text"
                  placeholder="Enter name and surname"
                  label="Name Surname"
                  error={errors?.nameSurname}
                  {...field}
                />
              );
            }}
          />
          <FormErrorMessages error={errors?.nameSurname} />
        </div>

        <div className={Styles.formRow}>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            register={register("country", {
              required: {
                value: true,
                message: "Please enter country name.",
              },
              minLength: {
                value: 2,
                message: "You have entered insufficient characters.",
              },
            })}
            render={({ field }) => (
              <Input
                isform
                type="text"
                placeholder="Country"
                label="Country"
                error={errors?.country}
                {...field}
              />
            )}
          />
          <FormErrorMessages error={errors?.country} />
        </div>

        <div className={Styles.formRow}>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            register={register("city", {
              required: {
                value: true,
                message: "Please enter city name.",
              },
              minLength: {
                value: 2,
                message: "You have entered insufficient characters.",
              },
            })}
            render={({ field }) => (
              <Input
                isform
                type="text"
                placeholder="Enter a city"
                label="City"
                error={errors?.city}
                {...field}
              />
            )}
          />
          <FormErrorMessages error={errors?.city} />
        </div>

        <div className={Styles.formRow}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            register={register("email", {
              required: {
                value: true,
                message: "Please enter email address.",
              },
              pattern: {
                value: inputValidPattern.mail,
                message: "Incorrect email address.",
              },
            })}
            render={({ field }) => (
              <Input
                isform
                type="mail"
                placeholder="Enter a e-mail (abc@xyz.com)"
                label="Email"
                error={errors?.email}
                {...field}
              />
            )}
          />
          <FormErrorMessages error={errors?.email} />
        </div>

        <div className={Styles.formRow}>
          <Controller
            name="website"
            control={control}
            defaultValue=""
            rules={{
              required: "URL is required",
              pattern: {
                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                message: "Invalid URL format",
              },
            }}
            register={register("website", {
              required: {
                value: true,
                message: "Please enter website.",
              },
              minLength: {
                value: 2,
                message: "You have entered insufficient characters.",
              },
            })}
            render={({ field }) => (
              <Input
                isform
                type="text"
                placeholder="Enter a websitel (https://xyz.com)"
                label="Website"
                error={errors?.website}
                {...field}
              />
            )}
          />
          <FormErrorMessages error={errors?.website} />
        </div>

        <div className={Styles.button}>
          <Button onClick={combineErrorMessages}>Add</Button>
        </div>
      </form>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default AddForm;
