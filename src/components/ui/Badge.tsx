import { FC, ReactNode } from 'react';
import { CN } from '@/utils/className';

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export const Badge: FC<BadgeProps> = ({ children, className }) => {
    return (
        <span
            className={CN(
                'inline-flex items-center justify-center',
                'h-[26px] px-3',
                'rounded-lg',
                'bg-[#DAF0BB]',
                'font-inter font-bold text-[12px]',
                'leading-none tracking-normal text-center',
                'text-accent',
                className
            )}
        >
            {children}
        </span>
    );
};