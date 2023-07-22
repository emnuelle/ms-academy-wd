import { LitElement, html, css } from 'lit';

export class Paragrafo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            slot {
                color: #FFF;
                text-align: center;
                font-family: var(--fonte-texto);
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
        <slot>
            paragrafo
        </slot>
        `;
    }
}
customElements.define('app-paragrafo', Paragrafo);
