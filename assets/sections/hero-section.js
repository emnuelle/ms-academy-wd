import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style'

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            app-logo {
                width: 160px;
                height: 160px;

                position: absolute;
            }
        `,
    ];

    render() {
        return html`

            <app-titulo>
                <app-logo></app-logo>
            </app-titulo>

        `;
    }
}
customElements.define('hero-section', HeroSection);