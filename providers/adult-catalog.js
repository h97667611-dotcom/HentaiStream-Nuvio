// Nuvio provider contract: getStreams(tmdbId, mediaType, season, episode).
// This is intentionally a safe, disabled placeholder. No third-party stream
// scraping, protected-media resolution, or playback URLs are implemented.
function getStreams(tmdbId, mediaType, season, episode) {
  return Promise.resolve([]);
}

module.exports = { getStreams };
