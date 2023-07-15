import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
        background: var(--tom-1);
        `,
    ];

    render() {
        return html`

        `;
    }
}
customElements.define('hero-section', HeroSection);