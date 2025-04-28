function EmailActivity() {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");

  const handleSendEmail = () => {
    const myEmail = "abdunnurporag@yahoo.com"; // <-- your email address here
    const subject = encodeURIComponent("User Question");

    const currentTime = new Date().toLocaleString();

    const body = `
      

      Name: ${userName}
      Email: ${userEmail}
      Message: 
      ${userMessage}

      Sent on: ${currentTime}
    `;

    const mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Open default email app
  };

  return (
    <root>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
          marginTop: "15%",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "400px",
          backgroundColor: "#393E46",
        }}>
          
          <header className="transparent">
            <nav>
              <TBT onClick={() => routeTo("mainPage")}><i>arrow_back</i></TBT>
            </nav>
          </header>

          <div style={{
            marginLeft: "4%",
            width: "90%",
            padding: "0px",
          }}>
            <h5>Email Me</h5>

            <div className="form">
              <div className='field label fill'>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                 
                />
                <label>Your Name</label>
              </div>

              <div className='field label fill'>
                <input 
                  type="email" 
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                
                />
                <label>Your Email</label>
              </div>

              <div className='field textarea label fill large'>
                <textarea 
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                
                />
                <label>Your Message</label>
                <span className="helper">Your Messages Here</span>
              </div>

              <nav className="right-align row">
                <button className="ripple" onClick={handleSendEmail}>
                  <i>email</i>Send Email
                </button>
              </nav>

              <hr />

              <div className="no-round" style={{
                margin: "10%",
                width: "95%",
                maxWidth: "95%",
                color: "white",
              }}>
                <i>info</i>
                I try to send you an email as soon as possible. Please check your inbox regularly.
              </div>
            </div>
          </div>

        </div>
      </div>
    </root>
  );
}
