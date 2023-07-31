import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class SobreNosPage extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <sobre-nos-section></sobre-nos-section>
        `;
    }
}
customElements.define('sobre-nos-page', SobreNosPage);
