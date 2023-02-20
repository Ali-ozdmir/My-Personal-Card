import React from "react";

function Info() {
  return (
    <div className="info">
      <img src="./images/myprofile.png" alt="" />
      <div className="info--profile">
        <h1>Ali Özdemir</h1>
        <h3>Frontend Developer</h3>
        <h4>My personal website</h4>
        <div className="btn">
          <a
            href="https://mail.google.com/mail/u/0/?tab=wm#inbox"
            className="email"
          >
            <ion-icon name="mail-outline"></ion-icon>
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-%C3%B6zdemir-154209184/"
            className="linkedin"
          >
            <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
