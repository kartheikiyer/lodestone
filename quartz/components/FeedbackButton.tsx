import { QuartzComponent, QuartzComponentProps } from "./types"

const FeedbackButton: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <a
      href="https://forms.gle/a6wr1SU7pFZANauu9"
      target="_blank"
      rel="noopener noreferrer"
      id="feedback-button"
    >
      Something wrong? &gt;&gt;&gt; feedback
    </a>
  )
}

FeedbackButton.css = `
#feedback-button {
  display: block;
  margin: 0.1rem auto 0.5rem auto;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1.5px solid var(--gray);
  border-radius: 6px;
  color: var(--gray);
  font-size: 0.85rem;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

#feedback-button:hover {
  border-color: var(--secondary);
  color: var(--secondary);
}
`

export default FeedbackButton