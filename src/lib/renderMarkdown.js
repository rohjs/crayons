import remark from 'remark'
import remarkHtml from 'remark-html'

const renderer = remark()
  .use(remarkHtml)

const renderMarkdown = (source) => {
  return renderer.processSync(source).toString()
}

export default renderMarkdown