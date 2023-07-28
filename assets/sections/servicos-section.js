import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Apresentando os serviços para quem está utilizando o site
export class ServicosSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                align-content: flex-start;
                gap: 53px;

                padding: 0;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }


            section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 50px;
            }

            div {
                text-align: center;
                gap: 50px;
            }

            img {
                width: 1.5rem;
                height: 1.5rem;
                flex-shrink: 0;
            }

            app-titulo {
                color: var(--tom-4);
                font-family: var(--fonte-texto);
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            app-paragrafo {
                width: 181px;

                color: var(--tom-4);
                text-align: center;
                font-family: var(--fonte-texto);
                font-size: .9375rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            @media (min-width: 1024px){
                section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    gap: 50px;
                }
            }

        `
    ];

    render() {
        return html`

        <app-quadro-escrito>
            <span>Serviços</span>
            <span slot="subtitulo">São diversos para te auxiliar a embarcar no mercado de trabalho com maestria.</span>
        </app-quadro-escrito>

        <section>

            <div class="arg-1">
                <img src="book-open.svg" alt="icone-like">
                <app-titulo>E-books</app-titulo>
                <app-paragrafo>
                    Tenha acesso ao conteúdo de imediato.
                </app-paragrafo>
            </div>

            <div class="arg-2">
                <img src="flag.svg" alt="icone-like">
                <app-titulo>Serviços</app-titulo>
                <app-paragrafo>
                    Receba consultorias personalizadas
                </app-paragrafo>
            </div>

            <div class="arg-3">
                <img src="users.svg" alt="icone-like">
                <app-titulo>Turmas</app-titulo>
                <app-paragrafo>
                    Dinamica de grupo, Aviação 2.0.
                </app-paragrafo>
            </div>

        </section>

        `;
    }
}
customElements.define('servicos-section', ServicosSection);
