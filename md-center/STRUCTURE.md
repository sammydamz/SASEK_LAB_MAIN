# Project Structure

## 📁 Component Organization

The application has been completely refactored into a modular component structure:

```
sasek_labs/
├── components/
│   ├── Header.tsx          # Navigation bar with logo and menu
│   ├── Hero.tsx            # Hero section with headline and CTA
│   ├── Stats.tsx           # Statistics/numbers section
│   ├── ClientWins.tsx      # Featured client logos grid
│   ├── StartupPartner.tsx  # Service offerings section
│   ├── CaseStudies.tsx     # Portfolio/case study cards
│   ├── Team.tsx            # Team section with photos
│   ├── Priority.tsx        # Why choose us section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with links
│   └── index.ts            # Central export file
├── App.tsx                 # Main app with page layout
├── index.tsx               # React entry point
├── index.css               # Tailwind CSS imports
└── index.html              # HTML template
```

## 🎨 Component Breakdown

### Header (`Header.tsx`)
- **Purpose**: Top navigation bar
- **Contains**: Logo, navigation links, CTA button
- **Props**: None (can be extended for dynamic navigation)

### Hero (`Hero.tsx`)
- **Purpose**: Main landing section
- **Contains**: Headline, subtext, dual CTA buttons, hero image
- **Props**: None (content is hardcoded, can be made dynamic)

### Stats (`Stats.tsx`)
- **Purpose**: Display key metrics
- **Contains**: 4-column stat grid
- **Data**: Satisfaction rate, conversions, team size, funding

### ClientWins (`ClientWins.tsx`)
- **Purpose**: Social proof via client logos
- **Contains**: 4-column grid of client names
- **Props**: None (client list is hardcoded)

### StartupPartner (`StartupPartner.tsx`)
- **Purpose**: Service offerings
- **Contains**: 3 service cards with video thumbnails
- **Features**: Hover effects on video placeholders

### CaseStudies (`CaseStudies.tsx`)
- **Purpose**: Portfolio showcase
- **Contains**: 3 detailed case studies with alternating layouts
- **Data**: Title, tags, tech stack, timeline, results

### Team (`Team.tsx`)
- **Purpose**: Team introduction
- **Contains**: Photo grid, team description, stats
- **Layout**: Responsive grid with varying image sizes

### Priority (`Priority.tsx`)
- **Purpose**: Value propositions
- **Contains**: 4 feature cards (2x2 grid)
- **Style**: Alternating dark/light backgrounds

### Contact (`Contact.tsx`)
- **Purpose**: Lead generation
- **Contains**: Contact form, budget selector, contact cards
- **Features**: Multi-field form with validation-ready inputs

### Footer (`Footer.tsx`)
- **Purpose**: Site footer
- **Contains**: Badges, links, copyright
- **Layout**: Two-row layout

## 🔧 How to Customize

### Adding New Sections
1. Create a new component in `components/`
2. Export it from `components/index.ts`
3. Import and use in `App.tsx`

### Modifying Content
Each component has its data defined at the top as constants. Example:
```typescript
const stats = [
  { value: '98%', label: 'customer satisfaction rate' },
  // Add more stats here
];
```

### Changing Styles
- Use Tailwind utility classes
- Custom colors defined in `index.css`:
  - `--color-brand-orange`: #F97316
  - `--color-brand-dark`: #111111

## 🚀 Next Steps for Your Startup

1. **Update Content**: Replace placeholder text with your startup's actual content
2. **Add Images**: Replace picsum.photos URLs with real images
3. **Create Data Files**: Move hardcoded data to JSON/TypeScript data files
4. **Add Routing**: Implement React Router for multi-page navigation
5. **Add Forms**: Connect contact form to backend API
6. **Responsive Testing**: Test on all device sizes
7. **SEO Optimization**: Add meta tags, structured data
8. **Analytics**: Integrate Google Analytics or similar

## 📝 Component Props (Future Enhancement)

Consider making components more reusable by adding props:

```typescript
// Example: Flexible Hero component
interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
  image: string;
}
```

## 🎯 Benefits of This Structure

- ✅ **Modular**: Easy to add/remove/modify sections
- ✅ **Maintainable**: Clear separation of concerns
- ✅ **Scalable**: Ready for data-driven content
- ✅ **Reusable**: Components can be used across multiple pages
- ✅ **Testable**: Each component can be tested independently
