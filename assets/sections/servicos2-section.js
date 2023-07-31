import { LitElement, html, css } from 'lit';

export class Servicos2Section extends LitElement {
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

                height: fit-content;

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
                gap: 4.6875rem;
            }

            div {
                text-align: center;
                gap: 10px;

                display: flex;
                flex-direction: column;
                align-items: center;

            }

            .img {
                width: 100%;
                height: 100%;
            }

            swiper-container {
                width: 100svw;
                height: 300px;

                /* centralizar a div */
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }

            swiper-slide {
                padding-top: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: transform 500ms;
            }

            slot {
                display: flex;
                align-items: center;

                text-align: center;
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
                text-align: column;
                font-family: var(--fonte-texto);
                font-size: .9375rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .swiper-slide-active {
                transform: scale(1.1);
            }

            @media (min-width: 760px){
                
                app-paragrafo {
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                }

                app-mapa {
                    width: 400px;
                    height: 300px;
                }

                swiper-container {
                    height: 400px;
                }
            }
        `
    ];

    firstUpdated() {
        const swiper = this.renderRoot.querySelector('swiper-container')

        console.log(swiper)

        Object.assign(swiper, {
            spaceBetween: -75,
            initialSlide: 1,
            rewind: true,
            breakpoints: {
                768: {
                    spaceBetween: -400,
                },
                1024: {
                    spaceBetween: -700,
                },
                1368: {
                    spaceBetween: 0,
                    slidesPerView: 4,
                    
                },
            }
        })
        
        swiper.initialize()
    }

    mensagemWhatsapp() {
        let mensagem = "Olá, gostaria de contrar um serviço!"
        return encodeURIComponent(mensagem)
    }

    render() {

        const numeroWhatsapp = "5511940725035"

        return html`

        <app-quadro-escrito>

            <span>Serviços</span>

            <span slot="subtitulo">
                São diversos para te auxiliar a embarcar no mercado de trabalho com maestria.
            </span>

        </app-quadro-escrito>

        <section>

            <div class="arg-1">
                <img src="book-open.svg" alt="icone-like">
                <app-titulo>E-books</app-titulo>
                <app-paragrafo>
                    Tenha acesso ao conteúdo de imediato.
                </app-paragrafo>

                <swiper-container 
                init="false">

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href="https://pay.kiwify.com.br/qyNlHkR">

                                <img  loading="lazy" class="img" src="ebook1.png" alt="e-book-1"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- E-book / Guia Completo do currículo impecável -->
                            </h2>

                            <h3 slot="subtitulo"> 
                                O Guia Completo Currículo Impecável é um e-book para futuros comissários que desejam criar um currículo chamativo e impecável para os processos seletivos da Aviação no Brasil.
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href="https://pay.kiwify.com.br/yviqmns">

                                <img  loading="lazy" class="img" src="ebook2.png" alt="e-book-1"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- E-book / English With Mary -->
                            </h2>

                            <h3 slot="subtitulo"> 
                                O E-book "English With Mary" possui 10 capítulos com exercícios para destravar e aperfeiçoar o inglês, especialmente para o Processo Seletivo de companhias aéreas.
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href="https://pay.kiwify.com.br/LT8ix0O">

                                <img  loading="lazy" class="img" src="ebook3.png" alt="e-book-1"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- e-book / Processo seletivo na prática -->
                            </h2>

                            <h3 slot="subtitulo"> 
                            Nele, você encontrará um CHECKLIST simples e prático, abrangendo tudo o que você precisa estudar e organizar para o processo seletivo. Lembre-se: a oportunidade surge quando estamos preparados.
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>
                    
                </swiper-container>

            </div>

            <div class="arg-2">
                <img src="flag.svg" alt="icone-like">
                <app-titulo>Serviços</app-titulo>
                <app-paragrafo>
                    Receba consultorias personalizadas
                </app-paragrafo>

                <swiper-container>
                <!-- init="false"-->

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>

                                <img  loading="lazy" class="img" src="serv1.png" alt="serviço-1"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- Análise de currículo -->
                            </h2>

                            <h3 slot="subtitulo"> 
                                Analiso todo o seu currículo por vídeo chamada pelo
                                Google Meet e todas as mudanças são
                                documentadas para você consultar quando quiser
                                ou precisar.
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>

                                <img  loading="lazy" class="img" src="serv2.png" alt="serviço-2"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- Simulação de entrevista -->
                            </h2>

                            <h3 slot="subtitulo"> 
                            Na simulação de entrevista, faço uma chamada de
                            vídeo com você para analisar sua desenvoltura,
                            apresentação pessoal e respostas. A intenção não é
                            fazer você decorar respostas prontas, mas sim, usar
                            sua experiência e trajetória ao seu favor de forma
                            estratégica. <br>
                            <strong> Dura, em média, 1h30. </strong>

                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>
                    
                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>

                                <img  loading="lazy" class="img" src="serv3.png" alt="serviço-3"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- Consultoria de Carreira -->
                            </h2>

                            <h3 slot="subtitulo"> 
                                Na Consultoria de Carreira eu direciono você
                                pontualmente nas dúvidas e inseguranças que você
                                tiver em relação à carreira na aviação.
                                <strong> Dura, em média, 1h30 e a sessão fica
                                gravada para consulta. </strong>

                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>

                    <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>

                                <img  loading="lazy" class="img" src="serv4.png" alt="serviço-4"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- Mentoria Individual -->
                            </h2>

                            <h3 slot="subtitulo"> 
                            Processo de 6 encontros individuais de 1h30
                            baseados em três pilares; <br>
                            <strong>Desenvolvimento Pessoal:</strong><br>
                            Autoconhecimento & Marketing Pessoal <br>
                            <strong>Apresentação Pessoal:</strong><br>
                            Imagem, Comportamento & Comunicação <br>
                            <strong>Processos Seletivos:</strong><br>
                            Aspectos da Profissão e Fases do Processo
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>

                </swiper-container>

            </div>

            <div class="arg-3">
                
                <img src="users.svg" alt="icone-like">
                <app-titulo>Turmas</app-titulo>
                <app-paragrafo>
                 Dinamica de grupo, Aviação 2.0.
                </app-paragrafo>
                

                <swiper-container>
                <swiper-slide>
                        <app-caixa-quadro>
                            <a slot="imagem"
                            target="_blank" 
                            href="https://www.instagram.com/mentoriaparavoar">

                                <img  loading="lazy" class="img" src="coming-soon.png" alt="serviço-4"/>

                            </a>

                            <h2 slot="titulo">
                                <!-- Aviação 2.0 -->
                            </h2>

                            <h3 slot="subtitulo"> 
                            Aviação 2.0 <br> Em breve!
                            </h3>

                        </app-caixa-quadro>
                    </swiper-slide>
                </swiper-container>

            </div>
            

        </section>

        `;
    }
}
customElements.define('servicos2-section', Servicos2Section);
