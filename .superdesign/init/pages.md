# Page dependency trees

## `/` Home
- `src/views/HomeView.vue`
  - `src/components/SiteNav.vue`
  - `src/styles/site.css`

## `/product-solution`
- `src/views/ProductSolutionView.vue`
  - `src/components/SiteNav.vue`
  - `src/styles/site.css`

## `/system-capability`
- `src/views/SystemCapabilityView.vue`
  - `src/components/SiteNav.vue`
  - `src/styles/site.css`

## `/development-capability`
- `src/views/DevelopmentCapabilityView.vue`
  - `src/components/SiteNav.vue`
  - `src/styles/site.css`

## `/delivery-process`
- `src/views/DeliveryProcessView.vue`
  - `src/components/SiteNav.vue`
  - `src/styles/site.css`

All views render a shared `main.site` shell, top navigation, hero, modular card sections, contact section, and footer. Interactive showcase tabs are local Vue state in each view.
