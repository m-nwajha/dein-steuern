import { ReactNode } from 'react';

export type SoArbeitenItem = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
};

export type WasWirItem = {
    title: string;
    items: string[];
    description: string;
    theme: 'light' | 'dark';
    side: 'left' | 'right';
};

export type LeistungItem = {
    id: number;
    title: string;
};

export type ServicePageData = {
    heading: {
        title: string;
        description: ReactNode;
    };
    soArbeiten?: {
        title: string;
        items: SoArbeitenItem[];
    };
    wasWir?: {
        list: WasWirItem[];
    };
    starten: {
        title: string;
        description: string;
        button: {
            label: string;
            href: string;
        };
    };
    leistungen: {
        title: string;
        badge: string;
        description: string;
        items: LeistungItem[];
    };
};