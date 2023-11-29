function Contact({toggleContact}){
    return (
      <div className="overlay">
        <a href="#" onClick={toggleContact} className="back">
          ╳
        </a>
        <div className="infos">
          <h2>
            <a href="#">23 rue de Quèven 31000 Toulouse</a>
          </h2>
          <h2>
            <a href="mailto:contact@chereau-grenet.com">
              Contact@chereau-grenet.com
            </a>
          </h2>
        </div>
      </div>
    );
}

export default Contact;