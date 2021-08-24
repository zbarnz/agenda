import { useState } from "react";
import Button from "./Button";
import LoginForm from "./LoginForm";
import styles from "../styles/LoginBox.module.css";
import Link from "next/link";

const LoginBox = () => {
  const [showLogin, setShowLogin] = useState(false);
  function onLogin() {setShowLogin(!showLogin);}

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginContainerHeader}>Agenda</h1>
      {showLogin && <LoginForm />}
      {showLogin || (
        <Button
          varient="primary"
          stretch="medium"
          text="login"
          onClick={onLogin}
        />
      )}
      {showLogin || (
        <Button varient="secondary" stretch="medium" text="Get Started" />
      )}
      <div style={{ paddingTop: "40px" }}>
        <Link href="./about">
          <a>About Us</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
