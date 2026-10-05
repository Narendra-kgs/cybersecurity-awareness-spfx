# Cybersecurity Awareness Month 2026 SPFx Web Part

This is a classic Gulp-based SharePoint Framework 1.21.1 React project generated from the supplied HTML mockup. The original CSS, anchor navigation, mailto links, external links, details element, SVG and embedded base64 images are preserved.

## Prerequisites
- Node.js 22 LTS
- npm
- Gulp CLI

## Build and package
```powershell
npm install
gulp clean
gulp bundle --ship
gulp package-solution --ship
```

Generated package:
`sharepoint/solution/cybersecurity-awareness-spfx.sppkg`

Upload the `.sppkg` to your SharePoint App Catalog, deploy it, add the app to the intended site if tenant-wide deployment is not selected, and then add **Cybersecurity Awareness Month 2026** to a modern SharePoint page.
