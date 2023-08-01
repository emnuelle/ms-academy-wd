import { LitElement, html, css } from 'lit';

export class CaixaQuadro extends LitElement {
    static styles = [
        css`
            * , ::slotted(*) {
                margin: 0;

            }

            :host {
                /* Layout */
                display: flex;
                width: 260px;
                height: 260px;
                flex-direction: column;
                align-items: flex-start;

                /* Estilos */
                border-radius: 8px;
                color: #FFF;
                font-family: var(--fonte-titulo);
                line-height: normal;
            }

            address{
                /* layout */
                display: flex;
                padding: 10px 12px;
                padding-top: 5px;
                flex-direction: column;
                align-items: flex-start;
                align-self: stretch;

                /* estilos */
                background: var(--tom-5); 
                font-style: normal;
            }

            .subtitulo, ::slotted(h3) {
                font-size: .5rem;
                font-weight: 400;
                line-height: 100%; 
                letter-spacing: 0.32px;
                padding: 0 0 1rem 0;
            }

            figure {
               flex: 1 0 0;
               align-self: stretch;

               display: flex;
               align-items: center;
               overflow: hidden;

               border: 4px solid var(--tom-5);
            }

            .imagem{
                width: 100%;
            }

            ::slotted(img) {
                width: 100%;
            }
        `
    ];

    render() {
        return html`
        
        <figure>
            <slot name="imagem">
                
            </slot>
        </figure>

        <address>
            
            <slot name="subtitulo">
                <h3 class="subtitulo" >
                    subtitulo
                </h3>
            </slot>
        </address>

        `;
    }
}
customElements.define('app-caixa-quadro', CaixaQuadro);
