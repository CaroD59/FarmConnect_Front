function Contact() {
  return (
    <>
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
    </>
  );
}

export default Contact;
