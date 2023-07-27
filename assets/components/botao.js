import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button), button, ::slotted(a) {
        width: inherit;

        display: flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, black 50%, var(--tom-1))
        );
        box-shadow: 0px 2px 4px 0px #000000;

        /* Tipografia */
        color: var(
          --color,
            var(--tom-3)
        );
        text-align: center;
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style: normal;
        line-height: normal;
        white-space: nowrap;
        text-decoration: none;

        transition: all 0.2ms;
        cursor: pointer;
      }

      button:hover,
      button:active,
      a:hover,
      a:active {
        background-color: color-mix(
          in srgb,
          white 15%,
          var(--button-background, var(--tom-4))
        );
        color: var(--tom-1);
      }
    `,
  ];

  render() {
    return html`

      <slot>
        <button> pressione </button>
      </slot>
      
    `;
  }
}
customElements.define("app-botao", Botao);