import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Apresentando vantanges de contratar o serviço para os clientes
export class VantagensSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                display: inline-flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            div {
                text-align: center;
                gap: 3.625rem;
            }

            section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 100px;
            }

            img {
                width: 1.5rem;
            }

            app-titulo {
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
            }


            app-quadro {
                width: 100%;
                height: 100px;
                box-sizing: border-box;
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0;

                color: var(--tom-3);

                top: 0;
                left: 0;
                color: white;

                padding: 50px;
            }


            @media (min-width: 760px){
                section {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 100px;
                }
            }

            @media (min-width: 1024px){
                section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 100px;
                    
                }
            }
        `
    ];

    render() {
        return html`

        <section>
            <div class="arg-1">
                <img src="star.svg" alt="icone-estrela">
                <app-titulo>Orientação especializada</app-titulo>
                <app-paragrafo>
                    A orientação ajuda os candidatos a se prepararem adequadamente, compreendendo as habilidades e competências mais valorizadas pelos recrutadores.
                </app-paragrafo>
            </div>

            <div class="arg-2">
                <img src="thumbs-up.svg" alt="icone-like">
                <app-titulo>Feedback e análise personalizada</app-titulo>
                <app-paragrafo>
                    O candidato recebe feedback e análises personalizadas sobre seu desempenho durante o processo seletivo. Isso inclui avaliação de currículo, simulação de entrevistas, avaliação de habilidades técnicas e comportamentais, entre outros aspectos relevantes para a seleção.
                </app-paragrafo>
            </div>

            <div class="arg-3">
                <img src="trending-up.svg" alt="icone-trend">
                <app-titulo>Preparação abrangente</app-titulo>
                <app-paragrafo>
                    Treinamentos, workshops, materiais de estudo, dicas de estudo e acesso a recursos exclusivos que podem ser essenciais para o sucesso na seleção.
                </app-paragrafo>
            </div>
        </section>


        `;
    }
}
customElements.define('vantagens-section', VantagensSection);
