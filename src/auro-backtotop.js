// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
/* eslint-disable no-magic-numbers, no-underscore-dangle */
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import arrowUp from "@alaskaairux/icons/dist/icons/interface/arrow-up_es6";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

const
  DEFAULT_MESSAGE = 'back to top',
  DEFAULT_ROOT_MARGIN_TOP = '0px';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-backtotop provides helps users quickly return to page top.
 *
 * @attr {String}   arialabel - Customize `title` element of the default icon, viewed on tooltip and read by screenreaders
 * @attr {Boolean}  inline - Render the trigger inline, will always be visible
 * @attr {String}   rootmargintop - Adjust root margin CSS pixel value. A negative value will show the trigger early and a positive value will delay showing the trigger. To learn more, see [`IntersectionObserver.rootMargin` docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).
 * @attr {Boolean}  visible - Indicates trigger visibility
 *
 * @slot - Customize trigger content
 */

class AuroBacktotop extends LitElement {

  static get properties() {
    return {
      arialabel: {
        type: String,
      },
      inline: {
        type: Boolean,
      },
      rootmargintop: {
        type: String,
      },
      visible: {
        type: Boolean,
      }
    };
  }

  get arialabel() {
    return this._arialabel;
  }

  set arialabel(newValue) {
    this._arialabel = newValue;
    this.svg.querySelector('title').textContent = newValue;
  }

  constructor() {
    super();

    this._arialabel = DEFAULT_MESSAGE;

    this.inline = false;
    this.visible = false;

    const dom = new DOMParser().parseFromString(arrowUp.svg, 'text/html'),
     svg = dom.body.firstChild;

    svg.classList.add('icon');
    svg.querySelector('title').textContent = this.arialabel;

    this.svg = svg;
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
    this.visible = !IntersectionObserver || this.inline;
    if (!IntersectionObserver || this.inline) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.intersectionRatio < 1.0);
    }, {
      root: null,
      rootMargin: `${this.rootmargintop || DEFAULT_ROOT_MARGIN_TOP} 0px 0px 0px`,
      threshold: [
        0.0,
        1.0
      ],
    });

    observer.observe(this.shadowRoot.querySelector('.reference'));
  }

  render() {

    const classes = {
      'trigger': true,
      'trigger--visible': this.visible,
      'trigger--inline': this.inline,
    };

    return html`
      ${this.inline ? html`` : html`<span class="reference"></span>`}
      <button @click=${this.scrollTop} class=${classMap(classes)}>
        <slot>
          <span class="message">${DEFAULT_MESSAGE}</span>${this.svg}
        </slot>
      </button>
    `;
  }
}

/* istanbul ignore else */
if (!customElements.get("auro-backtotop")) {
  customElements.define("auro-backtotop", AuroBacktotop);
}
/* eslint-enable no-magic-numbers, no-underscore-dangle */
