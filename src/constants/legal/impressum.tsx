import { ReactNode } from 'react';
import Br from '@/components/ui/Br';
import { CONTACT_INFO } from '@/constants/contactInfo';

export const IMPRESSUM_CONTENT: ReactNode = (
    <>
        <strong>Angaben gemäß § 5 TMG</strong>
        <Br />
        {CONTACT_INFO.companyName}
        <Br />
        {CONTACT_INFO.street}
        <Br />
        {CONTACT_INFO.plz}
        <Br />
        <Br />
        <strong>Vertreten durch</strong>
        <Br />
        {CONTACT_INFO.ownerName}
        <Br />
        <Br />
        <strong>Kontakt</strong>
        <Br />
        Telefon: {CONTACT_INFO.phone}
        <Br />
        E-Mail: {CONTACT_INFO.email}
        <Br />
        <Br />
        <strong>Berufsbezeichnung und berufsrechtliche Regelungen</strong>
        <Br />
        Berufsbezeichnung: Steuerberater
        <Br />
        Zuständige Kammer: {CONTACT_INFO.kammer}
        <Br />
        Verliehen in: Deutschland
        <Br />
        <Br />
        <strong>Umsatzsteuer-ID</strong>
        <Br />
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        <Br />
        {CONTACT_INFO.ustId}
        <Br />
        <Br />
        <strong>Steuernummer</strong>
        <Br />
        {CONTACT_INFO.steuernummer}
        <Br />
        <Br />
        <strong>Aufsichtsbehörde</strong>
        <Br />
        {CONTACT_INFO.kammer}
        <Br />
        <Br />
        <strong>Haftungsausschluss</strong>
        <Br />
        <strong>Haftung für Inhalte</strong>
        <Br />
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        <Br />
        <strong>Haftung für Links</strong>
        <Br />
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        <Br />
        <strong>Urheberrecht</strong>
        <Br />
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        <Br />
        <strong>Online-Streitbeilegung</strong>
        <Br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse: {CONTACT_INFO.email}
    </>
);

export const IMPRESSUM_TITLE = 'Impressum';