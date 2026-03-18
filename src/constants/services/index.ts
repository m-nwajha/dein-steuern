import { BUCHFUEHRUNG_PAGE } from "./buchfuehrung";
import { EINKOMMENSTEUER_PAGE } from './einkommensteuer';
import { FIRMENBERATUNG_PAGE } from './firmenberatung';
import { LOEHNE_UND_GEHAELTER_PAGE } from "./loehneUndGehaelter";
import { UMSATZSTEUER_PAGE } from './umsatzsteuer';
import { GEWERBESTEUER_PAGE } from './gewerbesteuer';
import { KOERPERSCHAFTSSTEUER_PAGE } from './koerperschaftssteuer';
    
export const STARTEN_SIE_JETZT_DURCH = {
    title: 'Starten Sie jetzt durch',
    description: 'Sichern Sie sich eine persönliche und unverbindliche Beratung.',
    button: {
        label: 'Kostenlose Beratung anfragen',
        href: '#contact',
    },
};

export const ALL_SERVICES = [
    { id: 1, title: 'Buchführung', href: '/services/buchfuehrung' },
    { id: 2, title: 'Löhne und Gehälter', href: '/services/loehne-und-gehaelter' },
    { id: 3, title: 'Firmenberatung', href: '/services/firmenberatung' },
    { id: 4, title: 'Einkommensteuer', href: '/services/einkommensteuer' },
    { id: 5, title: 'Umsatzsteuer', href: '/services/umsatzsteuer' },
    { id: 6, title: 'Gewerbesteuer', href: '/services/gewerbesteuer' },
    { id: 7, title: 'Körperschaftsteuer', href: '/services/koerperschaftssteuer' },
];

export const UNSERE_LEISTUNGEN = {
    title: 'Unsere Leistungen',
    badge: 'Was wir für Sie übernehmen',
    description: 'Von der Buchführung bis zur strategischen Beratung – wir kümmern uns um Ihre Zahlen, damit Sie sich auf Ihr Unternehmen konzentrieren können.',
    items: ALL_SERVICES,
};

export const SERVICES_PAGES = {
    'buchfuehrung': { ...BUCHFUEHRUNG_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'loehne-und-gehaelter': { ...LOEHNE_UND_GEHAELTER_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'firmenberatung': { ...FIRMENBERATUNG_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'einkommensteuer': { ...EINKOMMENSTEUER_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'umsatzsteuer': { ...UMSATZSTEUER_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'gewerbesteuer': { ...GEWERBESTEUER_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
    'koerperschaftssteuer': { ...KOERPERSCHAFTSSTEUER_PAGE, starten: STARTEN_SIE_JETZT_DURCH, leistungen: UNSERE_LEISTUNGEN },
}