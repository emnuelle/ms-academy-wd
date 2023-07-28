import { LitElement, html, css } from "lit";
import { nav } from "../../main";

// Menu é essencial para auxiliar na acessibilidade do site
export class MenuSection extends LitElement {
  static styles = [

    css`
      :host {
        display: block;
      }

      dialog{
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: 0;
        padding: 32px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;
        border: 0;

        background-color: rgba(0, 0, 0, 40%);
        opacity: 0;
        z-index: 110;
        position: fixed;
        pointer-events: none;
        transition: opacity 300ms;

      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      }

      app-logo {
        width: 96px;
        height: 96PX;
        background-color: white;
      }

      a, button {
        /* layout */
        display: flex;
        padding: 10px 0px;
        justify-content: content;
        align-items: center;
        gap: 16px;

        /* Tipografia */
        color: #FFF;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 24px;

      }

      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      svg, 
      feather-icon {
        display: flex;
        width: 24px;
        fill: currentColor;
        color: white;
      }

      a:hover, button:hover {
       color: var(--tom-1);
       }

      a:active, button:active {
       color: var(--cor-primaria);
      }

    `,
  ];

  rolarContato() {
    return nav.rolarPara('#contato')
  }

  rolarUnidades() {
      return nav.rolarPara('#unidades')
  }

  render() {
    return html`

      <dialog >
        <app-logo></app-logo>

        <nav>

          <button @click=${this.rolarUnidades}>Serviços</button>

          <button @click=${this.rolarContato}>Contato</button>

          <a @click=${nav.fechar} href="servicos">Sobre</a>

          <a @click=${nav.fechar} href="/feedback-page">Feedbacks</a>

          <a @click=${nav.fechar}  href="/">Home</a>

          <button @click=${nav.fechar} title="fechar menu">
            <feather-icon icon="x"></feather-icon>
          </button>

        </nav>
      </dialog>

    `;
  }
}
customElements.define("menu-section", MenuSection);