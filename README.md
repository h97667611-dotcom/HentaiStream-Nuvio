# HentaiStream Nuvio

**Status: installable-format scaffold; no functional scraper/resolver.**

This repository now follows the Nuvio provider repository shape (`name`, `version`, and `scrapers[]`) and the provider contract (`getStreams(tmdbId, mediaType, season, episode)`). The sole provider is disabled and intentionally returns an empty list. It does not make network requests or return stream URLs.

## Repository manifest

Install/repository URL:

`https://raw.githubusercontent.com/h97667611-dotcom/HentaiStream-Nuvio/main/manifest.json`

Nuvio repository installation is available in compatible sideloaded builds under Settings → Content & Discovery → Plugins. This URL being valid does not mean the placeholder provides playable sources.

## Development

Requires Node.js 18+:

```sh
npm test
```

## Scope

This project does not host video. I can support metadata/catalog integration from authorized sources, but this repository currently has no upstream source configured and no scraper or stream resolver. Do not treat the provider as a working streaming plugin.
