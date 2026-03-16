import { ServicePageData } from '@/@types/ServicePage';

export const FIRMENBERATUNG_PAGE: ServicePageData = {
    heading: {
        title: 'Firmenberatung',
        description: 'Wir unterstützen Unternehmen, Selbstständige und Gründer bei der Organisation ihrer kaufmännischen Abläufe und bei allen Fragen rund um Buchführung, Struktur und betriebliche Zahlen. Gemeinsam schaffen wir transparente Prozesse, eine klare Übersicht über Einnahmen und Ausgaben sowie eine solide Grundlage für unternehmerische Entscheidungen. Dabei begleiten wir Sie im Alltag Ihres Unternehmens, bereiten Unterlagen strukturiert auf und sorgen für effiziente Abläufe im Austausch mit den zuständigen Stellen.',
    },
    soArbeiten: {
        title: 'Unser Ablauf in 3 Schritten',
        items: [
            {
                id: 1,
                title: 'Analyse',
                subtitle: 'Analyse 01',
                description: 'Wir besprechen Ihre Ziele und erkennen mögliche Optimierungspotenziale.',
            },
            {
                id: 2,
                title: 'Strukturierung',
                subtitle: 'Strukturierung 02',
                description: 'Gemeinsam entwickeln wir übersichtliche Prozesse für mehr Ordnung in Ihrem Unternehmen.',
            },
            {
                id: 3,
                title: 'Umsetzung & Begleitung',
                subtitle: 'Umsetzung & Begleitung 03',
                description: 'Wir begleiten Sie bei wichtigen Entscheidungen und sorgen für effiziente Abläufe.',
            },
        ],
    },
    wasWir: {
        list: [
            {
                title: 'Was wir für Sie übernehmen',
                items: [
                    'Beratung für Unternehmen, Selbstständige und Gründer',
                    'Unterstützung bei der Organisation kaufmännischer Abläufe',
                    'Strukturierung von Buchführung und Unternehmensprozessen',
                    'Analyse von Einnahmen, Ausgaben und betrieblichen Zahlen',
                    'Vorbereitung und Strukturierung wichtiger Unterlagen',
                    'Unterstützung im Austausch mit Behörden und Institutionen',
                ],
                description: 'Wir helfen Ihnen, klare Strukturen und effiziente Abläufe in Ihrem Unternehmen zu schaffen.',
                theme: 'light',
                side: 'left',
            },
            {
                title: 'Transparenz für Ihr Unternehmen',
                items: [
                    'Klare Übersicht über Ihre betrieblichen Zahlen',
                    'Unterstützung bei wirtschaftlichen Entscheidungen',
                    'Optimierung interner Abläufe und Prozesse',
                    'Strukturierte Planung Ihrer Unternehmensentwicklung',
                    'Persönliche Beratung und individuelle Lösungen',
                ],
                description: 'So schaffen Sie eine stabile Grundlage für nachhaltiges Wachstum und fundierte unternehmerische Entscheidungen.',
                theme: 'dark',
                side: 'right',
            },
        ],
    },
    starten: {
        title: 'Starten Sie jetzt durch',
        description: 'Sichern Sie sich eine persönliche und unverbindliche Beratung.',
        button: {
            label: 'Kostenlose Beratung anfragen',
            href: '#',
        },
    },
    leistungen: {
        title: 'Unsere Leistungen',
        badge: 'Was wir für Sie übernehmen',
        description: 'Von der Buchführung bis zur strategischen Beratung – wir kümmern uns um Ihre Zahlen, damit Sie sich auf Ihr Unternehmen konzentrieren können.',
        items: [
            { id: 1, title: 'Gründungsberatung' },
            { id: 2, title: 'Firmenberatung' },
            { id: 3, title: 'Löhne und Gehälter' },
            { id: 4, title: 'Lohnsteuer' },
            { id: 5, title: 'Firmenbegleitung' },
        ],
    },
};