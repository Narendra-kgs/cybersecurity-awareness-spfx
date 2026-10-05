# Cybersecurity Awareness SPFx React Web Part

A SharePoint Framework React implementation based on `Cybersecurity Awareness.html`.

## Prerequisites
- Node.js 22 LTS, version 22.14 or later and below 23
- npm
- SharePoint Online app catalog access

## Build
```bash
npm install
gulp clean
gulp build
gulp bundle --ship
gulp package-solution --ship
```
The deployable package is generated at `sharepoint/solution/cybersecurity-awareness.sppkg`.

## Local SharePoint workbench
Update `{tenantDomain}` in `config/serve.json`, then run `gulp serve`.

## Deploy
Upload the `.sppkg` to the tenant or site collection app catalog, deploy it, add the app to the target site, then add **Cybersecurity Awareness** to a modern page.

## Customize
- React markup and content: `components/CybersecurityAwareness.tsx`
- Styles: `components/CybersecurityAwareness.module.scss`
- Replace placeholder resource links with approved URLs before publishing.
