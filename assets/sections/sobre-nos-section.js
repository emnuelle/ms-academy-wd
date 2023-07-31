import { LitElement, html, css } from 'lit';

export class SobreNosSection extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                align-content: flex-start;
                gap: 53px;

                height: auto;

                padding: 0 0 12rem 0;

                top: 10rem;
                left: 0;
                right: 0;
                width: 100%;
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

        <p> Um dia alguém muito especial me inspirou, e hoje não só realizei uns dos meus 
            sonhos mas trambém faço parte da história de muitas pessoas.
        </p>

        <app-quadro>
            <img src="sobre-nos1.png">
        </app-quadro>

        <p>
            Essa é a comissária Marlucy, Ela eentrou na TAM em 1996. Com 18 anos. <br>
            <strong>Vulgo: Mamãe</strong> <br>
            Eu tinha quase 2 anos quando ela virou aeromoça, a melhor do mundo! Sabe porque? Porque ela venceu
            todos os obstáculos que esbarrou, e se manteve <strong>firme.</strong> <br>
            Mesmo diante de todas as dificuldades, ela permaneceu ali. <br>
            <strong>Sorrindo e amando a sua profissão</strong> <br>
            E apesar de estar sempre voando, ela nunca, NUNCA FOI AUSENTE.
        </p>

        <app-quadro>
            <img src="sobre-nos2.png">
        </app-quadro>

        <p>
            O esforço e dedicação pela família eram nítidos, tanto quanto a paixão em estar ali! <br>
            Ela venceu a prória personalidade por amor. Era tão tímida, que muita gente duvidava da onde
            ela poderia chegar. <br>
            Nessa foto, ela voou pela primeira vez como chefe de cabine de um avião WideBody.   
        </p>

        <app-quadro>
            <img src="sobre-nos3.png">
        </app-quadro>

        <p>
            Tudo isso era tão inspirador, que eu pegava a sua mala e falava 
            <strong>"Eu vou ser aelomôça"</strong> <br>
            Viajei de avião pela primeira vez com 2 anos de idade (ou um pouco menos).
            A maior dificuldade da tripulação foi me tirar de lá!
        </p>

        <app-quadro>
            <img src="sobre-nos4.png">
        </app-quadro>

        <p>
            Nesse dia, ia ter um evento na escolinha sobre a profissão que queriamos seguir. Eu passei batom 
            vermelho pra representar a minha mãe, e quem eu queria ser <strong> uma "aelomoça" </strong> <br>
            CLARO, inspirada na melhor do mundo!
        </p>

        <app-quadro>
            <img src="sobre-nos5.png">
        </app-quadro>

        <p>
            Em 2013, comecei o curso. De julho a novembro. <br>
            Graças a deus e as várias horas de estudo por dia, fui aprovada em todas as matérias de primeira! <br>
            Em janeiro de 2014, passei na ANAC.
        </p>

        <app-quadro>
            <img src="sobre-nos6.png">
        </app-quadro>

        <p>
            Em julho de 2014, entrei na TAM como agente de aeroporto. <br>
            <strong> Mais um passo foi dado! </strong>
        </p>

        <app-quadro>
            <img src="sobre-nos7.png">
        </app-quadro>

        <p>
            Passei por várias mudanças, e o engraçado é que o amor pela aviação se manteve firme. <br>
            Foi a minha maior herança!
        </p>

        <h2>
            O resumo de tudo isso aqui, é só uma coisa: <br>
            Só você sabe o que passou para chegar onde está.  <br>
            Só você sabe todo o caminho que trilhou.  <br>
            Só você entende o quanto seu sonho significa pra você!  <br>
            portanto, não deixe de acreditar em quem você é! <br>
            Não deixe que ninguçem nesse mundo desmereça a sua história até aqui  <br>
            Não de ouvidos a voz do cansaço,  <br>
            <strong> Não existe ninguém no mundo como você! </strong>
        </h2>

        <app-quadro>
            <img src="sobre-nos7.png">
        </app-quadro>

        <p>
            Passei por várias mudanças, e o engraçado é que o amor pela aviação se manteve firme. <br>
            Foi a minha maior herança!
        </p>

        `;
    }
}
customElements.define('sobre-nos-section', SobreNosSection);
