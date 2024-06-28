const TableOfContents = ({ headings }) => {
    return (
        <nav className="rounded px-4 py-4 bg-stone-950 border-2 border-stone-900">
            <h2 className="text-lg font-bold mb-2">Table of Contents</h2>
            <ul className="text-nowrap text-sm list-none">
                {headings.map((heading) => (
                    <li key={heading.slug} className={heading.depth > 1 ? `px-${heading.depth}` : ''}>
                        <a
                            className="text-[#3498db] hover:underline"
                            href={`#${heading.slug}`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TableOfContents;
