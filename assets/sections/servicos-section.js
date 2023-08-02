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
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 53px;

                padding: 0 0 12rem 0;

                top: 10rem;
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

                text-decoration: none;
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

                text-decoration: none;
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

                text-decoration: none;
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
                <a href="servicos-page">
                    <img src="book-open.svg" alt="icone-livro">
                    <app-titulo>E-books</app-titulo>
                    <app-paragrafo>
                        Tenha acesso ao conteúdo de imediato.
                    </app-paragrafo>
                </a>
            </div>

            <div class="arg-2">
                <a href="servicos-page">
                    <img src="flag.svg" alt="icone-bandeira">
                    <app-titulo>Serviços</app-titulo>
                    <app-paragrafo>
                        Receba consultorias personalizadas
                    </app-paragrafo>
                </a>
            </div>

            <div class="arg-3">
                <a href="servicos-page">
                    <img src="users.svg" alt="icone-grupo">
                    <app-titulo>Turmas</app-titulo>
                    <app-paragrafo>
                        Dinamica de grupo, Aviação 2.0.
                    </app-paragrafo>
                </a>
            </div>

        </section>

        `;
    }
}
customElements.define('servicos-section', ServicosSection);
