import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-backtotop.js';

describe('auro-backtotop', () => {
  it('sets the CSS class on auro-backtotop > div element', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-backtotop is accessible', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-backtotop custom element is defined', async () => {
    const el = await !!customElements.get("auro-backtotop");

    await expect(el).to.be.true;
  });
});
