import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onFocus = () => {};
  const onBlur = () => {};
  const onSubmit = () => {};

  const { name, email, message } = formData;

  return (
    <section className="flex flex-col md:flex-row max-container ">
      <div className="flex-1 min-w-[50%] flex flex-col ">
        <h1 className="head-text">Get In Touch</h1>
        <form action="" className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="text-black-500 font-semibold">
            Name
            <input
              type="text"
              className="input"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="text-black-500 font-semibold">
            Email
            <input
              type="email"
              className="input"
              name="email"
              placeholder="JohnDoe@email.com"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </label>{" "}
          <label htmlFor="text-black-500 font-semibold">
            Name
            <textarea
              rows={4}
              type="text"
              className="input"
              name="message"
              placeholder="John Doe"
              value={message}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </form>
        ,<button className="btn"></button>
      </div>
    </section>
  );
};

export default Contact;
