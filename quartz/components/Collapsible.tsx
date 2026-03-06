import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/collapsible.inline"

export default (() => {
  const Collapsible: QuartzComponent = () => null  // no visible HTML, just the script

  Collapsible.afterDOMLoaded = script
  Collapsible.css = `
      details summary {
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 700;
        margin: 1rem 0 0.5rem;
        list-style: none;
      }
      details summary::-webkit-details-marker {
        display: none;
      }
      details summary::before {
        content: "▸";
        display: inline-block;
        margin-right: 0.4rem;
        transition: transform 0.25s ease;
        color: var(--secondary);
      }
      details[open] summary::before {
        transform: rotate(90deg);
      }
      .collapsible-content {
        overflow: hidden;
        transition: height 0.3s ease, opacity 0.3s ease;
      }
    `

  return Collapsible
}) satisfies QuartzComponentConstructor