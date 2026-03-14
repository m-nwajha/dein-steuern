import { PATHS } from './paths';

export const LEISTUNGEN = {
    badge: 'Was wir für Sie übernehmen',
    title: 'Unsere Leistungen',
    description: 'Von der Buchführung bis zur strategischen Beratung – wir kümmern uns um Ihre Zahlen, damit Sie sich auf Ihr Unternehmen konzentrieren können.',
    items: [
        {
            id: 1,
            icon: '/assets/images/buchführung-icon.svg',
            title: 'Buchführung',
            description: 'Ordnung, Transparenz und strukturierte Finanzübersicht',
            href: PATHS.buchfuhrung,
        },
        {
            id: 2,
            icon: '/assets/images/firmenberatung-icon.svg',
            title: 'Firmenberatung',
            description: 'Individuelle Lösungen für nachhaltiges Wachstum',
            href: PATHS.firmenberatung,
        },
        {
            id: 3,
            icon: '/assets/images/löhne-und-gehälter-icon.svg',
            title: 'Löhne und Gehälter',
            description: 'Präzise Abrechnung für zufriedene Mitarbeiter',
            href: PATHS.lohneUndGehalter,
        }
    ]
};