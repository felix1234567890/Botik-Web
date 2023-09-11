import React, { useEffect } from "react";
import "./ContactPageForm.scss";

const ContactPageForm = ({ inquiryTypes }) => {
  useEffect(() => {
    const setLabelsRequiredClass = () => {
      const labels = document.querySelectorAll("label[for]");
      labels.forEach((label) => {
        const inputId = label.getAttribute("for");
        const inputElement = document.getElementById(inputId);

        if (inputElement && inputElement.hasAttribute("required")) {
          label.classList.add("required");
        }
      });
    };

    setLabelsRequiredClass();
  }, []);

  return (
    <div className="contactpage">
      <div className="contactpage_container">
        <p className="contactpage-paragraph subheading">Contact</p>
        <h1 className="title">Quae per vinitorem</h1>
        <form>
          <div className="dropdown input_group">
            <label htmlFor="inquiry" className="paragraphs">
              Inquiry type
            </label>
            <select id="inquiry" name="inquiry" required className="paragraphs">
              <option value="" style={{ display: "none" }}>
                Select
              </option>
              {inquiryTypes.map((model, index) => (
                <option key={index} value={model.title}>
                  {model.title}
                </option>
              ))}
            </select>
          </div>

          <div className="input_group">
            <div className="name-inputs">
              <div className="name-input">
                <label htmlFor="name" className="paragraphs">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="paragraphs"
                  required
                  placeholder="Input text here"
                />
              </div>
              <div className="name-input">
                <label htmlFor="surname" className="paragraphs">
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  className="paragraphs"
                  required
                  placeholder="Input text here"
                />
              </div>
            </div>
          </div>

          <div className="input_group">
            <div className="email-phone-inputs">
              <div className="email-input">
                <label htmlFor="email" className="paragraphs">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="paragraphs"
                  required
                  placeholder="Input text here"
                />
              </div>
              <div className="email-input">
                <label htmlFor="phone" className="paragraphs">
                  Mobile phone no.
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="paragraphs"
                  placeholder="Input text here"
                />
              </div>
            </div>
          </div>

          <div className="password input_group">
            <label htmlFor="message" className="paragraphs">
              Password
            </label>
            <textarea
              id="message"
              name="message"
              className="paragraphs"
              required
              placeholder="Input text here"
            />
          </div>

          <div className="button_submit">
            <button className="btn-bg">Submit</button>
          </div>
        </form>

        <p className="subheading last-text">
          Quantegis LTD (Quantegis d.o.o.) Radnička cesta 80, Zagreb, Croatia. <br />
          VAT ID: HR59864814633
        </p>
      </div>
    </div>
  );
};

export default ContactPageForm;
