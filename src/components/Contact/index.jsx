import StyledContact from './styles';

function Contact() {
  return (
    <StyledContact>
      <div className="contactForm">
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" />
          </label>
          <label htmlFor="email">
            Mail:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;
