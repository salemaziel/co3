import React from "react";
import "../css/containerContact.css";
import "../css/form.css";
import ContainerFooter from "./containerFooter";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class containerContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact-ChaoticOrder", ...this.state }),
    })
      .then(() => {
        alert("Success!");
        this.setState({ name: "", email: "", message: "" });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div
        id="containerContact"
        data-scroll-id="signup"
        data-scroll-behavior="center"
        className="container columns full screen"
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "50%",
          }}
        >
          <br />
          <br />
          <br />
          <h1
            id="text11"
            className="style1"
            style={{ color: "white", fontSize: "3rem" }}
          >
            Contact Us
          </h1>
          <br />
          <br />
          <form 
          name="Contact-ChaoticOrder" 
          id="form02" 
          method="post" 
          netlify="true" 
          netlify-honeypot="bot-field" 
          onSubmit={this.handleSubmit}>

            <div className="inner">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Contact-ChaoticOrder" />
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  maxLength={50}
                  required
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  maxLength={50}
                  required
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="field">
                <textarea
                  name="message"
                  value={message}
                  required
                  onChange={this.handleChange}
                  placeholder="Your message"
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  style={{ width: "100%", padding: "0px", margin: "0px" }}
                  value="Send Message"
                  className="special"
                  onChange={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <br />
        <hr />
        <ContainerFooter />
      </div>
    );
  }
}

export default containerContact;
