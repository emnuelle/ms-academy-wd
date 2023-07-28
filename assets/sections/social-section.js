import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Disponibilizando as redes sociais
export class SocialSection extends LitElement {
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

            div {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }

            h1 {
                color: var(--tom-3);
                text-align: center;
                font-family: var(--fonte-titulo);
                font-size: 24px;
                font-style: normal;
                line-height: normal;
            }

            a {
                display: flex;
                height: 68px;
                padding: .125rem 1.125rem;
                align-items: center;
                gap: 20px;
            }

            img {
                width: 40px;
                height: 37px;
                flex-shrink: 0;

                color: var(--tom-3);
            }

        `
    ];

    render() {
        return html`

            <div>

                <h1>Acesse as redes sociais!</h1>

                <app-botao>
                    <a>
                        <img src="insta-icon.svg" alt="Icon Instagram">
                        <p>@mentoriaparavoar</p>
                    </a>
                </app-botao>

                <app-botao>
                    <a>
                        <img src="insta-icon.svg" alt="Icon Instagram">
                        <p>@mentoriaparavoar</p>
                    </a>
                </app-botao>

                <app-botao>
                    <a>
                        <img src="insta-icon.svg" alt="Icon Instagram">
                        <p>@mentoriaparavoar</p>
                    </a>
                </app-botao>

                <img src="plane-icon.svg" alt="img4">

            </div>
            
        `;
    }
}
customElements.define('social-section', SocialSection);
