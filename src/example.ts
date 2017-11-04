import markdownItMermaidPro = require('markdown-it-mermaid-pro');
import { Markdown2HtmlPro } from './markdown2htmlPro';
const taskList: string = `#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
    `;
const mermaid: string = `
\`\`\`mermaid
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
    `;
const mixed: string = `
#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

\`\`\`mermaid
graph LR;  
　　A-->B;    
　　A-->C;  
　　B-->D;  
　　C-->D;  
\`\`\`
`;
(async (markdownContent: string) => {
  const markdown2htmlPro = new Markdown2HtmlPro();
  const html: string = await markdown2htmlPro.markdown2html(markdownContent);

  console.log('html = ', html);
  return html;
})(taskList);
(async (markdownContent: string) => {
  const markdown2htmlPro = new Markdown2HtmlPro();
  const html: string = await markdown2htmlPro.markdown2html(markdownContent);

  console.log('html = ', html);
  return html;
})(mermaid);
(async (markdownContent: string) => {
  const markdown2htmlPro = new Markdown2HtmlPro();
  const html: string = await markdown2htmlPro.markdown2html(markdownContent);

  console.log('html = ', html);
  return html;
})(mixed);
