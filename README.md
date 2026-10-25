# HentaiStream Nuvio

**Status: source registry scaffold; no functional scrapers or stream resolvers.**

The repository manifest lists four requested sources: Hanime.tv, HentaiHaven.xxx, Hanime.red, and A-Hentai TV. All entries are disabled placeholders. Each provider exports the Nuvio `getStreams(tmdbId, mediaType, season, episode)` shape and returns an empty list without network access.

## Install/repository manifest

`https://raw.githubusercontent.com/h97667611-dotcom/HentaiStream-Nuvio/main/manifest.json`

Add the repository URL in a compatible Nuvio build's plugin/repository settings. The manifest being present does not make these sources playable.

## Development

Node.js 18+:

```sh
npm test
```

## Scope

This project does not host video. Source entries are placeholders only; no source scraping, protected stream extraction, or playback URLs are included. Metadata integration can be added for authorized sources and content restricted to clearly adult material.
