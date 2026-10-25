# HentaiStream-Nuvio

**Current status: metadata-only scaffold; not yet a working Nuvio installation.**

This repository intentionally does not contain video scraping, stream URL extraction, downloading, or playback resolution for third-party streaming sites. It is a safe starting point for metadata/catalog work on content explicitly marked adult.

## Safety filtering

Records must carry a recognized adult rating (`18+`, `adult`, `xxx`, `r18`, or `r-18`). Missing/ambiguous ratings are rejected. The adapter rejects records whose visible metadata includes terms associated with minors or non-consensual sexual content. This text filter is a conservative guard, not a guarantee of age or consent; a real source adapter would require human-reviewed policy and source terms.

## Files

- `manifest.json` — provisional; must be validated against the actual Nuvio plugin manifest schema.
- `providers/index.js` — metadata normalization/filter helpers; no network source configured.
- `test/provider.test.js` — Node tests for filtering and normalization.

## Tests

Run with Node 18 or newer:

```sh
npm test
```

## Integration remaining

The Nuvio provider contract, required manifest keys, supported catalog/search method names, and any authorized metadata endpoint have not yet been verified. Therefore this repo does **not** advertise a working install URL. Before integration, verify Nuvio's current official plugin API and connect only a source that permits the intended metadata access.

Upstream manifest supplied by requester: `https://hentaistream-addon.keypop3750.workers.dev/manifest.json`

No upstream code is assumed licensed for reuse.