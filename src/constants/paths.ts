
export const PATHS = {
    home: '/',
    services: '#',
    kooperation: '#',
    buchfuhrung: '/buchfuehrung',
    firmenberatung: '/firmenberatung',
    lohneUndGehalter: '/loehne-und-gehaelter',
    uberUns: '/ueber-uns',
    kontakt: '/kontakt',
    umsatzsteuer: '/umsatzsteuer',
    einkommensteuer: '/einkommensteuer',
    gewerbesteuer: '/gewerbesteuer',
    korperschaftssteuer: '/koerperschaftssteuer',
    impressum: '/impressum',
    nutzungsbedingungen: '/nutzungsbedingungen',
    datenschutzerklarung: '/datenschutzerklaerung',
};

export const NAVIGATE_LINKS = [
    {
        id: 1,
        label: 'Home',
        path: PATHS.home
    },
    {
        id: 2,
        label: 'Services',
        path: PATHS.services,
        children: [
            {
                id: 21,
                label: 'Kooperation',
                path: PATHS.kooperation,
                children: [
                    { id: 211, label: 'Umsatzsteuer', path: PATHS.umsatzsteuer },
                    { id: 212, label: 'Einkommenssteuer', path: PATHS.einkommensteuer },
                    { id: 213, label: 'Gewerbesteuer', path: PATHS.gewerbesteuer },
                    { id: 214, label: 'Körperschaftssteuer', path: PATHS.korperschaftssteuer },
                ]
            },
            { id: 22, label: 'Buchführung', path: PATHS.buchfuhrung },
            { id: 23, label: 'Firmenberatung', path: PATHS.firmenberatung },
            { id: 24, label: 'Löhne und Gehälter', path: PATHS.lohneUndGehalter },
        ]
    },
    {
        id: 3,
        label: 'Über uns',
        path: PATHS.uberUns
    },
    {
        id: 4,
        label: 'Kontakt',
        path: PATHS.kontakt
    }
];

export const FOOTER_LINKS = [
    { id: 1, label: 'Home', path: PATHS.home },
    { id: 2, label: 'Services', path: PATHS.services },
    { id: 3, label: 'Kooperation', path: PATHS.kooperation },
    { id: 4, label: 'Über uns', path: PATHS.uberUns },
    { id: 5, label: 'Kontakt', path: PATHS.kontakt }
];

export const LEGAL_LINKS = [
    { id: 1, label: 'Impressum', path: PATHS.impressum },
    { id: 2, label: 'Nutzungsbedingungen', path: PATHS.nutzungsbedingungen },
    { id: 3, label: 'Datenschutzerklärung', path: PATHS.datenschutzerklarung },
];