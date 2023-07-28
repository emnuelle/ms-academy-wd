import { LitElement, html, css } from 'lit';

export class HeroFeedbackSection extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-content: center;
                gap: 53px;

                padding: 0 0 1.5rem 0;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            app-quadro {
                width: 22rem;
                height: 400px;
            }

            #frase-impacto {
                color: var(--tom-3);
                font-family: var(--fonte-titulo);
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                align-content: center;
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

            .aluno1, .aluno2, .aluno3, .aluno4 {
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

            <app-quadro-escrito>

                <span>Feedbacks</span>

                <span slot="subtitulo">
                    Conheça os nossos alunos e saiba o que eles falam sobre nós!
                </span>

            </app-quadro-escrito>

            <app-quadro>

                <swiper-container 
                class="mySwiper" 
                pagination="true" 
                pagination-dynamic-bullets="true">

                    <swiper-slide>
                        <img src="/fb1.webp" alt="Imagem slider 1"/>
                    </swiper-slide>

                    <swiper-slide>
                        <img src="/fb1.webp" alt="Imagem slider 2"/>
                    </swiper-slide>

                </swiper-container>

            </app-quadro>

            <p id="frase-impacto">
            Aqui o Sucesso é <strong>garantido!</strong>
            </p>

            <div class="ns-alunos">

                <h1>Conheça os nossos Alunos!</h1>
                <p>Histórias de sucesso e muita motivação;</p>

                <div class="aluno1">
                    
                    <img src="aluno1.png" alt="aluno 1">
                    <div class="aluno1x">

                        <h1>Paulo Augusto</h1>

                        <p>Comissário LATAM</p>

                    </div>
                    
                </div>

                <div class="aluno2">

                    <img src="aluno2.png" alt="aluno 1">
                    <div class="aluno2x">

                        <h1>Thais Carla</h1>

                        <p>Comissário LATAM</p>

                    </div>

                </div>

                <div class="aluno3">

                    <img src="aluno2.png" alt="aluno 1">
                    <div class="aluno2x">

                        <h1>Thais Carla</h1>

                        <p>Comissário LATAM</p>

                    </div>

                </div>

                <div class="aluno4">

                    <img src="aluno2.png" alt="aluno 1">
                    <div class="aluno2x">

                        <h1>Thais Carla</h1>

                        <p>Comissário LATAM</p>

                    </div>

                </div>

            </div>

        `;
    }
}
customElements.define('hero-feedback-section', HeroFeedbackSection);
