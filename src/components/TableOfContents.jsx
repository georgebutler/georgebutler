const TableOfContents = ({ headings }) => {
    return (
        <nav>
            <ul className="text-nowrap px-4 py-4 list-none rounded bg-[#0A0A0A]">
                {headings.map((heading) => (
                    <li key={heading.slug} className={heading.depth > 1 ? `px-${heading.depth} text-sm` : ''}>
                        <a
                            className="text-[#3498db] hover:underline font-bold"
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
