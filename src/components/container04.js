import React from 'react'
import container04Styles from '../css/container04.module.css'
import formStyles from '../css/forms.module.css'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Container04 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }


    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                alert("Success!")
                this.setState({ name: "", email: "", message: "" });
            })
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div id="container04" data-scroll-id="signup" data-scroll-behavior="center" className="container columns full screen" >

                <div style={{textAlign: "center", marginTop: '1rem', marginBottom: '1rem', width: '350px'}}>
                    <br/>
                    <br/>
                    <br/>
                    <h1 id="text11" className={container04Styles.style1}  style={{color: "white", fontSize: '3rem'}}>Contact Us</h1>
                    <br/>
                    <br/>
                    <form id="form02" method="post" onSubmit={this.handleSubmit}>
                        <div className={container04Styles.inner}>
                            <div className={formStyles.field}>
                                <label htmlFor="form02-fname">Name</label>
                                <input type="text" name="name" id="form02-fname" placeholder maxLength={128} required value={name} onChange={this.handleChange} />
                            </div>
                            <div className={formStyles.field}>
                                <label htmlFor="form02-email">Email</label>
                                <input type="email" name="email" id="form02-email" placeholder maxLength={128} required value={email} onChange={this.handleChange}  />
                            </div>
                            <br/>
                            <div className={formStyles.field}>
                                <textarea name="message" value={message} required onChange={this.handleChange} placeholder="Your message" />
                            </div>
                            <br/>
                            <div >
                                <button type="submit" style={{width: '100%', padding: '0px', margin: '0px'}}>Submit</button>
                            </div>
                        </div>
                        <input type="hidden" name="id" defaultValue="form02" />
                    </form>
                </div>
                <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="textarea" name="message" />
                </form>
            </div>
        )
    }
}

export default Container04