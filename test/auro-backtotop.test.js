import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-backtotop.js';

describe('auro-backtotop', () => {
  const sandbox = sinon.createSandbox();
  let intersectionStub, observeStub; // eslint-disable-line init-declarations

  beforeEach(() => {
    observeStub = sandbox.stub();
    intersectionStub = sandbox.stub(window, 'IntersectionObserver').callsFake(() => ({
      observe: observeStub,
    }));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('auro-backtotop is accessible', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-backtotop custom element defines fixed trigger and Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `),
     root = el.shadowRoot,
     referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
     triggerEl = root.querySelector('.trigger');

    await elementUpdated(el);

    await expect(referenceEl, 'Expect reference element to exist').to.exist;
    await expect(triggerEl, 'Expect trigger element to exist').to.exist;
    await expect(triggerEl.classList.contains('trigger--inline')).to.be.false;
    await expect(triggerEl.classList.contains('trigger--visible')).to.be.false;
  });

  it('auro-backtotop custom element sets up Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `),
     root = el.shadowRoot,
     referenceEl = root.querySelector('.reference'); // eslint-disable-line sort-vars

    await elementUpdated(el);

    await expect(intersectionStub).to.have.been.calledOnce;
    await expect(intersectionStub).to.have.been.calledWithNew;
    await expect(intersectionStub).to.have.been.calledWith(sinon.match.func, sinon.match.object);
    await expect(observeStub).to.have.been.calledOnce;
    await expect(observeStub).to.have.been.calledWith(referenceEl);
  });

  it('auro-backtotop custom element defines only inline element with `inline` attribute', async () => {
    const el = await fixture(html`
    <auro-backtotop inline></auro-backtotop>
    `),
    root = el.shadowRoot,
    referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
    triggerEl = root.querySelector('.trigger');

    await elementUpdated(el);

    await expect(referenceEl, 'Expect reference element to not exist').to.not.exist;
    await expect(triggerEl, 'Expect trigger element to exist').to.exist;
    await expect(triggerEl.classList.contains('trigger--inline')).to.be.true;
    await expect(triggerEl.classList.contains('trigger--visible')).to.be.true;
    await expect(intersectionStub).to.not.have.been.called;
  });
});
