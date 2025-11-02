# Animation Troubleshooting Guide

This guide provides systematic troubleshooting steps for animation issues in the phenomenon-studio-clone project.

## 🚨 Quick Diagnostic Checklist

When animations aren't working, run this diagnostic first:

```javascript
// Paste in browser console
const diagnostic = {
  totalSections: document.querySelectorAll('section').length,
  lazyContents: document.querySelectorAll('.lazy-content').length,
  placeholders: document.querySelectorAll('.animate-pulse').length,
  pageHeight: document.body.scrollHeight,
  hasClientWins: document.body.innerText.includes('TRUSTED BY'),
  hasProcess: document.body.innerText.includes('PROCESS'),
  hasTeam: document.body.innerText.includes('TEAM'),
  hasContact: document.body.innerText.includes('CONTACT')
};
console.log('🔍 Animation Diagnostic:', diagnostic);
```

**Expected healthy results:**
- `totalSections`: 9
- `lazyContents`: 8
- `placeholders`: 0-4
- `pageHeight`: 11000+

## 🛠️ Common Issues & Solutions

### 1. Sections Not Rendering (LazySection Failure)

**Symptoms:**
- Only 1-2 sections visible instead of 9+
- Page height much smaller than expected (~4,000px instead of 11,000px)
- LazySection placeholders remain visible

**Solution:**
```tsx
// In components/LazySection.tsx - lines 19-20
const [isVisible, setIsVisible] = useState(true); // Change from false
const [hasLoaded, setHasLoaded] = useState(true); // Change from false
```

### 2. React asChild Prop Errors

**Symptoms:**
- Console shows: "React does not recognize the `asChild` prop on a DOM element"
- Components crash and don't render

**Solution:**
Add this pattern to any button component using `asChild`:
```tsx
{...(asChild ? {} : { asChild })}
```

**Files to check:**
- `components/ui/button.tsx:55`
- `components/ui/rainbow-button.tsx:52`
- Any custom button components

### 3. GSAP Animations Not Working

**Symptoms:**
- Elements are static, no movement on scroll
- No console animation messages
- Transform properties not changing

**Solution Steps:**
1. **Check GSAP availability:**
   ```javascript
   console.log('GSAP available:', typeof window.gsap !== 'undefined');
   console.log('ScrollTrigger available:', typeof window.ScrollTrigger !== 'undefined');
   ```

2. **Verify element references:**
   ```javascript
   // Check if animation targets exist
   console.log('Animation targets:', {
     cards: document.querySelectorAll('.card').length,
     sections: document.querySelectorAll('section').length
   });
   ```

3. **Check for animation initialization:**
   Look for console messages like:
   - "🎬 ClientWins animations started"
   - "Scroll animations refreshed"

### 4. Scroll Animations Not Triggering

**Symptoms:**
- Animations work on page load but not during scroll
- ScrollTrigger not firing

**Solution:**
```typescript
// Manual scroll listener as fallback
const handleScroll = () => {
  const rect = sectionRef.current?.getBoundingClientRect();
  if (rect) {
    const viewportHeight = window.innerHeight;
    const triggerDistance = viewportHeight * 2;

    if (rect.top <= triggerDistance) {
      const progress = Math.min(1, Math.max(0,
        (triggerDistance - rect.top) / sectionHeight
      ));
      // Apply animation based on progress
    }
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
```

## 🔧 Systematic Troubleshooting Process

### Step 1: Basic Page Health Check
1. Run the diagnostic script
2. Verify 9+ sections are present
3. Check page height is 11,000px+
4. Look for React errors in console

### Step 2: Animation System Check
1. Check for GSAP/ScrollTrigger availability
2. Verify animation initialization messages
3. Test element references exist
4. Check for conflicting animations

### Step 3: Component-Specific Issues
1. **asChild errors:** Filter props in button components
2. **Lazy loading:** Temporarily disable if blocking
3. **Refs:** Ensure refs are properly attached
4. **Cleanup:** Check for memory leaks

### Step 4: Performance & Conflicts
1. Check for multiple ScrollTrigger instances
2. Verify proper cleanup in useEffect
3. Test with reduced motion settings
4. Check for CSS conflicts

## 📋 Prevention Checklist

**Before implementing new animations:**
- [ ] Test basic page rendering first
- [ ] Verify all sections are visible
- [ ] Check for existing animation conflicts
- [ ] Use proper TypeScript typing
- [ ] Plan cleanup functions

**When debugging animations:**
- [ ] Run diagnostic script first
- [ ] Check console for React errors
- [ ] Verify GSAP is loaded
- [ ] Test element references
- [ ] Check scroll behavior
- [ ] Verify responsive behavior

**Before declaring "fixed":**
- [ ] All sections render properly
- [ ] No console errors
- [ ] Animations trigger correctly
- [ ] Scroll behavior works
- [ ] Responsive design maintained
- [ ] Memory leaks prevented

## 🚨 Emergency Fixes

### Complete Animation Failure
```tsx
// 1. Disable lazy loading temporarily
const [isVisible, setIsVisible] = useState(true);
const [hasLoaded, setHasLoaded] = useState(true);

// 2. Filter asChild props in all buttons
{...(asChild ? {} : { asChild })}

// 3. Add global GSAP availability
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
```

### Performance Issues
```tsx
// Add GPU acceleration
gsap.set(elements, {
  force3D: true,
  transformStyle: "preserve-3d"
});

// Proper cleanup
return () => {
  animations.forEach anim => anim.kill();
  window.removeEventListener('scroll', handleScroll);
};
```

## 📚 Additional Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [React Troubleshooting](https://react.dev/learn/troubleshooting)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Radix UI Slot Component](https://www.radix-ui.com/primitives/docs/utilities/slot)

---

**Remember:** Always verify animations work in the browser using Chrome DevTools MCP before declaring them complete. Console logs alone are insufficient!