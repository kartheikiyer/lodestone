document.addEventListener("nav", () => {
  const article = document.querySelector(".center-body, article")
  if (!article) return
  if (document.body.dataset.slug === "index") return

  const headings = article.querySelectorAll("h2")

  headings.forEach((heading) => {
    const content: Element[] = []
    let sibling = heading.nextElementSibling
    while (sibling && sibling.tagName !== "H2") {
      content.push(sibling)
      sibling = sibling.nextElementSibling
    }

    const details = document.createElement("details")
    const summary = document.createElement("summary")
    summary.innerHTML = heading.innerHTML
    summary.className = heading.className

    const wrapper = document.createElement("div")
    wrapper.className = "collapsible-content"
    content.forEach((el) => wrapper.appendChild(el))

    details.appendChild(summary)
    details.appendChild(wrapper)
    heading.replaceWith(details)

    // animate open/close
    summary.addEventListener("click", (e) => {
      e.preventDefault()

      if (details.open) {
        // closing
        const height = wrapper.scrollHeight
        wrapper.style.height = `${height}px`
        wrapper.offsetHeight // force reflow
        wrapper.style.height = "0px"
        wrapper.style.opacity = "0"

        wrapper.addEventListener("transitionend", () => {
          details.open = false
          wrapper.style.height = ""
          wrapper.style.opacity = ""
        }, { once: true })
      } else {
        // opening
        details.open = true
        const height = wrapper.scrollHeight
        wrapper.style.height = "0px"
        wrapper.style.opacity = "0"
        wrapper.offsetHeight // force reflow
        wrapper.style.height = `${height}px`
        wrapper.style.opacity = "1"

        wrapper.addEventListener("transitionend", () => {
          wrapper.style.height = ""
          wrapper.style.opacity = ""
        }, { once: true })
      }
    })
  })
})