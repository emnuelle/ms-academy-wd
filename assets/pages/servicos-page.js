import { LitElement, html, css } from 'lit';

export class ServicosPage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <servicos2-section></servicos2-section>
        `;
    }
}
customElements.define('servicos-page', ServicosPage);
