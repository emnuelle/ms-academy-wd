import { LitElement, html, css } from 'lit';

export class Suc extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-start;

                align-items: stretch;

                padding: 0;

                top: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            .container {
                position: absolute;
                
            }

            .img-txt {
                color: var(--tom-3);
                font-family: var(--fonte-texto);
            }

            .h1 {
                position: absolute;
                left: 39px;
                top: 42px;

                color: var(--tom-1);
                font-family: var(--fonte-titulo);
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            .strong {
                position: absolute;
                right: 24px;
                bottom: -35px;

                color: var(--tom-1);
                font-family: var(--fonte-cursiva);
                font-size: 48px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`

       

        <div class="container">
                 <img src="../../public/img3.png" alt="Sucesso garantido">
                <div class="img-txt">
                    <p class="h1">Aqui o sucesso é</p>
                    <p class="strong">garantido!</p>
                </div>
            </div>

        `;
    }
}
customElements.define('app-suc', Suc);
