import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { toast } from 'react-toastify';
import StyledContact from './styles';

dotenv.config();

export default function ContactForm() {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(() => {
      toast.info(`${details.firstName} votre message a été transmis`);
      setDetails({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    });
  };

  return (
    <StyledContact id="Contact">
      <div className="ContactPage">
        <form onSubmit={handleSubmit}>
          <h1 className="contactTitle">Formulaire de contact</h1>
          <div className="form-inner">
            <div className="form-groupe">
              <input
                type="text"
                id="firstname"
                placeholder="Prénom"
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
                  placeholder="Nom"
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
                  placeholder="Téléphone"
                  name="phoneNumber"
                  value={details.phoneNumber}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
              <div className="form-groupe">
                <input
                  type="text"
                  id="email"
                  placeholder="Mail"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  className="ContactInput"
                  required
                />
              </div>
            </div>
            <div className="secondBloc">
              <div className="form-groupe">
                <textarea
                  type="text"
                  id="message"
                  placeholder="Ecrivez votre message..."
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  className="ContactMessage"
                  required
                />
              </div>
            </div>
            <div className="RGPD">
              <div>
                <input type="checkbox" required />
              </div>
              <div className="FarmConnectInfos">
                <p>J&apos;accepte de partager mes informations à FarmConnect</p>
              </div>
            </div>
            <div className="Button">
              <button type="submit" className="buttonContact">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </StyledContact>
  );
}
