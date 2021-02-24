/* eslint-disable no-underscore-dangle */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import arrowUp from "@alaskaairux/icons/dist/icons/interface/arrow-up_es6";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

const
  DEFAULT_MESSAGE = 'back to top',
  DEFAULT_ROOT_MARGIN_TOP = '0px',
  HIDDEN_INTERSECTION_RATIO = 0.0,
  VISIBLE_INTERSECTION_RATIO = 1.0,
  WINDOW_SCROLL_TOP = 0;

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
    window.scrollTo(window.scrollX, WINDOW_SCROLL_TOP);
  }

  firstUpdated() {
    this.visible = !IntersectionObserver || this.inline;
    if (!IntersectionObserver || this.inline) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.intersectionRatio < VISIBLE_INTERSECTION_RATIO);
    }, {
      root: null,
      rootMargin: `${this.rootmargintop || DEFAULT_ROOT_MARGIN_TOP} 0px 0px 0px`,
      threshold: [
        HIDDEN_INTERSECTION_RATIO,
        VISIBLE_INTERSECTION_RATIO
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
        <div class="message"><slot>${DEFAULT_MESSAGE}</slot></div>
        ${this.svg}
      </button>
    `;
  }
}

/* istanbul ignore else */
if (!customElements.get("auro-backtotop")) {
  customElements.define("auro-backtotop", AuroBacktotop);
}
