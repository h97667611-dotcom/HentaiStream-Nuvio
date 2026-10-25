# HentaiStream-Nuvio

A starter Nuvio provider project for catalog and metadata discovery.

> **Status:** scaffold only. It is not a tested, installable Nuvio plugin yet. The exact Nuvio manifest/provider contract and the source add-on's response formats still need verification.

## Scope

- Adult-only metadata/catalog discovery (when sources can be safely filtered).
- No video downloading or stream URL extraction in this scaffold.
- Excludes sexual content involving minors, age-ambiguous characters, and non-consensual sexual content.

## Files

- `manifest.json` — provisional plugin metadata (schema needs validation against Nuvio's current plugin format).
- `providers/index.js` — provider scaffold with safe catalog normalization helpers.

## Install

There is currently no valid Nuvio install link. This repository must first be adapted to the current Nuvio plugin API and tested in Nuvio.

## Development

The source Stremio add-on manifest supplied by the requester is:
`https://hentaistream-addon.keypop3750.workers.dev/manifest.json`

This repository does not copy its code or scrape protected streams. Source response formats and lawful adult-only metadata endpoints must be reviewed before adding a provider.

## License

No license has been added yet. Do not assume permission to reuse the upstream add-on's code.