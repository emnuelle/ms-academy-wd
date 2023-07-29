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

            app-quadro {
                width: 20rem;
                height: 18rem;
            }

            .img1 ,.img2 {
                width: 20rem;
                height: 18rem;
            }

            swiper-container {
                width: 20rem;
                height: 18rem;
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
                class="mySwiper" 
                pagination="true" 
                pagination-dynamic-bullets="true">

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://pay.kiwify.com.br/qyNlHkR">

                            <img class="img1" src="ebook1.webp" alt="e-book-1"/>

                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://pay.kiwify.com.br/yviqmns">

                            <img class="img2" src="ebook2.webp" alt="e-book-2"/>
                            
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://pay.kiwify.com.br/LT8ix0O">

                            <img class="img2" src="ebook3.webp" alt="e-book-3"/>
                            
                        </a>
                    </swiper-slide>

                </swiper-container>

            </div>

            <div class="arg-2">
                <img src="flag.svg" alt="icone-like">
                <app-titulo>Serviços</app-titulo>
                <app-paragrafo>
                    Receba consultorias personalizadas
                </app-paragrafo>

                <swiper-container 
                class="mySwiper" 
                pagination="true" 
                pagination-dynamic-bullets="true">

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://en.wikipedia.org/wiki/Cat">

                            <img class="img1" src="fb1.webp" alt="Imagem-slider-1"/>

                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://en.wikipedia.org/wiki/Cat">

                            <img class="img2" src="fb1.webp" alt="Imagem-slider-1"/>
                            
                        </a>
                    </swiper-slide>

                </swiper-container>
            </div>

            <div class="arg-3">
                <img src="users.svg" alt="icone-like">
                <app-titulo>Turmas</app-titulo>
                <app-paragrafo>
                    Dinamica de grupo, Aviação 2.0.
                </app-paragrafo>

                <swiper-container 
                class="mySwiper" 
                pagination="true" 
                pagination-dynamic-bullets="true">

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://en.wikipedia.org/wiki/Cat">

                            <img class="img1" src="fb1.webp" alt="Imagem-slider-1"/>

                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a 
                        target="_blank" 
                        href="https://en.wikipedia.org/wiki/Cat">

                            <img class="img2" src="fb1.webp" alt="Imagem-slider-1"/>
                            
                        </a>
                    </swiper-slide>

                </swiper-container>
            </div>

        </section>

        `;
    }
}
customElements.define('servicos2-section', Servicos2Section);
