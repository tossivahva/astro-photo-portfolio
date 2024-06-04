import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = {
    children: React.ReactNode,
    size?: 'small' | 'medium' | 'large',
    className?: string,
}
const Button = ({ children, className, size = 'medium' }: ButtonProps) => {
    const classSize = {
        small: 'text-xs px-3 py-2',
        medium: 'text-sm px-5 py-3',
        large: 'text-lg px-7 py-4',
    };
    
    return (
        <button
            className={cn('text-textBlack bg-white rounded-full',
                classSize[size], className)}
        >
            {children}
        </button>
    );
};

export default Button;
