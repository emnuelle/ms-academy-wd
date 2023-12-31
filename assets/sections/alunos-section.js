import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

// Mostrando os clientes anterioes que foram bem sucedidos 
export class AlunosSection extends LitElement {
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

            #frase-impacto {
                color: var(--tom-3);
                font-family: var(--fonte-titulo);
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            strong {
                color: var(--tom-3);
                font-family: var(--fonte-cursiva);
                font-size: 48px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .ns-alunos {
                display: flex;
                flex-direction: column;
                justify-content: center;

                align-items: center;
                gap: 21px;
            }

            .aluno1, .aluno2 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                gap: 21px;
            }


            h1 {
                color: var(--tom-4);
                font-family: var(--fonte-titulo);
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            p {
                display: flex;
                flex-direction: column;

                color: var(--tom-4);
                text-align: justify;
                font-family: var(--fonte-texto);
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            app-botao {
                width: 157px;
                height: 33px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-direction: center;
            }

            @media (min-width: 760px){
                :host {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 100px;
                }
            }

            @media (min-width: 1024px){
                :host {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 100px;
                }
            }
            

        `
    ];

    render() {
        return html`

        <p id="frase-impacto">
            Aqui o Sucesso é <strong>garantido!</strong>
        </p>

        <div class="ns-alunos">

            <h1>Nossos Alunos</h1>

            <div class="aluno1">
                
                <img src="aluno1.png" alt="aluno 1">
                <div class="aluno1x">

                    <h1>Paulo Augusto</h1>

                    <p>Comissário LATAM</p>

                </div>
                
            </div>

            <div class="aluno2">

                <img src="aluno2.png" alt="aluno 2">
                <div class="aluno2x">

                    <h1>Thais Carla</h1>

                    <p>Comissário LATAM</p>

                </div>

            </div>

            <app-botao>
                <a href="feedback-page" title="ver-mais/alunos">
                    Ver Mais
                </a>
            </app-botao>

        </div>
        
        `;
    }
}
customElements.define('alunos-section', AlunosSection);
