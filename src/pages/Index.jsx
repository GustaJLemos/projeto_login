import classes from "./index.module.css";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div id="home" className={classes.content}>
      <div className={classes.container}>
        <h2 className={classes.title}>Faça seu login</h2>
        <div className={classes.separator} />
        <form action="#">
          {/* input e label do email */}
          <label htmlFor="email" className="sr-only">
            Email do usuário
          </label>
          <input
            type="text"
            name="email"
            className={classes.input + " " + classes.email}
            placeholder="Email"
          />
          {/* input e label do password */}
          <label htmlFor="password" className="sr-only" />
          <input
            type="password"
            name="password"
            className={classes.input + " " + classes.password}
            placeholder="Senha"
          />
        </form>
        <div className={classes.separator} />
        <Link to="/home" className={classes.button}>
          Entrar
          <img
            src="/images/enter-room.svg"
            alt="Entrar"
            className={classes["button-img"]}
          />
        </Link>
        <div className={classes.questions}>
          <a href="#" className={classes["text-purple"]}>
            esqueci minha senha!
          </a>
          <br />
          <a href="#" className={classes["text-purple"]}>
            está com problema para logar?
          </a>
        </div>
      </div>
    </div>
  );
}
