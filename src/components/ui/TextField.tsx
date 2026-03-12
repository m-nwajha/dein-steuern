'use client';

import { FC } from 'react';
import { Typography } from './Typography';
import { Box } from './Box';

type TextFieldProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: 'text' | 'email' | 'password' | 'tel' | 'number';
    name?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    error?: string;
    multiline?: boolean;
    rows?: number;
};

export const TextField: FC<TextFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    name,
    required,
    disabled,
    className,
    error,
    multiline = false,
    rows = 4,
}) => {
    const sharedClassName = `
        w-full px-3 py-2
        bg-background
        border border-[#94A3B8]
        border-[0.5px]
        rounded-lg
        outline-none
        transition-colors
        placeholder:text-[#94A3B8]
        focus:border-accent
        disabled:opacity-50 disabled:cursor-not-allowed
        ${error ? 'border-red-500' : ''}
        ${className ?? ''}
    `;

    return (
        <Box display='flex' direction='col' gap={2} className="w-full">
            {label && (
                <label htmlFor={`field-${name}`} className="text-[14px] font-poppins font-normal leading-none text-black">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {multiline ? (
                <textarea
                    id={`field-${name}`}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    rows={rows}
                    className={`${sharedClassName} resize-none`}
                />
            ) : (
                <input
                    id={`field-${name}`}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    className={`${sharedClassName} h-11`}
                />
            )}

            {error && (
                <Typography variant="span" size="body2" color="primary" className="text-red-500">
                    {error}
                </Typography>
            )}
        </Box>
    );
};