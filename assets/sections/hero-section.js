import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                align-items: center;
            }

            .container {
                position: absolute;
                display: inline-block;
            }

            .img-txt {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 10px;
                border-radius: 5px;
                color: var(--tom-3);
                font-family: var(--fonte-texto);
            }

            h1 {
                position: absolute;
                left: 23px;
                bottom: 115px;
            }

            h2 {
                position: absolute;
                left: 23px;
                bottom: 77px;
            }
        `
    ];

    render() {
        return html`
            <div class="container">
                <img src="../../public/img1.png" alt="decole a sua carreira">
                <div class="img-txt">
                    <h1>Decole a sua carreira!</h1>
                    <h2>São diversas opções de lero lero</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-section', HeroSection);

