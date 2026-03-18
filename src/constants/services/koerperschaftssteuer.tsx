import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const KOERPERSCHAFTSSTEUER_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
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
};