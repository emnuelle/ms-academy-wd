import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                font-family: var(--fonte-titulo);
                font-size: .75rem;
                color: var(--tom-1);

            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                height: 2rem;
                font-size: .5rem;
                background-color: var(--tom-3);


            }

            footer {
                display: flex;
                justify-content: space-between; 
                align-items: center;
                padding: 2rem;
                background-color: var(--tom-5);
            }

            nav {
                display: flex;
                flex-direction: column; 
                align-items: flex-end;
                gap: 1rem;
                
            }

            app-logo {
                width: 4rem;
                height: 4rem;
                background-color: white;
                opacity: .9;
            }

            a {
                color: white;
                text-decoration: none;
                opacity: .9;
            }
        `
    ];

    render() {
        return html`
            <footer>
                <app-logo>

                </app-logo>
                <nav>
                    <a href="/">Home</a>
                    <a href="">Serviços</a>
                    <a href="">Sobre nós</a>
                    <a href="">FeedBacks</a>
                    <a href="">Contato</a>
                </nav>
            </footer>
            <span>
                © M.S. Academy - Todos os direitos reservados desde 2020.
            </span>
        `;
    }
}
customElements.define('app-rodape', Rodape);
