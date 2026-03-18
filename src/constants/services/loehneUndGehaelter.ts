import { ServicePageData } from '@/@types/ServicePage';

export const LOEHNE_UND_GEHAELTER_PAGE: Omit<ServicePageData, 'starten' | 'leistungen'> = {
    heading: {
        title: 'Löhne und Gehälter',
        description: 'Wir unterstützen Unternehmen zuverlässig bei der Erstellung der laufenden Lohn- und Gehaltsabrechnungen. Von der Vorbereitung der Daten bis zur strukturierten Aufbereitung aller relevanten Unterlagen sorgen wir für einen reibungslosen Ablauf. So behalten Sie den Überblick und Ihre Mitarbeiter erhalten ihre Abrechnungen pünktlich und korrekt.',
    },
    soArbeiten: {
        title: 'Unser Ablauf in 3 Schritten',
        items: [
            {
                id: 1,
                title: 'Datenerfassung',
                subtitle: 'Datenerfassung 01',
                description: 'Wir prüfen die Angaben sorgfältig und bereiten die Abrechnung vor.',
            },
            {
                id: 2,
                title: 'Abrechnung',
                subtitle: 'Abrechnung 02',
                description: 'Erstellung der gesetzeskonformen Lohn- und Gehaltsabrechnungen.',
            },
            {
                id: 3,
                title: 'Bereitstellung',
                subtitle: 'Bereitstellung 03',
                description: 'Fristgerechte Auswertungen und pünktliche Auszahlungen für Ihre Mitarbeiter.',
            },
        ],
    },
    wasWir: {
        list: [
            {
                title: 'Was wir für Sie übernehmen',
                items: [
                    'Laufende Lohn- und Gehaltsabrechnungen für Ihre Mitarbeiter',
                    'Digitale Lohnbuchhaltung über DATEV Unternehmen online',
                    'Erstellung und Übermittlung der Lohnsteuer-Anmeldungen',
                    'Meldungen an Sozialversicherungsträger und Behörden',
                    'Pflege der Mitarbeiterstammdaten sowie Ein- und Austritte',
                    'Unterstützung bei lohnsteuerrelevanten Fragen und Änderungen',
                ],
                description: 'Wir sorgen für strukturierte Abläufe und eine zuverlässige, gesetzeskonforme Lohnabrechnung.',
                theme: 'light',
                side: 'left',
            },
            {
                title: 'Transparenz für Ihr Unternehmen',
                items: [
                    'Übersichtliche Lohn- und Gehaltsauswertungen',
                    'Klare Darstellung von Personalkosten und Abgaben',
                    'Aktuelle Informationen zu gesetzlichen Änderungen',
                    'Unterstützung bei Personal- und Kostenplanung',
                    'Persönliche Betreuung und individuelle Beratung',
                ],
                description: 'So behalten Sie jederzeit den Überblick über Ihre Personalkosten und schaffen eine sichere Grundlage für Ihre Unternehmensplanung.',
                theme: 'dark',
                side: 'right',
            },
        ],
    },
};