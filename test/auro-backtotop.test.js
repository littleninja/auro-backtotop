import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-backtotop.js';

/* eslint-disable no-magic-numbers */

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

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `);

    await expect(el).to.be.accessible();
  });

  it('defines fixed trigger and Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `),
     root = el.shadowRoot,
     iconEl = root.querySelector('.icon'), // eslint-disable-line sort-vars
     referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
     triggerEl = root.querySelector('.trigger');

    await elementUpdated(el);

    await expect(iconEl, 'Expect icon element to exist').to.exist;
    await expect(iconEl.querySelector('title').textContent).to.match(/back to top/iu);
    await expect(referenceEl, 'Expect reference element to exist').to.exist;
    await expect(triggerEl, 'Expect trigger element to exist').to.exist;
    await expect(triggerEl.classList.contains('trigger--inline')).to.be.false;
    await expect(triggerEl.classList.contains('trigger--visible')).to.be.false;
    await expect(triggerEl.textContent).to.match(/back to top/iu);
  });

  it('sets up an Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `),
     root = el.shadowRoot,
     referenceEl = root.querySelector('.reference'); // eslint-disable-line sort-vars

    await elementUpdated(el);

    await expect(intersectionStub).to.have.been.calledOnce;
    await expect(intersectionStub).to.have.been.calledWithNew;
    await expect(intersectionStub).to.have.been.calledWith(sinon.match.func, sinon.match({
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [
        0.0,
        1.0
      ],
    }));
    await expect(observeStub).to.have.been.calledOnce;
    await expect(observeStub).to.have.been.calledWith(referenceEl);
  });

  it('scrolls to top on trigger click', async () => {
    sandbox.spy(window, 'scrollTo');
    const el = await fixture(html`
      <auro-backtotop></auro-backtotop>
    `),
     triggerEl = el.shadowRoot.querySelector('.trigger');

     await elementUpdated(el);

     await triggerEl.click();
     await expect(window.scrollTo).to.have.been.calledOnce;
     await expect(window.scrollTo).to.have.been.calledWith(0, 0);
  });

  describe('properties', () => {
    it('defines only inline element with `inline` property', async () => {
      const el = await fixture(html`
      <auro-backtotop inline></auro-backtotop>
      `),
      root = el.shadowRoot,
      iconEl = root.querySelector('.icon'), // eslint-disable-line sort-vars
      referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
      triggerEl = root.querySelector('.trigger');

      await elementUpdated(el);

      await expect(iconEl, 'Expect icon element to exist').to.exist;
      await expect(iconEl.querySelector('title').textContent).to.match(/back to top/iu);
      await expect(referenceEl, 'Expect reference element to not exist').to.not.exist;
      await expect(triggerEl, 'Expect trigger element to exist').to.exist;
      await expect(triggerEl.classList.contains('trigger--inline')).to.be.true;
      await expect(triggerEl.classList.contains('trigger--visible')).to.be.true;
      await expect(triggerEl.textContent).to.match(/back to top/iu);
      await expect(intersectionStub).to.not.have.been.called;
    });

    it('customizes rootMargin to offset where intersection occurs with `rootmargintop` property', async () => {
      const el = await fixture(html`
        <auro-backtotop rootmargintop="20px"></auro-backtotop>
      `);

      await elementUpdated(el);

      await expect(intersectionStub).to.have.been.calledWith(sinon.match.func, sinon.match({
        root: null,
        rootMargin: '20px 0px 0px 0px',
        threshold: [
          0.0,
          1.0
        ],
      }));
    });

    it('customizes ARIA label with `aria-label` property', async () => {
      const el = await fixture(html`
        <auro-backtotop arialabel="hop to top"></auro-backtotop>
      `),
      root = el.shadowRoot,
      iconEl = root.querySelector('.icon'); // eslint-disable-line sort-vars

      await elementUpdated(el);

      await expect(iconEl.querySelector('title').textContent).to.match(/hop to top/iu);
    });
  });
});

/* eslint-enable no-magic-numbers */