const base = "prose";
const heading = "prose-headings:text-white prose-h1:text-4xl prose-h1:font-bold";
const paragraphClasses = "prose-p:text-justify prose-p:text-white";
const linkClasses = "prose-a:font-bold prose-a:text-[#3498db] prose-a:no-underline hover:prose-a:underline";
const strongClasses = "prose-strong:text-white";
const imageClasses = "prose-img:rounded-xl";

const Article = ({ children }) => (
  <article className={`${base} ${heading} ${paragraphClasses} ${linkClasses} ${strongClasses} ${imageClasses}`}>
    {children}
  </article>
);

export default Article;