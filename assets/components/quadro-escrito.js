import { LitElement, html, css } from 'lit';

export class QuadroEscrito extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                width: 360px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--tom-3);
                padding: 21px 0px;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            h1 {
                color: #042036;
                font-family: Playfair Display;
                font-size: 64px;
                font-style: normal;
                font-weight: 700;
                line-height: 0;
            }

            h2{
                width: 267px;
                height: 51px;

                color: #042036;
                text-align: center;
                font-family: Arimo;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`

        <h1>
            <slot nome="título">
                título
            </slot>
        </h1>

        <h2>
            <slot name="subtitulo">
                subtitulo
            </slot>
        </h2>

        `;
    }
}
customElements.define('app-quadro-escrito', QuadroEscrito);
