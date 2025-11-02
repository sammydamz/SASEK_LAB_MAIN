# SASEK Labs Image System Documentation

## Overview

This document explains how to use the comprehensive image management system for the SASEK Labs website. The system includes:

1. **Image Manifest** (`/assets/images.json`) - Central catalog of all images
2. **Image Loader** (`/utils/imageLoader.ts`) - Utility for accessing image data
3. **Image Component** (`/components/ImageComponent.tsx`) - Reusable image component
4. **Test Component** (`/components/ImageTest.tsx`) - Demonstration and testing

## Image Manifest Structure

The manifest contains all image information organized by categories:

```json
{
  "images": {
    "hero": { "animation": { ... } },
    "logos": { "footer": { ... } },
    "clients": { "clientLogo1": { ... }, "clientLogo2": { ... } },
    "services": { "websites3d": { ... }, "aiAutomation": { ... } },
    "values": { "innovation": { ... }, "global": { ... } },
    "process": { "discovery": { ... }, "design": { ... } },
    "team": { "teamPhotoMain": { ... }, "teamMember1": { ... } },
    "testimonials": { "testimonialAvatar1": { ... } },
    "contact": { "emailIcon": { ... } },
    "generic": { "defaultIcon": { ... } }
  }
}
```

## How to Use

### 1. Using the ImageComponent

```tsx
import { ImageComponent } from './components/ImageComponent';

// Basic usage
<ImageComponent
  category="logos"
  imageId="footer"
  width={200}
  height={60}
/>

// With custom styling
<ImageComponent
  category="clients"
  imageId="clientLogo1"
  className="mx-auto hover:opacity-80 transition-opacity"
  width={120}
  height={80}
  loading="lazy"
/>
```

### 2. Using the ImageLoader Directly

```tsx
import { imageLoader } from './utils/imageLoader';

// Get client logo information
const clientLogo = imageLoader.getClientLogo(1);
if (clientLogo) {
  const imageUrl = imageLoader.buildImageUrl(clientLogo, 'webp');
  console.log('Image URL:', imageUrl);
}

// Get service icon
const serviceIcon = imageLoader.getServiceIcon('websites3d');

// Get all client logos
const allClientLogos = imageLoader.getAllClientLogos();
```

### 3. Replacing Placeholders in Components

Replace existing placeholders like this:

**Before:**
```tsx
<span className="text-xs text-gray-400">[CLIENT-LOGO-1]</span>
```

**After:**
```tsx
<ImageComponent
  category="clients"
  imageId="clientLogo1"
  className="mx-auto"
  width={120}
  height={80}
  fallback={<span className="text-xs text-gray-400">[CLIENT-LOGO-1]</span>}
/>
```

## Image Categories and IDs

### Hero Section
- `hero.animation` - Main 3D animation

### Logos
- `logos.footer` - Main company logo

### Client Logos (8 total)
- `clients.clientLogo1` - Tech Startup
- `clients.clientLogo2` - E-commerce Platform
- `clients.clientLogo3` - Financial Services
- `clients.clientLogo4` - Healthcare Provider
- `clients.clientLogo5` - Manufacturing Company
- `clients.clientLogo6` - Retail Chain
- `clients.clientLogo7` - Professional Services
- `clients.clientLogo8` - Education Platform

### Services
- `services.websites3d` - 3D Website Development
- `services.aiAutomation` - AI Automation

### Company Values
- `values.innovation` - Innovation-first approach
- `values.global` - Global standards
- `values.local` - Local expertise
- `values.results` - Results-driven
- `values.partnership` - Partnership

### Process Icons
- `process.discovery` - Discovery phase
- `process.design` - Design phase
- `process.launch` - Launch phase
- `process.growth` - Growth phase
- `process.diagram` - Process diagram

### Team Photos
- `team.teamPhotoMain` - Team collaboration
- `team.teamPhotoOffice` - Office workspace
- `team.teamMember1-3` - Individual team members

### Testimonials
- `testimonials.testimonialAvatar1` - Business owner
- `testimonials.testimonialAvatar2` - Marketing director
- `testimonials.testimonialAvatar3` - CEO

### Contact
- `contact.emailIcon` - Email icon
- `contact.locationIcon` - Location icon

### Generic
- `generic.defaultIcon` - Default fallback icon

## Adding New Images

### 1. Add to Manifest
Update `/assets/images.json`:

```json
{
  "images": {
    "yourCategory": {
      "yourImageId": {
        "id": "your-image-id",
        "placeholder": "[YOUR-PLACEHOLDER]",
        "suggestedPath": "/your-category/your-image.webp",
        "alt": "Descriptive alt text",
        "type": "your-type",
        "priority": "medium",
        "dimensions": { "width": 200, "height": 150 },
        "formats": ["webp", "jpg"],
        "notes": "Optional notes"
      }
    }
  }
}
```

### 2. Add Image Files
Place your images in `/public/assets/images/your-category/`:

```
/public/assets/images/your-category/
├── your-image.webp
├── your-image.jpg
└── your-image-400w.webp (for responsive versions)
```

### 3. Use in Components
```tsx
<ImageComponent
  category="yourCategory"
  imageId="yourImageId"
  width={200}
  height={150}
/>
```

## Image Optimization Guidelines

### Recommended Formats
- **SVG**: For logos and icons
- **WebP**: For photographs and illustrations
- **AVIF**: Next-gen format (when supported)
- **PNG**: For transparency needs
- **JPG**: For photographs (fallback)

### Responsive Images
The system automatically generates responsive URLs. Create multiple sizes:
- `image-name.webp` (original)
- `image-name-400w.webp` (2x size)
- `image-name-600w.webp` (3x size)

### Loading Strategy
- Use `loading="lazy"` for below-fold images
- Use `loading="eager"` for hero/above-fold images
- The `ImageComponent` handles this automatically

## Testing the System

Visit the test page to see all placeholders and test the image system:

1. Add the test component temporarily to your app
2. Navigate to see all image categories
3. Verify proper fallback behavior

```tsx
import ImageTest from './components/ImageTest';

// In your app temporarily:
<ImageTest />
```

## Migration Steps

1. **Update Components**: Replace `[PLACEHOLDER]` text with `ImageComponent`
2. **Add Images**: Place actual image files in the suggested paths
3. **Test**: Use the test component to verify everything works
4. **Remove Test**: Remove the ImageTest component from production

## Benefits

✅ **Centralized Management**: All image paths in one place
✅ **Type Safety**: Full TypeScript support
✅ **Fallback Behavior**: Graceful degradation when images missing
✅ **Performance**: Lazy loading and optimized formats
✅ **SEO**: Proper alt text management
✅ **Maintainability**: Easy to update/replace images
✅ **Development**: Better DX with autocomplete and validation