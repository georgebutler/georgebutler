const base = "prose";
const heading = "prose-headings:text-white prose-h1:text-4xl prose-h1:font-bold";
const paragraph = "prose-p:text-justify prose-p:text-white";
const link = "prose-a:font-bold prose-a:text-[#3498db] prose-a:no-underline hover:prose-a:underline";
const strong = "prose-strong:text-white";
const image = "prose-img:rounded-xl";
const list = "prose-li:text-white";
const code = "prose-code:text-white";
const td = "prose-td:text-white";

const Article = ({ children }) => (
  <article className={`${base} ${heading} ${paragraph} ${link} ${strong} ${image} ${list} ${code} ${td}`}>
    {children}
  </article>
);

export default Article;