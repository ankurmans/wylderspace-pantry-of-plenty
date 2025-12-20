# Assets Folder

This folder contains static assets (images, icons, SVGs) used throughout the application.

## How to Add Icons from Figma

1. **Export from Figma:**
   - Open your Figma file
   - Select the icon/asset you want to export
   - Right-click → Export → Choose format (SVG recommended for icons)
   - Save with a descriptive name (e.g., `dollar-icon.svg`, `checkmark-icon.svg`)

2. **Place files here:**
   - Copy the exported files to this `public/assets/` folder
   - Files in `public/` are served at the root path (e.g., `/assets/icon.svg`)

3. **Update component code:**
   - Change from: `http://localhost:3845/assets/...`
   - Change to: `/assets/your-icon-name.svg`

## Current Icons Needed

Based on the components, you'll need icons for:

- **ProblemSection**: dollar, wave, exclamation, x-mark
- **SolutionSection**: wheat/ancient way icon
- **WhatThisIsSection**: checkmark
- **FuturePacingSection**: pantry, clock, star
- **CurriculumSection**: 6 module icons
- **LiveTrainingSection**: livestream, qa, demo, play button
- **CookbookSection**: star rating
- **CommunitySection**: checkmark
- **QualificationSection**: checkmark, x-mark
- **TestimonialsSection**: star (full, half, empty)
- **FAQSection**: chevron
- **Footer**: wheat/logo icon
- **CredibilitySection**: Molly's photo

## Notes

- SVG format is recommended for icons (scalable, small file size)
- PNG/JPG for photos/images
- Keep file names descriptive and consistent
- After adding files, update the component imports to use `/assets/` paths instead of `localhost:3845`

