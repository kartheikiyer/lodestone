import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
      Component.Comments({
        provider: 'giscus',
        options: {
          // from data-repo
          repo: 'kartheikiyer/lodestone',
          // from data-repo-id
          repoId: 'R_kgDORgRcNw',
          // from data-category
          category: 'Announcements',
          // from data-category-id
          categoryId: 'DIC_kwDORgRcN84C31xB',
          // from data-lang
          lang: 'en'
        }
      }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/kartheikiyer/lodestone",
      "UniverseTBD": "https://universetbd.org/",
      "Pathfinder": "https://v2.pfdr.app",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.EditLink({
        repoUrl: "https://github.com/kartheikiyer/lodestone",
        branch: "v4",
        contentFolder: "content",
      }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.FeedbackButton,
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
