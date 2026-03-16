import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const EINKOMMENSTEUER_PAGE: ServicePageData = {
    heading: {
        title: 'Einkommensteuer',
        description: (<>Wir unterstützen Privatpersonen, Selbstständige und Unternehmer bei der steuerlichen Vorbereitung ihrer Unterlagen rund um die Einkommensteuer. Durch eine sorgfältige Organisation von Belegen, Einnahmen und Ausgaben schaffen wir eine klare und nachvollziehbare Übersicht über Ihre finanziellen Informationen. Dadurch liegen alle relevanten Daten vollständig und übersichtlich vor und können effizient weiterverarbeitet werden. <Br /> Gerade im Bereich der Einkommensteuer ist eine gute Struktur und Ordnung der Unterlagen besonders wichtig. Wir helfen Ihnen dabei, Ihre Dokumente systematisch zusammenzustellen und alle relevanten Informationen übersichtlich aufzubereiten, So behalten Sie den Überblick über Ihre Einnahmen, Ausgaben und steuerlich relevanten Angaben.<Br /> Unser Ziel ist es, Ihnen den organisatorischen Aufwand zu erleichtern und einen reibungslosen Ablauf bei der Vorbereitung Ihrer steuerlichen Unterlagen zu gewährleisten. Durch klare Prozesse und eine sorgfältige Aufbereitung Ihrer Daten schaffen wir eine zuverlässige Grundlage für die weitere Bearbeitung Ihrer Einkommensteuerangelegenheiten.<Br /> Mit unserer Unterstützung sparen Sie Zeit, vermeiden Unklarheiten und stellen sicher, dass alle wichtigen Informationen vollständig und strukturiert vorliegen, damit steuerliche Angelegenheiten effizient und transparent bearbeitet werden.</>),
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