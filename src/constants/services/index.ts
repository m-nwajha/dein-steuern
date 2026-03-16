import { BUCHFUEHRUNG_PAGE } from "./buchfuehrung";
import { EINKOMMENSTEUER_PAGE } from './einkommensteuer';
import { FIRMENBERATUNG_PAGE } from './firmenberatung';
import { LOEHNE_UND_GEHAELTER_PAGE } from "./loehneUndGehaelter";
import { UMSATZSTEUER_PAGE } from './umsatzsteuer';
import { GEWERBESTEUER_PAGE } from './gewerbesteuer';
import { KOERPERSCHAFTSSTEUER_PAGE } from './koerperschaftssteuer';
    
export const SERVICES_PAGES = {
    'buchfuehrung': { ...BUCHFUEHRUNG_PAGE },
    'loehne-und-gehaelter': { ...LOEHNE_UND_GEHAELTER_PAGE },
    'firmenberatung': { ...FIRMENBERATUNG_PAGE },
    'einkommensteuer': { ...EINKOMMENSTEUER_PAGE },
    'umsatzsteuer': { ...UMSATZSTEUER_PAGE },
    'gewerbesteuer': { ...GEWERBESTEUER_PAGE },
    'koerperschaftssteuer': { ...KOERPERSCHAFTSSTEUER_PAGE },
}