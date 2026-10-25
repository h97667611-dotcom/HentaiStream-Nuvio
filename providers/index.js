/**
 * HentaiStream-Nuvio provider scaffold.
 * This is not yet wired to Nuvio's provider API. Keep source adapters metadata-only
 * until source formats, content filtering, and the current Nuvio contract are verified.
 */

const PROVIDER_ID = "hentaistream";

/**
 * Return true only when a record is explicitly marked adult and consensual.
 * Unknown/ambiguous records are excluded by default.
 */
function isAllowedRecord(record) {
  if (!record || typeof record !== "object") return false;
  const rating = String(record.rating || record.contentRating || "").toLowerCase();
  const tags = Array.isArray(record.tags) ? record.tags.map(String) : [];
  const normalizedTags = tags.map((tag) => tag.toLowerCase());

  const blocked = [
    "loli", "shota", "underage", "child", "minor", "non-consensual",
    "rape", "forced", "incest with minor"
  ];
  if (blocked.some((term) => normalizedTags.some((tag) => tag.includes(term)))) return false;

  // Fail closed: a clear adult rating must be present.
  return ["18+", "adult", "xxx", "r18"].includes(rating);
}


/** Normalize safe metadata only; intentionally no stream URL fields. */
function normalizeCatalogRecord(record) {
  if (!isAllowedRecord(record)) return null;
  return {
    id: String(record.id || record.slug || ""),
    title: String(record.name || record.title || "Untitled"),
    poster: typeof record.poster === "string" ? record.poster : undefined,
    description: typeof record.description === "string" ? record.description : undefined,
    genres: Array.isArray(record.genres) ? record.genres.map(String) : [],
    year: Number.isFinite(Number(record.year)) ? Number(record.year) : undefined
  };
}

module.exports = {
  id: PROVIDER_ID,
  name: "HentaiStream",
  status: "scaffold",
  isAllowedRecord,
  normalizeCatalogRecord,
  // Search/catalog methods will be implemented after Nuvio's current API contract
  // and the upstream add-on's metadata response format have been verified.
};
