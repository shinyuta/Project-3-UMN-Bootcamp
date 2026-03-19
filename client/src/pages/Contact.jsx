import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Mock submission: keep it front-end only.
    setSubmitted(true);
  }

  return (
    <div className="wrapper contactWrapper">
      <h1>Contact</h1>
      <h4>Send a message to the team (mock form)</h4>

      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="contactField">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contactField">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contactField">
          <textarea
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>

        <input type="submit" value="Send" />

        {submitted ? (
          <p className="contactSuccess">Thanks! Your message was sent (mock).</p>
        ) : null}
      </form>

      <div className="contactActions">
        <a
          className="buttonLink githubLink"
          href="https://github.com/shinyuta"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">GitHub</button>
        </a>

        <div className="contactBack">
          <Link to="/">Back to typing test</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;

