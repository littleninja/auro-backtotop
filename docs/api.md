# auro-backtotop

auro-backtotop provides helps users quickly return to page top.

## Properties

| Property        | Attribute       | Type         | Default      | Description                                      |
|-----------------|-----------------|--------------|--------------|--------------------------------------------------|
| `arialabel`     | `arialabel`     | `String`     |              | Customize `title` element of the default icon, viewed on tooltip and read by screenreaders |
| `inline`        | `inline`        | `Boolean`    | false        | Render the trigger inline, will always be visible |
| `rootmargintop` | `rootmargintop` | `String`     |              | Adjust root margin CSS pixel value. A negative value will show the trigger early and a positive value will delay showing the trigger. To learn more, see [`IntersectionObserver.rootMargin` docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin). |
| `svg`           |                 | `any \| any` | "firstChild" |                                                  |
| `visible`       | `visible`       | `Boolean`    | false        | Indicates trigger visibility                     |

## Methods

| Method      | Type       |
|-------------|------------|
| `scrollTop` | `(): void` |

## Slots

| Name | Description               |
|------|---------------------------|
|      | Customize trigger content |
