import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
    static styles = [
        css`
        :host {
            display: flex;
            background: var(--tom-3);
            height: 5.625rem;
            align-items: center;
            justify-content: space-between;

            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            }

        app-logo {
            margin-left: auto;
            margin-right: auto;
            width: 4rem; /* Ajuste o tamanho conforme necessário */
            height: 4rem; /* Ajuste o tamanho conforme necessário */
        }

        svg{
            margin-right: auto;
            margin-left: auto;
            position: absolute;
            right: 32px;
        }

        `
    ];

    render() {
        return html`
        
        <app-logo> </app-logo>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10H3" stroke="#042036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 6H3" stroke="#042036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 14H3" stroke="#042036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 18H3" stroke="#042036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        `;
    }
}
customElements.define('app-navbar', Navbar);
