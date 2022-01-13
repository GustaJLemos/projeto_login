import classes from "./Modal.module.css";
import { Link } from "react-router-dom";
export default function Modal({ onClose }) {
  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes.modal}>
        <div className={classes["header-modal"]}>
          <h2>CADASTRAR INFORMAÇÕES</h2>
          <button type="button" className={classes.btnx} onClick={onClose}>
            <img src="/images/icon-x.svg" alt="Fechar" />
          </button>
        </div>
        <form action="#" className={classes["all-inputs"]}>
          <div action className={classes.infos}>
            <div className={classes["text-p"]}>
              <p>Nome: *</p>
              <p>Idade: *</p>
              <p>Telefone: *</p>
            </div>
            <div className={classes["inputs-infos"]}>
              <div className={classes.name}>
                <label htmlFor="name" className="sr-only">
                  name
                </label>
                <input
                  type="text"
                  className={classes["input-name"]}
                  name="name"
                  placeholder="escreva aqui..."
                />
              </div>
              <div className={classes.age}>
                <label htmlFor="age" className="sr-only">
                  age
                </label>
                <input
                  type="number"
                  className={classes["input-age"]}
                  name="age"
                  placeholder="escreva aqui..."
                  min={0}
                  max={100}
                />
              </div>
              <div className={classes.tel}>
                <label htmlFor="tel" className="sr-only">
                  tel
                </label>
                <input
                  type="tel"
                  className={classes["input-tel"]}
                  name="tel"
                  placeholder="(xx)xxxxx-xxxx"
                />
              </div>
            </div>
          </div>
          <div action="#" className={classes.apresentation}>
            <p>Apresentação:</p>
            <label htmlFor="textarea" className="sr-only">
              apresentation
            </label>
            <textarea
              name="textarea"
              className={classes["input-textarea"]}
              placeholder="escreva aqui..."
              defaultValue={""}
            />
          </div>
          <div action="#" className={classes.states}>
            <div className={classes["text-states"]}>
              <p>Estado:</p>
              <p>CEP:</p>
              <p>Cidade:</p>
              <p>Bairro:</p>
            </div>
            <div className={classes["info-states"]}>
              <label htmlFor="states" className="sr-only">
                states
              </label>
              <select name="states" className={classes["input-states"]}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="PB">João Pessoa</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              <label htmlFor="CEP" className="sr-only">
                CEP
              </label>
              <input
                type="number"
                className={classes["input-CEP"]}
                placeholder="xxxxx-xxx"
              />
              <label htmlFor="city" className="sr-only">
                cidade
              </label>
              <input
                type="text"
                className={classes["input-city"]}
                placeholder="escreva aqui..."
              />
              <label htmlFor="district" className="sr-only">
                bairro
              </label>
              <input
                type="text"
                className={classes["input-district"]}
                placeholder="escreva aqui..."
              />
            </div>
            <div className={classes["text-states1"]}>
              <p>Rua:</p>
              <p>Complemento:</p>
            </div>
            <div className={classes["info-states1"]}>
              <label htmlFor="street" className="sr-only">
                rua
              </label>
              <input
                type="text"
                className={classes["input-street"]}
                placeholder="escreva aqui..."
              />
              <label htmlFor="complement" className="sr-only">
                complemento
              </label>
              <input
                type="text"
                className={classes["input-complement"]}
                placeholder="escreva aqui..."
              />
            </div>
          </div>
          <div action="#" className={classes["info-social-media"]}>
            <div className={classes["social-media-p"]}>
              <p>
                LinkedIn
                <img src="/images/icon_linkedin.svg" alt="Linkedin" />
              </p>
              <p>
                Twitter
                <img src="/images/icon_twitter.svg" alt="Twitter" />
              </p>
              <p>
                Facebook
                <img src="/images/icon_facebook.svg" alt="Facebook" />
              </p>
              <p>
                Instagram
                <img src="/images/icon_instagram.svg" alt="Instagram" />
              </p>
            </div>
            <div className={classes["inputs-social-media"]}>
              <div action="#" className={classes.linkedin}>
                <input
                  type="text"
                  className={classes["input-linkedin"]}
                  placeholder="escreva aqui..."
                />
              </div>
              <div action="#" className={classes.twitter}>
                <input
                  type="text"
                  className={classes["input-twitter"]}
                  placeholder="escreva aqui..."
                />
              </div>
              <div action="#" className={classes.facebook}>
                <input
                  type="text"
                  className={classes["input-facebook"]}
                  placeholder="escreva aqui..."
                />
              </div>
              <div action="#" className={classes.instagram}>
                <input
                  type="text"
                  className={classes["input-instagram"]}
                  placeholder="escreva aqui..."
                />
              </div>
            </div>
          </div>
          <button
            className={classes["input-send"]}
            type="button"
            onClick={onClose}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
