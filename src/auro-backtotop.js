// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
/* eslint-disable no-magic-numbers */
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import arrowUp from "@alaskaairux/icons/dist/icons/interface/arrow-up_es6";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-backtotop provides users a way to return to page top.
 *
 */

class AuroBacktotop extends LitElement {
  constructor() {
    super();
    this.intersectionRatios = [];
    this.visible = false;
    const dom = new DOMParser().parseFromString(arrowUp.svg, 'text/html');

    this.svg = dom.body.firstChild;
  }

  static get properties() {
    return {
      intersectionRatios: { type: Array },
      observer: { attribute: false },
      visible: { type: Boolean },
      svg: { type: Node },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  scrollTop() {
    window.scrollTo(window.scrollX, 0);
  }

  firstUpdated() {
    if (!IntersectionObserver) {
      this.visible = true;

      return;
    }

    const observer = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.intersectionRatio < 1.0);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: [
        0.0,
        1.0
      ],
    });

    observer.observe(this.renderRoot.querySelector('.reference'));
  }

  render() {
    return html`
      <span class="reference"></span>
      <button @click=${this.scrollTop} class=${classMap({ icon: true,
visible: this.visible })}>
        ${this.svg}
      </button>
    `;
  }
}

/* istanbul ignore else */
if (!customElements.get("auro-backtotop")) {
  customElements.define("auro-backtotop", AuroBacktotop);
}
/* eslint-enable no-magic-numbers */
