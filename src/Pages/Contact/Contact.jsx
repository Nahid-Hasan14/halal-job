// ContactPage.js
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, feel free to reach out to us!
      </p>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
