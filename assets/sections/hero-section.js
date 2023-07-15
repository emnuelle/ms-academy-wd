import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style'

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`

        app-navbar{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
        }

        `,
    ];

    render() {
        return html`

            <app-navbar> </app-navbar>

            <section>
            </section>

            


        `;
    }
}
customElements.define('hero-section', HeroSection);