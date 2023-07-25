import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class MotivSection extends LitElement {
    static styles = [
        section, 
        css`
            :host {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: stretch;

                padding: 0;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
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

                color: #042036;
                font-family: Playfair Display;
                font-size: 48px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

        `
    ];

    render() {
        return html`
        <div class="container">
                <img src="../../public/img2.png" alt="decole a sua carreira">
                <div class="img-txt">
                    <h1>#Quem <br>Se <br>Prepara <br>Sai <br>Na <br>Frente </h1>
                </div>
            </div>
        `;
    }
}
customElements.define('motiv-section', MotivSection);
