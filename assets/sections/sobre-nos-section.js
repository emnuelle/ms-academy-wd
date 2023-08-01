import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class SobreNosSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                align-content: center;
                gap: 53px;

                padding: 0 0 14rem 0;

                top: 10rem;
                left: 0;
                right: 0;
                width: 100%;
                height: auto;
            }

            div {
                display: flex;
                width: 293px;
                height: 170px;
                justify-content: center;
                align-items: flex-start;
                gap: 15px;
                flex-shrink: 0;
                flex-direction: row-reverse;
            }

            .sobre2, .sobre4, .sobre6 {
                flex-direction: row;
            }

            app-quadro {
                width: 139px;
                height: 170px;
                flex-shrink: 0;
            }

            img {
                height: 100%;
            }

            h1 {
                color: var(--tom-3);
                font-family: var(--fonte-titulo);
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            p {

                color: var(--tom-3);
                font-family: var(--fonte-texto);
                font-size: 10px;
                font-style: normal;
                line-height: normal;

                margin: 0;
            }
        `
    ];

    render() {
        return html`
        
            <app-quadro-escrito>

                <span>Sobre Nós</span>

                <span slot="subtitulo">
                    A história por trás da M.S. Academy
                </span>

            </app-quadro-escrito>


            <h1>Quem é Mariane Soares?</h1>

            <div class="sobre1">

                <p>
                    <strong>
                    Um dia alguém muito especial me inspirou, e hoje não só realizei uns dos meus 
                    sonhos mas também faço parte da história de muitas pessoas.
                    </strong>
                    <br>
                    Essa é a comissária Marlucy, Ela eentrou na TAM em 1996. Com 18 anos. <br>
                    <strong>Vulgo: Mamãe</strong>
                    
                </p>

                <app-quadro>
                    <img src="sobre-nos1.png">
                </app-quadro>

            </div>

            <div class="sobre2">

                <p>
                    Eu tinha quase 2 anos quando ela virou aeromoça, a melhor do mundo! Sabe porque? Porque ela venceu
                    todos os obstáculos que esbarrou, e se manteve <strong>firme.</strong> <br>
                    Mesmo diante de todas as dificuldades, ela permaneceu ali. <br>
                    <strong>Sorrindo e amando a sua profissão</strong>
                </p>

                <app-quadro>
                    <img src="sobre-nos2.png">
                </app-quadro>

            </div>

            <div class="sobre3">

                <p>
                    E apesar de estar sempre voando, ela nunca, NUNCA FOI AUSENTE.
                    O esforço e dedicação pela família eram nítidos, tanto quanto a paixão em estar ali! <br>
                    Ela venceu a prória personalidade por amor. Era tão tímida, que muita gente duvidava da onde
                    ela poderia chegar. <br>
                    Nessa foto, ela voou pela primeira vez como chefe de cabine de um avião WideBody.
                </p>

                <app-quadro>
                    <img src="sobre-nos3.png">
                </app-quadro>

            </div>

            <div class="sobre4">

                <p>
                    Tudo isso era tão inspirador, que eu pegava a sua mala e falava 
                    <strong>"Eu vou ser aelomôça"</strong> <br>
                    Viajei de avião pela primeira vez com 2 anos de idade (ou um pouco menos).
                    A maior dificuldade da tripulação foi me tirar de lá!
                    Nesse dia, ia ter um evento na escolinha sobre a profissão que queriamos seguir. Eu passei batom 
                    vermelho pra representar a minha mãe, e quem eu queria ser <strong> uma "aelomoça" </strong>
                </p>

                <app-quadro>
                    <img src="sobre-nos4.png">
                </app-quadro>

            </div>

            <div class="sobre5">

                <p>
                    Em 2013, aconteceu tudo de pior que poderia ser imaginado, acabei perdendo 
                    meu pai e minha mãe para um acidente de carro, parecia que tudo tinha sido apagado.
                    <br>
                    A dor parecia insuperável.
                </p>

                <app-quadro>
                    <img src="sobre-nos5.png">
                </app-quadro>

            </div>

            <div class="sobre6">

                <p>
                    Em 2013, aconteceu tudo de pior que poderia ser imaginado, acabei perdendo 
                    meu pai e minha mãe para um acidente de carro, parecia que tudo tinha sido apagado.
                    <br>
                    A dor parecia insuperável.
                </p>

                <app-quadro>
                    <img src="sobre-nos5.png">
                </app-quadro>

            </div>

        `;
    }
}
customElements.define('sobre-nos-section', SobreNosSection);
