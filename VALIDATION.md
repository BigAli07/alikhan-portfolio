# Validation

- Dependency installation completed; npm audit reported zero known vulnerabilities after upgrading to Next.js 16.3.5.
- ESLint passed with no warnings or errors.
- Strict TypeScript check passed.
- Production build passed; home, four project pages, robots, sitemap, and 404 generated.
- Browser measurements at 375, 430, 768, 1024, and 1440 pixels found no horizontal page overflow.
- All four project detail pages were inspected at 375 pixels, with no horizontal page overflow or broken internal anchors.
- Portrait loaded successfully through next/image.
- No bare # links or missing home-section targets found.
- Theme switching and persistence across reload verified.
- Command palette opening, arrow selection, Enter navigation, Ctrl+K shortcut, and Escape closing verified.
- Mobile menu opening and navigation to Skills verified.
- Custom 404 and return-home action verified.
- Desktop dark and mobile layouts visually inspected.

Lighthouse scores and a full automated WCAG audit were not measured. No scores are claimed. The site has not been deployed to Vercel. Configure the real origin and optional profile links before release.
