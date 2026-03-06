import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  repoUrl: string        // e.g. "https://github.com/you/your-wiki"
  branch: string         // e.g. "main" or "v4"
  contentFolder: string  // e.g. "content"
}

const defaultOptions: Options = {
  repoUrl: "https://github.com/you/your-wiki",
  branch: "v4",
  contentFolder: "content",
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const EditLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData.slug!
    const editUrl = `${opts.repoUrl}/edit/${opts.branch}/${opts.contentFolder}/${slug}.md`
    const fdbkUrl = `https://forms.gle/a6wr1SU7pFZANauu9`
        
    return (
      <p class="edit-link-container">
        {'>>>'} Something missing or wrong? Suggest an edit on {" "}
        <a href={editUrl} class="edit-link" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        , or provide {" "}
        <a href={fdbkUrl} class="edit-link" target="_blank" rel="noopener noreferrer">
          feedback 🌱 
        </a>
        .
      </p>
    )
  }

  EditLink.css = `
    .edit-link {
      font-size: 1.0rem;
      opacity: 0.7;
      display: inline-block;
      margin-top: 1rem;
      color: #a53860ff;
    }
    .edit-link:hover {
      opacity: 1;
      text-decoration: underline;
    }
  `

  return EditLink
}) satisfies QuartzComponentConstructor