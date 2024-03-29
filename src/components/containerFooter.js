import React from "react";
import "./styles.css";
//import Modal from "react-awesome-modal";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";


//import Row from 'reactstrap'
//import Col from 'reactstrap'

class ContainerFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    };
  }

  handleModalOpen = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true });
  };

  handleModalClose = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <React.Fragment>
        {/*<div  id="containerContact" data-scroll-id="signup" data-scroll-behavior="center" className="container columns full screen" style={{border: 'none', marginTop: '-2px'}}  /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}* />*/}

        <footer style={{ position: "relative", display: "contents" }}>
          <div className="social-media-links" style={{ margin: "3rem" }}>
            <ul style={{ display: "inline-flex" }}>
              <li style={{ marginRight: "1rem" }}>
                <a href="https://twitter.com">
                  <svg
                    className="glow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      className="st0"
                      d="M9.5 27.1c11.2 0 17.4-9.3 17.4-17.4 0-0.3 0-0.5 0-0.8 1.2-0.9 2.2-1.9 3-3.2 -1.1 0.5-2.3 0.8-3.5 1 1.3-0.8 2.2-2 2.7-3.4 -1.2 0.7-2.5 1.2-3.9 1.5 -1.1-1.2-2.7-1.9-4.5-1.9 -3.4 0-6.1 2.7-6.1 6.1 0 0.5 0.1 0.9 0.2 1.4C9.7 10.1 5.2 7.7 2.2 4 1.7 4.9 1.4 6 1.4 7.1c0 2.1 1.1 4 2.7 5.1 -1 0-1.9-0.3-2.8-0.8 0 0 0 0.1 0 0.1 0 3 2.1 5.4 4.9 6 -0.5 0.1-1.1 0.2-1.6 0.2 -0.4 0-0.8 0-1.1-0.1 0.8 2.4 3 4.2 5.7 4.2 -2.1 1.6-4.7 2.6-7.6 2.6 -0.5 0-1 0-1.5-0.1C2.8 26.1 6 27.1 9.5 27.1"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path
                      className="st0"
                      d="M9.5 27.1c11.2 0 17.4-9.3 17.4-17.4 0-0.3 0-0.5 0-0.8 1.2-0.9 2.2-1.9 3-3.2 -1.1 0.5-2.3 0.8-3.5 1 1.3-0.8 2.2-2 2.7-3.4 -1.2 0.7-2.5 1.2-3.9 1.5 -1.1-1.2-2.7-1.9-4.5-1.9 -3.4 0-6.1 2.7-6.1 6.1 0 0.5 0.1 0.9 0.2 1.4C9.7 10.1 5.2 7.7 2.2 4 1.7 4.9 1.4 6 1.4 7.1c0 2.1 1.1 4 2.7 5.1 -1 0-1.9-0.3-2.8-0.8 0 0 0 0.1 0 0.1 0 3 2.1 5.4 4.9 6 -0.5 0.1-1.1 0.2-1.6 0.2 -0.4 0-0.8 0-1.1-0.1 0.8 2.4 3 4.2 5.7 4.2 -2.1 1.6-4.7 2.6-7.6 2.6 -0.5 0-1 0-1.5-0.1C2.8 26.1 6 27.1 9.5 27.1"
                    />
                  </svg>
                </a>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <a href="https://facebook.com">
                  <svg
                    className="glow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      className="st0"
                      d="M28.3 0.1H1.7c-0.9 0-1.6 0.7-1.6 1.6v26.5c0 0.9 0.7 1.6 1.6 1.6H16V18.4h-3.9v-4.5H16v-3.3c0-3.9 2.4-5.9 5.8-5.9 1.6 0 3.1 0.1 3.5 0.2v4l-2.4 0c-1.9 0-2.2 0.9-2.2 2.2v2.9h4.5l-0.6 4.5h-3.9v11.5h7.6c0.9 0 1.6-0.7 1.6-1.6V1.7C29.9 0.8 29.2 0.1 28.3 0.1z"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path
                      className="st0"
                      d="M28.3 0.1H1.7c-0.9 0-1.6 0.7-1.6 1.6v26.5c0 0.9 0.7 1.6 1.6 1.6H16V18.4h-3.9v-4.5H16v-3.3c0-3.9 2.4-5.9 5.8-5.9 1.6 0 3.1 0.1 3.5 0.2v4l-2.4 0c-1.9 0-2.2 0.9-2.2 2.2v2.9h4.5l-0.6 4.5h-3.9v11.5h7.6c0.9 0 1.6-0.7 1.6-1.6V1.7C29.9 0.8 29.2 0.1 28.3 0.1z"
                    />
                  </svg>
                </a>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <a href="https://youtube.com">
                  <svg
                    className="glow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      className="st0"
                      d="M29.7 9c0 0-0.3-2.1-1.2-3 -1.1-1.2-2.4-1.2-3-1.3C21.3 4.5 15 4.5 15 4.5h0c0 0-6.3 0-10.5 0.3C3.9 4.8 2.6 4.8 1.5 6 0.6 6.9 0.3 9 0.3 9S0 11.4 0 13.9v2.3C0 18.6 0.3 21 0.3 21s0.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3C7.2 25.5 15 25.6 15 25.6s6.3 0 10.5-0.3c0.6-0.1 1.9-0.1 3-1.3 0.9-0.9 1.2-3 1.2-3s0.3-2.4 0.3-4.9v-2.3C30 11.4 29.7 9 29.7 9zM11.9 18.9l0-8.4 8.1 4.2L11.9 18.9z"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path
                      className="st0"
                      d="M29.7 9c0 0-0.3-2.1-1.2-3 -1.1-1.2-2.4-1.2-3-1.3C21.3 4.5 15 4.5 15 4.5h0c0 0-6.3 0-10.5 0.3C3.9 4.8 2.6 4.8 1.5 6 0.6 6.9 0.3 9 0.3 9S0 11.4 0 13.9v2.3C0 18.6 0.3 21 0.3 21s0.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3C7.2 25.5 15 25.6 15 25.6s6.3 0 10.5-0.3c0.6-0.1 1.9-0.1 3-1.3 0.9-0.9 1.2-3 1.2-3s0.3-2.4 0.3-4.9v-2.3C30 11.4 29.7 9 29.7 9zM11.9 18.9l0-8.4 8.1 4.2L11.9 18.9z"
                    />
                  </svg>
                </a>
              </li>
              <li style={{ marginRight: "10px" }}>
                <a href="https://instagram.com">
                  <svg
                    className="glow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      className="st0"
                      d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"
                    />
                    <path
                      className="st0"
                      d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"
                    />
                    <circle className="st0" cx="22.9" cy="7.1" r="1.8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path
                      className="st0"
                      d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"
                    />
                    <path
                      className="st0"
                      d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"
                    />
                    <circle className="st0" cx="22.9" cy="7.1" r="1.8" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="copyright">
              <Button
                style={{
                  color: "white",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                  display: "inline",
                  background: "transparent",
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={this.handleModalOpen}
              >
                Copyright{" "}
              {" "}
              {new Date().getFullYear()} © Jacques Dubord, Chaotic Order </Button>
              <br />
              All Chaotic Order proceeds fund the Global Lighting Project
            </p>
                    <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          id="copyright"
          contentLabel="Copyright"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          className="copyrightmodal"
          overlayClassName="copyrightOverlay"
        >
          <div
            style={{
              padding: '1.5rem 2rem',
              margin: 'auto',
              backgroundImage: 'linear-gradient(to top, rgba(14, 19, 36, 0.75), rgba(26, 29, 46, 0.75))',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              display: 'inline-block'
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Copyright
            </h3>
            <p
              style={{
                color: "#d7d3d3",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            >
              Chaotic Order © Copyright 1993 <br />
              by Jacques Guy Dubord. All rights reserved.{" "}
            </p>
            <br />
            <p
              style={{
                color: "#d7d3d3",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            >
              ‘Chaotic Order’ name, logo and designs cannot be reproduced for
              use as Apparel, Music, Accessories, and or Vintage Collections,
              without written signed consent from Jacques Guy Dubord, founder
              and original owner of Chaotic Order.
            </p>
            <br />
            <p
              style={{
                color: "#d7d3d3",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            >
              Chaotic Order ©, Copyright since 1994, All rights reserved,
              including Agravator© since 1992, both under copyright protection
              and pending registered trademarks.
              <br />
              Chaotic Order© name, logo and designs cannot be reproduced for use
              as Apparel, Music, Accessories, and or Vintage Collections,
              without written signed consent from Jacques Guy Dubord, founder
              and original owner of Chaotic Order©.
            </p>
          </div>
        </Modal>
          </div>
        </footer>
        {/*</div>*/}

      </React.Fragment>
    );
  }
}

export default ContainerFooter;
