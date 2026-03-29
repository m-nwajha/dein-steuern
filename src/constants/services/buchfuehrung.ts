import { ServicePageData } from '@/@types/ServicePage';

export const BUCHFUEHRUNG_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
    backgroundImage: '/assets/images/services/lohnsteuer.jpg',
    heading: {
        title: 'Buchführung für Unternehmen und Selbstständige',
        description: 'Wir unterstützen Unternehmen, Selbstständige und Gründer zuverlässig bei der laufenden Buchführung und der Organisation ihrer Unterlagen. Mit strukturierter Arbeitsweise und langjähriger Erfahrung sorgen wir für Ordnung in Ihren Zahlen und eine klare Übersicht über Ihre Finanzen.\nWir bereiten Ihre Buchhaltung professionell vor, erstellen Auswertungen und unterstützen Sie bei allen organisatorischen Themen rund um Ihre Unterlagen und das Finanzamt. So können Sie sich auf Ihr Tagesgeschäft konzentrieren, während wir uns um die Struktur Ihrer Buchführung kümmern.',
    },
    soArbeiten: {
        title: 'So arbeiten wir zusammen',
        items: [
            {
                id: 1,
                title: 'Einrichtung',
                subtitle: 'Einrichtung 01',
                description: 'Wir analysieren Ihre Abläufe und richten alles digital ein.',
            },
            {
                id: 2,
                title: 'Digitale Übergabe',
                subtitle: 'Digitale Übergabe 02',
                description: 'Sie senden Ihre Unterlagen online – wir übernehmen den Rest.',
            },
            {
                id: 3,
                title: 'Transparente Auswertung',
                subtitle: 'Transparente Auswertung 03',
                description: 'Sie erhalten klare Auswertungen und Empfehlungen.',
            },
        ],
    },
    wasWir: {
        list: [
            {
                title: 'Was wir für Sie übernehmen',
                items: [
                    'Laufende Finanzbuchhaltung nach GoB-Richtlinien',
                    'Digitale Belegverarbeitung über DATEV unternehmen online',
                    'Fristgerechte Erstellung und Übermittlung der Umsatzsteuervoranmeldung',
                    'Pflege und Abstimmung von Debitoren- und Kreditorenkonten',
                    'Sorgfältige Kontenklärung und laufende Qualitätssicherung',
                ],
                description: 'Wir sorgen für strukturierte Abläufe und eine ordnungsgemäße Buchführung – zuverlässig und gesetzenkonform.',
                theme: 'light',
                side: 'left',
            },
            {
                title: 'Transparenz für Ihre unternehmerischen Entscheidungen',
                items: [
                    'Monatliche betriebswirtschaftliche Auswertungen (BWA)',
                    'Übersicht über Liquidität, Kosten und Ertragslage',
                    'Frühzeitige Erkennung finanzieller Entwicklungen',
                    'Fundierte Entscheidungsgrundlagen für Ihr Wachstum',
                    'Persönliche Betreuung und individuelle Beratung',
                ],
                description: 'So behalten Sie jederzeit den Überblick über Ihre Zahlen und können Ihr Unternehmen sicher und strategisch steuern.',
                theme: 'dark',
                side: 'right',
            },
        ],
    },
};