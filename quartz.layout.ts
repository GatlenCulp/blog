import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { FileTrieNode } from "./quartz/util/fileTrie"
import type { ContentDetails } from "./quartz/plugins/emitters/contentIndex"
import { Options } from "./quartz/components/Explorer"

// TODO: Steal some from Alex Turner :)
// https://github.com/alexander-turner/TurnTrout.com/tree/main

// Explorer sort function
const explorerSortFunction = (a: FileTrieNode<ContentDetails>, b: FileTrieNode<ContentDetails>) => {
  const emojis =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
  const a_dname = a.displayName.replace(emojis, "").trim()
  const b_dname = b.displayName.replace(emojis, "").trim()
  // Sort order: folders first, then files. Sort folders and files alphabetically
  if (/^.*Home$/.test(a_dname)) {
    return -1
  }
  if (/^.*Home$/.test(b_dname)) {
    return 1
  }
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
    // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
    return a_dname.localeCompare(b_dname, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  if (!a.isFolder && b.isFolder) {
    return 1
  }
  return -1
}

// Explorer Config
const explorerConfig: Options = {
  title: "Content",
  sortFn: explorerSortFunction,
  folderDefaultState: "open",
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "GatlenCulp/blog",
        repoId: "R_kgDOOJAVtQ",
        category: "Announcements",
        categoryId: "DIC_kwDOOJAVtc4Cor00",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      "🐙 Source": "https://github.com/GatlenCulp/blog",
      "🌐 Personal Website": "https://gatlen.me",
      "📄 Medium": "https://medium.com/@gatlenculp",
      "🛜 RSS Feed": "http://gatlen.blog/index.xml",
      "📚 GoodReads": "https://www.goodreads.com/user/show/75252425-gatlen",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      rootName: "🏠",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
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
      ],
    }),
    Component.Explorer(explorerConfig),
  ],
  right: [
    Component.Graph(),
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
    // Component.Explorer(),
    // Below was borrowed from: https://github.com/bfahrenfort/quartz/blob/v4/quartz.layout.ts
    Component.DesktopOnly(Component.Explorer(explorerConfig)),
    //Component.TableOfContents(),
  ],
  right: [],
}
