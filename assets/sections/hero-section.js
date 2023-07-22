import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                align-items: flex-end;

                padding: 0;
            }

            .container {
                position: absolute;
                
            }

            .img-txt {
                color: var(--tom-3);
                font-family: var(--fonte-texto);
            }

            h1 {
                position: absolute;
                align-items: stretch;
                left: 23px;
                bottom: 75px;

                font-size: 28px;
                font-weight: 700;
                line-height: normal;
            }

            h2 {
                position: absolute;
                align-items: stretch;    
                left: 23px;
                bottom: 20px;

                font-size: 20px;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
            <div class="container">
                <img src="../../public/img1.png" alt="decole a sua carreira">
                <div class="img-txt">
                    <h1>Decole a sua carreira!</h1>
                    <h2>Embarque no mercado de trablho com maestria.</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-section', HeroSection);

