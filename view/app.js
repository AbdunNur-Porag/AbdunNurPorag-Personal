function TBT({ children,...props}) {
  return (
    <button className="transparent circle ripple"{...props}>
      {children}
    </button>
  );
}

function ProfileItem({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "2%" }}>
      <TBT><i>{icon}</i></TBT>
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </div>
  );
}

function EmailItem({ icon, link, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "2%" }}>
      <TBT><i>{icon}</i></TBT>
      <a className="link bold" href={`mailto:${link}`} style={{ marginLeft: "10px", textDecoration: "none", color: "blue" }}>
        {text}
      </a>
    </div>
  );
}

function GitLink({ icon, link, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "2%" }}>
      <TBT><i>{icon}</i></TBT>
      <a className="link bold" href={link} style={{ marginLeft: "10px", textDecoration: "none", color: "blue" }}>
        {text}
      </a>
    </div>
  );
}
function Profile() {
  return (
    <div>
      <img
        src="/img/back.png"
        className="responsive no-round"
        style={{
          height: "200px",
        }}
      />
      <img
        src="/img/me.jpg"
        className="circle"
        style={{
          height: "200px",
          width: "200px",
          marginTop: "-30%",
          marginLeft: "2%",
        }}
      />
      <div
        className=""
        style={{
          marginLeft: "5%",
          marginTop: "5%", // good comment here
        }}
      >
        <h4
          className=""
          style={{
            color: "#DFD0B8",
          }}
        >
          Porag
        </h4>

        {/* Profile Info */}
        <ProfileItem icon="person" text="Abdun Nur Porag" />
        <ProfileItem icon="work" text="Currently Student" />
        
        <ProfileItem icon="favorite" text="Programing,Travelling, Researching,Fact Finding,Thinking" />
        
        {/* Email Info */}
        <EmailItem icon="email" link="abdunnurporag.bd@gmail.com" text="abdunnurporag.bd@gmail.com" />
       <GitLink icon="link" link="https://github.com/AbdunNur-Porag" text="GitHub/AbdunNurPorag" />
      </div>
    </div>
  );
}
function AboutMore(){
  return(
    <div style={{
      marginTop:"5%",
      marginBottom:"5%"
    }}>
      <button className="responsive ripple" style={{
        backgroundColor:"#222831",
        color:"white",
      }}
      onClick={()=>routeTo("aboutPage")}
      >
        About More <i>arrow_forward</i>
      </button>

    <button className="responsive ripple border hoverBt" style={{
        backgroundColor:"transparent",
        color:"white",
        marginTop:"3%",
        
      }}
      onClick={()=>routeTo("emailPage")}
      >
        Email Me <i>arrow_forward</i>
      </button>
    
    </div>
  )
}


function AboutMoreActivity() {
  return(
      <root>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
  marginTop:"15%",
  borderRadius:"20px",
  width: "90%",
  maxWidth: "400px",
  backgroundColor:"#393E46",
        }}>
          
           <header className="transparent">
       <nav>
         <TBT onClick={()=>routeTo("mainPage")}><i>arrow_back</i></TBT>
       </nav>
     </header>
          
          
          <div className="padding "style={{
            color:"white"
          }}>
  

Hello, I am Abdun Nur Porag.  
You might ask me, "What are you doing?" I would say — not much: reading, eating, sometimes trying to create something new or write some code.  
Life continues in this way. I hope that the darkness brought on by my addiction to programming will fade soon, and I will find a new beginning.  

"I never say what I cannot do; I always speak of what I can."  

Life is simply a combination of years and days.  
My goal is near.  
I say to my enemies: wait just a little longer — soon, you and I will be standing on the same line. Then we’ll see how far each of us has truly traveled.
<nav className="right-align">[Abdun Nur Porag]</nav>
<nav className="center-align">
Thank you for reading.
</nav>

     
     
            </div>
          </div>
          </div>
          </root>
  )
}

function MainActivity() {
  return (
    <root>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
  marginTop:"15%",
  marginBottom:"15%",
  borderRadius:"20px",
  width: "90%",
  maxWidth: "400px",
  backgroundColor:"#393E46",
        }}>
          <Profile/>
          <AboutMore/>
        </div>
      </div>
    </root>
  );
}

router.config({
default:<MainActivity/>,
emailPage:<EmailActivity/>,
aboutPage:<AboutMoreActivity/>,
mainPage:<MainActivity/>,
})
