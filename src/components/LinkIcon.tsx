import React from 'react';

export default function LinkIcon({ size = '1rem', children }: { size?: string, children: React.ReactNode }) {
    return (
        <a href="https://github.com" target="_blank" className="inline-block">
            {children}
        </a>
    );
}