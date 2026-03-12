export const contactSectionData = {
    form: {
        title: 'Schreiben Sie uns',
        rows: [
            [
                { key: 'name', label: 'Vollständiger Name', placeholder: 'Ihr Name', type: 'text', multiline: false, rows: 1 },
                { key: 'email', label: 'E-Mail Adresse', placeholder: 'Ihre E-Mail-Adresse', type: 'email', multiline: false, rows: 1 },
            ],
            [
                { key: 'phone', label: 'Telefonnummer', placeholder: 'Ihre Telefonnummer', type: 'tel', multiline: false, rows: 1 },
                { key: 'service', label: 'Gewünschte Leistung', placeholder: 'Ihre Gewünschte Leistung', type: 'text', multiline: false, rows: 1 },
            ],
            [
                { key: 'message', label: 'Ihre Nachricht', placeholder: 'Ihre Nachricht', type: 'text', multiline: true, rows: 4 },
            ],
        ],
        submitButton: { text: 'Absenden' },
    },
    info: {
        title: 'Kontaktinformationen',
        details: [
            {
                label: 'Adresse',
                value: 'Musterstraße 123, 12345 Musterstadt',
            },
            {
                label: 'Telefon',
                value: '+49 123 456789',
            },
            {
                label: 'E-Mail',
                value: 'info@deine-steuern.de',
            },
        ],
    },
};
