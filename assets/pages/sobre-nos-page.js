import { LitElement, html, css } from 'lit';


export class SobreNosPage extends LitElement {

    render() {
        return html`
        <sobre-nos-section></sobre-nos-section>
        `;
    }
}
customElements.define('sobre-nos-page', SobreNosPage);
