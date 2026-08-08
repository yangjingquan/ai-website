# Extractable components

## SiteNav
- Source: `src/components/SiteNav.vue`
- Category: layout
- Description: Global brand navigation, route links, and contact CTA.
- Extractable props: none currently; active state comes from Vue Router.
- Hardcoded: brand mark, Chinese route labels, contact label, button styling.

## SiteFooter
- Source: `src/components/SiteFooter.vue`
- Category: layout
- Description: Site footer text wrapper.
- Extractable props: text (string).
- Hardcoded: footer layout and class names.

## SectionHead
- Source: `src/components/SectionHead.vue`
- Category: basic
- Description: Section title and explanatory subtitle.
- Extractable props: title, subtitle.
- Hardcoded: heading hierarchy and class names.

## ContactPanel
- Source: `src/components/ContactPanel.vue`
- Category: basic
- Description: Conversion CTA with contact information and intent chips.
- Extractable props: title, description, chips, wechat, phone, buttonText.
- Hardcoded: contact labels and button structure.
