import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Página inicial do site, importante para o design e para cativar o cliente
export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                align-items: center;

                padding: 0;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            .container {
                position: absolute;
                
            }

            app-quadro {
                width: 400px;
                height: 700px;
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

            @media (min-width: 520px){
                app-quadro {
                    width: 900px;
                    height: 500px;
                }
            }
        `
    ];

    render() {
        return html`

            
            <div class="container">
                <app-quadro>
                    <img src="img3.png">
                </app-quadro>
                <div class="img-txt">
                    <h1>Decole a sua carreira!</h1>
                    <h2>Embarque no mercado de trabalho com maestria.</h2>
                </div>
                
            </div>
        `;
    }
}

customElements.define('hero-section', HeroSection);

