import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import StyledContact from './styles';

dotenv.config();

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [selected, setSelected] = useState(false);

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(
      (response) => {
        console.log(response);
        setIsSent(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <StyledContact id="Contact">
      {isSent ? (
        <div className="button">
          <button type="button" className="inactive">
            Message envoyé !
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="pContact">
            <p>Formulaire de contact</p>
          </div>
          <div className="form-inner">
            <div className="form-groupe">
              <input
                type="text"
                id="firstname"
                placeholder="Your fistname"
                name="firstName"
                value={details.firstName}
                onChange={handleChange}
                className="ContactInput"
                required
              />
              <div className="form-groupe">
                <input
                  type="text"
                  id="lastname"
                  placeholder="Your lastname"
                  name="lastName"
                  value={details.lastName}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
              <div className="form-groupe">
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Your phone number"
                  name="phoneNumber"
                  value={details.phoneNumber}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
            </div>
            <div className="secondBloc">
              <div className="form-groupe">
                <input
                  type="text"
                  id="email"
                  placeholder="Your email"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
              <div className="form-groupe">
                <textarea
                  type="text"
                  id="message"
                  placeholder="Write your message here"
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
            </div>
          </div>
          <div className="RGPD">
            <input
              type="checkbox"
              onChange={(e) => setSelected(e.target.checked)}
              required
            />
            <span>
              {selected
                ? "J'accepte de partager mes informations à FarmConnect"
                : 'Veuillez valider vos données RGBD'}
            </span>
          </div>
          <div className="Button">
            <button
              type="submit"
              className="buttonContact"
              disabled={handleSubmit}
            >
              Envoyer
            </button>
          </div>
        </form>
      )}
    </StyledContact>
  );
}
