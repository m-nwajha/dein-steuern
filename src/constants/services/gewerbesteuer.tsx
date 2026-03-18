import { ServicePageData } from '@/@types/ServicePage';
import Br from '@/components/ui/Br';

export const GEWERBESTEUER_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
    heading: {
        title: 'Gewerbesteuer',
        description: (<>
            Wir unterstützen Gewerbetreibende und Unternehmen bei der sorgfältigen Aufbereitung ihrer finanziellen Unterlagen für die Gewerbesteuer. Durch eine klare Strukturierung von Belegen, Einnahmen و Ausgaben schaffen wir die notwendige Übersicht für steuerliche Belange. Eine ordnungsgemäße Vorbereitung sorgt dafür, dass alle relevanten Daten vollständig vorliegen und steuerliche Angelegenheiten reibungslos bearbeitet werden können. <Br /> Gerade bei der Gewerbesteuer ist es wichtig, die betrieblichen Finanzen systematisch zu organisieren. Wir helfen Ihnen dabei, Ihre Dokumente übersichtlich zusammenzustellen und alle notwendigen Informationen nachvollziehbar aufzubereiten. So behalten Sie den Überblick über Ihre gewerblichen Einnahmen وال Ausgaben sowie alle steuerlich bedeutsamen Daten.<Br /> Unser Fokus liegt darauf, Ihnen den administrativen Aufwand zu erleichtern و einen strukturierten Ablauf bei der Bereitstellung Ihrer Unterlagen zu gewährleisten. Mit unserer Unterstützung stellen Sie sicher, dass Ihre Daten vollständig und übersichtlich vorliegen, مما eine effiziente و transparente Bearbeitung Ihrer steuerlichen Pflichten ermöglicht.
        </>),
    },
};