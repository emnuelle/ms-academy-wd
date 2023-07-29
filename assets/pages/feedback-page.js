import { LitElement, html, css } from 'lit';

export class FeedbackPage extends LitElement {

    render() {
        return html`

            <feedback-section></feedback-Section>
            
        `;
    }
}
customElements.define('feedback-page', FeedbackPage);
