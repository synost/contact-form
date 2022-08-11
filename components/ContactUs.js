import React, { useState } from "react";
import Image from 'next/image'
import profilePic from '../public/thereplay78.png'
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Internationalization
  const {t, i18n} = useTranslation('common');
  //   Form validation
  const [errors, setErrors] = useState({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }
    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText(t('form.sending'));
      const res = await fetch("/api/send", {
        body: JSON.stringify({
          email: email,
          firstname: firstname,
          lastname: lastname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);

        // Reset form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      // Reset form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(firstname, lastname, email, subject, message);
  };
  return (
    <main>
      <nav className="flex flex-row justify-between items-center p-8 bg-blue-50 dark:bg-black">
        <div className="relative flex flex-row space-x-2 items-center">
          <div className="absolute top-0 left-1">
          <Image src={profilePic} alt="Logo" width={33} height={33}/>
          </div>
          <h1 className="pl-8 text-2xl font-bold text-gray-700 dark:text-gray-50">
            &nbsp;TheReplay78
          </h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
            <a href="#" className="hidden lg:block">
            <button className="bi text-gray-500 dark:text-gray-50" onClick={() => i18n.changeLanguage('fr')}>FR</button>&nbsp; &nbsp;
            <button className="bi text-gray-500 dark:text-gray-50" onClick={() => i18n.changeLanguage('en')}>EN</button>
            </a>
        </div>  
      </nav>
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-black md:h-96">
        <div className="mx-auto mb-10 md:mt-20">
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            {t('welcome.title')}
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            {t('welcome.help_up')}<br></br>
            {t('welcome.help_down')}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-[#202027]"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
          {t('form.title')}
          </h1>

          <label
            htmlFor="firstname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            {t('form.firstname')}<span className="text-red-500 dark:text-gray-50"></span>
          </label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            name="firstname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.firstname && (
            <p className="text-red-500">{t('form.noempty')}</p>
          )}

          <label
            htmlFor="lastname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            {t('form.lastname')}<span className="text-red-500 dark:text-gray-50"></span>
          </label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            name="lastname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.lastname && (
            <p className="text-red-500">{t('form.noempty')}</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t('form.email')}<span className="text-red-500"></span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">{t('form.noempty')}</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t('form.subject')}<span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.subject && (
            <p className="text-red-500">{t('form.noempty')}</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t('form.message')}<span className="text-red-500"></span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">{t('form.noempty')}</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-8 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center dark:bg-[#2e2e38]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                {t('form.success')}
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                {t('form.error')}
              </p>
            )}
          </div>
        </form>
      </header>
    </main>
  );
}
