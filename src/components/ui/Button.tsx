'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { CN } from '@/utils/className';

type ButtonVariant = 'outline' | 'solid';

type BaseProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
    icon?: ReactNode;
    isArrow?: boolean;
    disabled?: boolean;
};

type ButtonAsButton = BaseProps & {
    as?: 'button';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    href?: never;
};

type ButtonAsLink = BaseProps & {
    as: 'link';
    href: string;
    onClick?: never;
    type?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
    outline: `
        bg-background
        border border-[#206D6E]
        text-[#138082]
        hover:-translate-y-1
    `,
    solid: `
    bg-accent
    text-background
    hover:bg-primary hover:text-[#3A3939]
    [&:hover_.arrow]:rotate-90
    [filter:drop-shadow(0px_20px_15px_#13808299)]
    hover:[filter:drop-shadow(0px_20px_15px_#FEDE6F99)]
`,
};

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'solid',
    className,
    icon,
    isArrow = false,
    disabled,
    ...props
}) => {
    const classes = CN(
        'inline-flex items-center justify-center gap-2',
        'h-[50px] px-6',
        'rounded-lg',
        'font-nunito font-normal text-[1.1rem]',
        'leading-none tracking-normal text-center',
        'transition-all duration-300',
        'cursor-pointer',
        'relative',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANT_STYLES[variant],
        className
    );

    const iconEl = icon && (
        <span className={CN(
            'transition-transform duration-300',
            isArrow && 'arrow'
        )}>
            {icon}
        </span>
    );

    if (props.as === 'link') {
        return (
            <Link href={props.href} className={classes}>
                {children}
                {iconEl}
            </Link>
        );
    }

    return (
        <button
            type={props.type ?? 'button'}
            onClick={props.onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
            {iconEl}
        </button>
    );
};