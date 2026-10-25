/** HentaiStream Nuvio metadata-only adapter scaffold. */
const PROVIDER_ID = 'hentaistream';
const BLOCKED_TERMS = /\b(loli|shota|underage|child|minor|non[- ]?consensual|rape|forced)\b/i;
const ADULT_RATINGS = new Set(['18+','adult','xxx','r18','r-18']);
function isAllowedRecord(record) {
  if (!record || typeof record !== 'object') return false;
  const rating = String(record.rating ?? record.contentRating ?? '').trim().toLowerCase();
  const text = [record.title, record.name, record.description, ...(Array.isArray(record.tags)?record.tags:[]), ...(Array.isArray(record.genres)?record.genres:[])].filter(Boolean).join(' ');
  if (BLOCKED_TERMS.test(text)) return false;
  return ADULT_RATINGS.has(rating);
}
function normalizeCatalogRecord(record) {
  if (!isAllowedRecord(record)) return null;
  const id = record.id ?? record.slug;
  const title = record.title ?? record.name;
  if (id == null || title == null || !String(title).trim()) return null;
  return { id:String(id), title:String(title).trim(), poster:typeof record.poster==='string'?record.poster:undefined, description:typeof record.description==='string'?record.description:undefined, genres:Array.isArray(record.genres)?record.genres.map(String):[], year:Number.isInteger(Number(record.year))?Number(record.year):undefined };
}
function filterCatalog(records) { return Array.isArray(records) ? records.map(normalizeCatalogRecord).filter(Boolean) : []; }
module.exports = { id:PROVIDER_ID, name:'HentaiStream', status:'metadata-only-scaffold', isAllowedRecord, normalizeCatalogRecord, filterCatalog };
