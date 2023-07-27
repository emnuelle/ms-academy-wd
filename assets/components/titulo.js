import { LitElement, html, css } from 'lit';

export class Titulo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                color: #FFF;
                text-align: center;
                font-family: Playfair Display;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
            <slot>
            Título
            </slot>
        `;
    }
}
customElements.define('app-titulo', Titulo);
