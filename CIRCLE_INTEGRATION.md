# Circle.so Integration Guide

This website is designed to integrate seamlessly with Circle.so as the member community platform.

## Quick Start

1. **Sign up for Circle.so**
   - Go to https://circle.so and create your community
   - Choose your subdomain (e.g., siblingstrong.circle.so)
   - Select the Pro plan for full features

2. **Apply Sibling Strong Branding**

   In Circle Settings → Branding, use these colors:

   - **Primary Color**: `#D15A3F` (Warm Terracotta)
   - **Accent Color**: `#E3A957` (Golden Amber)
   - **Background**: `#FAF8F5` (Warm Cream)

3. **Update Website Links**

   Replace `YOUR-COMMUNITY.circle.so` with your actual Circle URL in:

   - `components/layout/Header.tsx` (line 23)
   - `components/home/Features.tsx` (line 11)

4. **Create Spaces in Circle**

   Recommended spaces:
   - Weekly Discussions (facilitated groups)
   - Expert Firesides (monthly events)
   - Sibling Spotlights (member stories)
   - General Support (open discussion)

5. **Set Up Membership Tiers**

   Configure pricing in Circle:
   - Monthly: $14.99/month
   - 3-month gift: $39.99
   - 6-month gift: $74.99
   - 12-month gift: $124.99

## Features Overview

### Navigation Integration
- "Member Area" button in header links to Circle
- Prominent CTAs throughout the site direct to Circle
- Mobile-friendly navigation includes Member Area

### Recommended Circle Features
- ✅ Member Profiles
- ✅ Events (for expert firesides and discussion groups)
- ✅ Spaces (organized by topic/loss circumstances)
- ✅ Courses (optional: grief support content)
- ✅ Custom Domain (community.siblingstrong.com)

## Brand Colors Reference

```css
/* Primary - Warm Terracotta (Campfire) */
--primary: hsl(15, 70%, 52%);
/* Hex: #D15A3F */

/* Accent - Golden Amber (Sunrise) */
--accent: hsl(40, 75%, 62%);
/* Hex: #E3A957 */

/* Secondary - Soft Sage (Forest Moss) */
--secondary: hsl(145, 25%, 88%);
/* Hex: #D9E8DE */

/* Background - Warm Cream */
--background: hsl(30, 30%, 98%);
/* Hex: #FAF8F5 */

/* Foreground - Deep Forest Brown */
--foreground: hsl(25, 35%, 20%);
/* Hex: #4A3A2E */
```

## Community Guidelines Suggestions

Share these in your Circle welcome space:

1. **Respect & Compassion**: All members are navigating grief. Respond with kindness.
2. **Confidentiality**: What's shared in the community stays in the community.
3. **No Advice Unless Asked**: Share experiences, not directives.
4. **Honor Your Sibling**: This is a space to remember and celebrate.
5. **Take Care of Yourself**: Step away if content becomes overwhelming.

## Detailed Setup Guide

Visit **/circle-setup** on your website for the complete step-by-step guide with visual examples.

## Support

For Circle.so platform support: https://circle.so/help
For website technical questions: Contact your development team
