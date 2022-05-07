import React from "react";

export default function Login (){
    return (
      <React.Fragment>
        <div className="login">
        <div className="logoCreate">
        <img src="./logo.png" alt="" srcset="" />
          <h3>ALP</h3>
        </div>
        <h2 className="welcome">Welcome!</h2>
        <form method="post">
          <div className="formInput">
          <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
          </form>
          </div>
      </React.Fragment>
    );
}
