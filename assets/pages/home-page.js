import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class HomePage extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }


        `
    ];

    render() {
        return html`

            <app-navbar></app-navbar>

            <hero-section></hero-section>

            <vantagens-section></vantagens-section>

            <motiv-section></motiv-section>

            <servicos-section></servicos-section>

            <alunos-section></alunos-section>

            <social-section></social-section>

        `;
    }
}
customElements.define('home-page', HomePage);
