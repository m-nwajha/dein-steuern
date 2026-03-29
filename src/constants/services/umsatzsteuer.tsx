import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const UMSATZSTEUER_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
    backgroundImage: '/assets/images/services/Umsatzsteuer.jpg',
    heading: {
        title: 'Umsatzsteuer',
        description: (<>
            Wir unterstützen Unternehmen zuverlässig bei allen organisatorischen Aufgaben rund um die Umsatzsteuer. Dazu gehören die sorgfältige Aufbereitung der Unterlagen, die Erstellung der laufenden Meldungen sowie eine strukturierte Übersicht über alle relevanten Geschäftsvorgänge. Durch klare Prozesse und eine präzise Arbeitsweise sorgen wir dafür, dass alle Daten vollständig und termingerecht vorbereitet werden. <Br /> Eine übersichtliche Dokumentation der umsatzsteuerrelevanten Geschäftsvorfälle ist für Unternehmen besonders wichtig. Wir helfen Ihnen dabei, Ihre Rechnungen, Belege und Geschäftsvorgänge systematisch zu erfassen und übersichtlich zu strukturieren. Dadurch behalten Sie jederzeit den Überblick über Ihre Umsätze und steuerlich relevanten Informationen. <Br /> Unser Ziel ist es, Ihnen den organisatorischen Aufwand im Bereich der Umsatzsteuer zu erleichtern und klare, effiziente Abläufe zu schaffen. Mit einer strukturierten Vorbereitung aller Unterlagen sorgen wir dafür, dass die notwendigen Meldungen zuverlässig und fristgerecht erstellt werden können. <Br /> Durch unsere Unterstützung erhalten Sie eine transparente Übersicht über Ihre umsatzsteuerlichen Daten und Prozesse. So schaffen wir eine solide Grundlage für eine effiziente Bearbeitung Ihrer Umsatzsteuerangelegenheiten und einen reibungslosen Ablauf im Unternehmen.
        </>),
    },
};