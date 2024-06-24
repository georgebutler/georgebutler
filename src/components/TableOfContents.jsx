const TableOfContents = ({ headings }) => {
    return (
        <nav>
            <ul className="text-nowrap text-sm p-4 list-decimal list-inside rounded bg-[#0A0A0A]">
                {headings.map((heading) => (
                    <li>
                        <a className="text-[#3498db] hover:underline font-bold" href={`#${heading.slug}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TableOfContents;