import React from "react";
import whatsappIcon from "../../assets/inages/icons/whatsapp.svg";
import './styles.css';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/17952168?s=460&u=9564a6ed796def74ce596d43ec5ee3823b151c91&v=4"
              alt="Diogo Cipriano"
            />
            <div>
              <strong>Diogo Cipriano</strong>
              <span>Quimica</span>
            </div>
          </header>
          <p>Entusiasta de desenvolvimento mobile
          <br/><br/>
          Apaixonado por tecnologias, principalmente quando se trata de
          javascript.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong> R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
    )
}
export default TeacherItem;