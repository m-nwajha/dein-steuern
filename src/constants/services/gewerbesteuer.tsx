import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const GEWERBESTEUER_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
    backgroundImage: '/assets/images/services/Gewerbesteuer.jpg',
    heading: {
        title: 'Gewerbesteuer',
        description: (<>
            Im Bereich der Gewerbesteuer unterstützen wir Unternehmen bei der geordneten Zusammenstellung und Aufbereitung aller relevanten Unterlagen. Eine strukturierte Buchführung und eine klare Übersicht über betriebliche Zahlen bilden dabei die Grundlage. Unser Ziel ist es, Ihnen eine transparente Darstellung Ihrer Unternehmenszahlen zu ermöglichen und administrative Abläufe zu vereinfachen. <Br /> Eine übersichtliche Organisation der betrieblichen Daten ist besonders wichtig, um alle gewerbesteuerrelevanten Informationen korrekt zusammenzustellen. Wir helfen Ihnen dabei, Ihre Unterlagen systematisch zu ordnen und die relevanten Geschäftszahlen strukturiert aufzubereiten. So behalten Sie jederzeit den Überblick über Ihre betrieblichen Ergebnisse. <Br /> Durch klare Prozesse und eine sorgfältige Vorbereitung sorgen wir dafür, dass alle notwendigen Informationen vollständig und übersichtlich bereitstehen. Dadurch können Ihre gewerbesteuerlichen Angelegenheiten effizient weiterbearbeitet werden. <Br /> Mit unserer Unterstützung schaffen Sie eine solide Grundlage für Transparenz in Ihren Unternehmenszahlen und reduzieren gleichzeitig den organisatorischen Aufwand im Arbeitsalltag Ihres Unternehmens.        </>),
    },
};