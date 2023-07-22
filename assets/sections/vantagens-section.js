import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class VantagensSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            div {
                text-align: center;
                gap: 3.625rem;
            }

            img {
                width: 1.5rem;
            }

            app-titulo {
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
            }
        `
    ];

    render() {
        return html`


        <div class="arg-1">
            <img src="../../public/star.svg" alt="icone-estrela">
            <app-titulo>Orientação especializada</app-titulo>
            <app-paragrafo>
                A orientação ajuda os candidatos a se prepararem adequadamente, compreendendo as habilidades e competências mais valorizadas pelos recrutadores.
            </app-paragrafo>
        </div>

        <div class="arg-2">
            <img src="../../public/thumbs-up.svg" alt="icone-like">
            <app-titulo>Feedback e análise personalizada</app-titulo>
            <app-paragrafo>
                O candidato recebe feedback e análises personalizadas sobre seu desempenho durante o processo seletivo. Isso inclui avaliação de currículo, simulação de entrevistas, avaliação de habilidades técnicas e comportamentais, entre outros aspectos relevantes para a seleção.
            </app-paragrafo>
        </div>

        <div class="arg-3">
            <img src="../../public/trending-up.svg" alt="icone-trend">
            <app-titulo>Preparação abrangente</app-titulo>
            <app-paragrafo>
                Treinamentos, workshops, materiais de estudo, dicas de estudo e acesso a recursos exclusivos que podem ser essenciais para o sucesso na seleção.
            </app-paragrafo>
        </div>

        `;
    }
}
customElements.define('vantagens-section', VantagensSection);
