import React from 'react';

export default function Icon({ size = '1rem', children, ...props }: { size?: string, children: React.ReactNode, [key: string]: any }) {
    return (
        <div style={{ height: size, width: size }} {...props}>
            {children}
        </div>
    );
}