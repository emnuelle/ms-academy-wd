import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class HomePage extends LitElement {

    render() {
        return html`

            <!-- <hero-section></hero-section>

            <vantagens-section></vantagens-section>

            <servicos-section></servicos-section>

            <alunos-section></alunos-section>

            <social-section></social-section> -->
            
            <hero-feedback-section></Hero-Feedback-Section>

        `;
    }
}
customElements.define('home-page', HomePage);
