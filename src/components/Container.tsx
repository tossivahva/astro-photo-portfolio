import React from 'react';
import { cn } from '../utils/cn.ts';

type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}
const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn('container mx-auto w-full', className)}>
            {children}
        </div>
    );
};

export default Container;
