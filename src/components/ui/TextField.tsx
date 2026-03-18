'use client';

import { FC, useState } from 'react';
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
    const [showPassword, setShowPassword] = useState(false);

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

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <Box display='flex' direction='col' gap={2} className="w-full">
            {label && (
                <label htmlFor={`field-${name}`} className="text-[14px] font-poppins font-normal leading-none text-black">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative w-full">
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
                    <>
                        <input
                            id={`field-${name}`}
                            name={name}
                            type={inputType}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            disabled={disabled}
                            required={required}
                            className={`${sharedClassName} h-11 ${type === 'password' ? 'pr-10' : ''}`}
                        />
                        {type === 'password' && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent focus:outline-none"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        )}
                    </>
                )}
            </div>

            {error && (
                <Typography variant="span" size="body2" color="primary" className="text-red-500">
                    {error}
                </Typography>
            )}
        </Box>
    );
};