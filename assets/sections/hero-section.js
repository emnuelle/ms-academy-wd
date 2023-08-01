import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Página inicial do site, importante para o design e para cativar o cliente
export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;

                padding: 0 0 12rem 0;

                top: 10rem;
                left: 0;
                right: 0;
                width: 100%;


            }

            .container {
                position: absolute;
                
            }

            app-quadro {
                width: 380px;
                height: 700px;
            }

            .img-txt {
                color: var(--tom-5);
                font-family: var(--fonte-texto);

                z-index: 20;
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

            @media (min-width: 760px){
                app-quadro {
                    width: 800px;
                    height: 400px;
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
