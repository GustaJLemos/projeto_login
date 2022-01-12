import classes from "./home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div id="home-perfil" className={classes.content}>
      <header className={classes.header}>
        <img src="../images/logo.svg" alt="Logo New Talents" />
        <div className={classes["links-header"]}>
          <Link to="/" className={classes.login}>
            LOGIN
          </Link>
          <a href="#" className={classes.cadastrar}>
            CADASTRAR
          </a>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.profile}>
            <h2 className={classes.title}>
              Seja Bem-vindo
              <label className={classes["text-purple"]} />
            </h2>
            <div className={classes["text-left"]}>
              <div className={classes["info-profile"]}>
                <div className={classes.avatar}>
                  <img src="../images/img-perfil.svg" alt="Imagem de perfil" />
                </div>
                <ul className={classes.list}>
                  <li className={classes["list-item"]}>Nome:</li>
                  <li className={classes["list-item"]}>Email:</li>
                  <li className={classes["list-item"]}>Idade:</li>
                  <li className={classes["list-item"]}>Telefone:</li>
                  <li className={classes["list-item"]}>LinkedIn:</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={classes["text-right"]}>
        <div className={classes["social-media"]}>
          <h3 className={classes.text}>Redes Sociais:</h3>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>Twitter:</li>
            <li className={classes["list-item"]}>Facebook:</li>
            <li className={classes["list-item"]}>Instagram:</li>
          </ul>
        </div>
        <div className={classes.apresentation}>
          <h3 className={classes.text}>Apresentação:</h3>
        </div>
      </div>
    </div>
  );
}