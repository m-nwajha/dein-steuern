import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const KOERPERSCHAFTSSTEUER_PAGE: ServicePageData = {
    heading: {
        title: 'Körperschaftsteuer',
        description: (<>
            Für Kapitalgesellschaften begleiten wir die Vorbereitung und Organisation der Unterlagen im Zusammenhang mit der Körperschaftsteuer. Durch eine systematische Aufbereitung der finanziellen Daten und Geschäftsunterlagen sorgen wir für Klarheit und Struktur. So stehen alle wichtigen Informationen übersichtlich zur Verfügung und können zuverlässig genutzt werden.
            <Br />
            Eine geordnete Zusammenstellung der relevanten Unternehmensdaten ist die Grundlage für eine transparente Darstellung der betrieblichen Ergebnisse. Wir unterstützen Sie dabei, Ihre finanziellen Unterlagen strukturiert aufzubereiten und alle wichtigen Informationen übersichtlich zusammenzustellen. Dadurch behalten Sie jederzeit den Überblick über Ihre Unternehmenszahlen.
            <Br />
            Durch klare Prozesse und eine sorgfältige Organisation der Unterlagen schaffen wir eine zuverlässige Basis für die weitere Bearbeitung Ihrer steuerlichen Angelegenheiten. Gleichzeitig erleichtern wir Ihnen den administrativen Aufwand im Arbeitsalltag Ihres Unternehmens.
            <Br />
            Mit unserer Unterstützung sorgen Sie für Transparenz, Struktur und eine effiziente Vorbereitung Ihrer Körperschaftsteuerunterlagen. So stehen alle relevanten Daten vollständig und übersichtlich zur Verfügung.
        </>),
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