import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import path from "path"
import fs from "fs"
import { simplifySlug, transformInternalLink } from "../../util/path"


// Build a set of all valid slugs from the content directory
function getAllSlugs(contentDir: string): Set<string> {
  const slugs = new Set<string>()

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name))
      } else if (entry.name.endsWith(".md")) {
        const relative = path.relative(contentDir, path.join(dir, entry.name))
        const slug = relative.replace(/\.md$/, "").replace(/\/index$/, "")
        slugs.add(simplifySlug(slug as any))
      }
    }
  }

  walk(contentDir)
  return slugs
}

export const RedLinks: QuartzTransformerPlugin = () => {
  let knownSlugs: Set<string> | null = null

  return {
    name: "RedLinks",
    htmlPlugins() {
      return [
        () => (tree, file) => {
          // lazily build slug set once
          if (!knownSlugs) {
            const contentDir = path.join(process.cwd(), "content")
            knownSlugs = getAllSlugs(contentDir)
          }

          visit(tree, "element", (node) => {
              if (node.tagName !== "a") return
              const classes = (node.properties?.className as string[]) ?? []
              if (!classes.includes("internal")) return
            
              const href = (node.properties?.href as string) ?? ""
              const target = decodeURIComponent(href.split("#")[0])
              const simplified = simplifySlug(target as any)
            
              if (simplified && !knownSlugs!.has(simplified)) {
                classes.push("nonexistent")
                node.properties!.className = classes
              }
            })
        },
      ]
    },
  }
}