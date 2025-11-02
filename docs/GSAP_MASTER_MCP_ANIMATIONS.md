# GSAP Master MCP - Complete Animation Library

## 🎯 Overview
The GSAP Master MCP provides production-ready, battle-tested animations with surgical precision. Below is a comprehensive list of all available animations and their capabilities.

---

## 🌊 ScrollTrigger Animations

### **Basic ScrollTrigger Setup**
```javascript
// Create scroll-based animations
gsap.to(element, {
  x: 100,
  scrollTrigger: {
    trigger: element,
    start: "top center",
    end: "bottom top",
    scrub: 1,
    toggleActions: "play none none reverse"
  }
});
```

**Available Parameters:**
- `trigger`: Element that triggers the animation
- `start/startTrigger`: When animation starts (default: "top bottom")
- `end/endTrigger`: When animation ends (default: "bottom top")
- `scrub`: Links animation progress directly to scroll position
- `toggleActions`: Controls animation playback (play/pause/resume/reset/reverse/complete)

**Best For:**
- Parallax effects
- Scroll-based reveals
- Progress indicators
- Pinning elements

---

## 🎬 Core Animation Methods

### **gsap.to() - Animate TO specific values**
```javascript
// Animate element TO new properties
gsap.to(element, {
  duration: 1,
  x: 100,
  rotation: 360,
  ease: "power2.inOut"
});
```

**Available Properties:**
- Position: `x`, `y`, `z`, `left`, `top`, `right`, `bottom`
- Transform: `rotation`, `rotationX`, `rotationY`, `scale`, `scaleX`, `scaleY`, `skewX`, `skewY`
- Visual: `opacity`, `color`, `backgroundColor`
- 3D: `transformPerspective`, `transformStyle`, `transformOrigin`

### **gsap.from() - Animate FROM specific values**
```javascript
// Animate element FROM starting values TO current values
gsap.from(element, {
  duration: 1,
  opacity: 0,
  y: 50,
  scale: 0.8
});
```

**Best For:** Entrance animations, reveals

### **gsap.fromTo() - Animate FROM specific values TO specific values**
```javascript
// Complete control over start and end values
gsap.fromTo(element,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }
);
```

**Best For:** Precise animation control

### **gsap.set() - Set properties instantly**
```javascript
// Set properties without animation
gsap.set(element, {
  x: 100,
  opacity: 0.5,
  transformPerspective: 1000
});
```

**Best For:** Initial state setup, immediate property changes

---

## ⏰ Timeline & Control

### **gsap.timeline() - Sequence animations**
```javascript
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl.to(element1, { x: 100, duration: 1 })
  .to(element2, { y: 50, duration: 1 }, "-=0.5") // Start 0.5s before previous ends
  .to(element3, { rotation: 360, duration: 1 });
```

**Timeline Options:**
- `repeat`: Number of repetitions (-1 = infinite)
- `repeatDelay`: Delay between repetitions
- `yoyo`: Animation plays forward then backward
- `paused`: Start timeline paused
- `onComplete`, `onUpdate`, `onStart`: Event callbacks

### **gsap.delayedCall() - Delayed execution**
```javascript
// Execute function after delay
gsap.delayedCall(2, () => {
  console.log("2 seconds later");
});
```

---

## 🎯 Interactive Animations

### **Draggable - Drag & Drop Interactions**
```javascript
// Make element draggable
Draggable.create(element, {
  type: "x,y",           // or "x", "y", "rotation"
  bounds: container,     // Constrain to container
  inertia: true,         // Smooth momentum
  onDrag: function() {
    console.log("Dragging:", this.x, this.y);
  },
  onDragEnd: function() {
    console.log("Drag ended at:", this.x, this.y);
  }
});
```

**Draggable Options:**
- `type`: "x", "y", "x,y", "rotation", "scroll"
- `bounds`: {top, left, width, height} or element
- `inertia`: Smooth momentum after release
- `liveSnap`: Snap to values while dragging
- `dragResistance`: Resistance to dragging
- `edgeResistance`: Resistance at boundaries

**Best For:**
- Interactive sliders
- Draggable cards
- Custom scrollbars
- Drag-to-reveal interfaces

---

## 📝 Text Animations

### **SplitText - Advanced Text Control**
```javascript
// Split text for character-by-character animation
const split = new SplitText(element, {
  type: "chars, words, lines"
});

// Animate each character
gsap.from(split.chars, {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.05,
  ease: "power2.out"
});
```

**SplitText Options:**
- `type`: "chars", "words", "lines", or combinations
- `charsClass`: CSS class for character wrappers
- `wordsClass`: CSS class for word wrappers
- `linesClass`: CSS class for line wrappers
- `reduceWhiteSpace`: Handle whitespace intelligently

**Best For:**
- Headline reveals
- Text morphing
- Staggered text animations
- Typography effects

---

## 🎨 SVG Animations

### **DrawSVGPlugin - Animated SVG Drawing**
```javascript
// Animate SVG stroke drawing
gsap.fromTo(svgPath,
  { drawSVG: "0%" },    // Start empty
  { drawSVG: "100%",    // Draw to full
    duration: 2,
    ease: "power1.inOut"
  });
```

**DrawSVG Options:**
- `"0%"` to `"100%"`: Drawing percentage
- `"50%"`: Start at 50% and draw to 100%
- `"20% 80%"`: Draw from 20% to 80%
- `"100% 0%"`: Erase from 100% to 0%

**Best For:**
- Logo reveals
- Icon animations
- Drawing illustrations
- Progress indicators

### **MotionPathPlugin - Motion Along Paths**
```javascript
// Move element along SVG path
gsap.to(element, {
  duration: 2,
  motionPath: {
    path: "#motionPath",
    autoRotate: true,
    align: "#motionPath"
  }
});
```

**MotionPath Options:**
- `path`: SVG path selector or path string
- `autoRotate`: Element rotates to follow path direction
- `align`: Align element to path
- `start`: Start position on path (0-1)
- `end`: End position on path (0-1)

### **MorphSVGPlugin - Shape Morphing**
```javascript
// Morph one SVG shape into another
gsap.to("#shape1", {
  morphSVG: "#shape2",
  duration: 2,
  ease: "power1.inOut"
});
```

**MorphSVG Options:**
- Target: SVG shape selector or path string
- `shapeIndex`: Control point matching for complex shapes
- `map`: Custom point mapping arrays
- `type`: "rotate", "linear", "complex" for different morphing styles

---

## 🎪 Advanced Effects

### **Flip - Animate Position Changes**
```javascript
// Animate element position changes smoothly
Flip.fit(element, target, {
  duration: 0.8,
  ease: "power2.inOut",
  stagger: 0.1,
  absolute: true
});
```

### **Observer - Element Intersection Detection**
```javascript
// Detect when elements enter/leave viewport
Observer.create({
  target: element,
  onEnter: () => console.log("Entered viewport"),
  onLeave: () => console.log("Left viewport"),
  onEnterBack: () => console.log("Entered from bottom"),
  onLeaveBack: () => console.log("Left from top")
});
```

---

## 🎛️ Easing Functions

### **Standard Easings**
- `power0`, `power1`, `power2`, `power3`, `power4`
- `sine`, `circ`, `expo`, `back`, `elastic`, `bounce`
- Add `.in`, `.out`, `.inOut` suffixes

### **Custom Easings**
```javascript
// Create custom easing curves
gsap.registerPlugin(CustomEase);
CustomEase.create("custom", "0.68, -0.55, 0.265, 1.55");

gsap.to(element, {
  x: 100,
  ease: "custom"
});
```

---

## 🚀 Performance Optimizations

### **GPU Acceleration**
```javascript
gsap.to(element, {
  x: 100,
  force3D: true,        // Force GPU acceleration
  willChange: "transform" // Optimize for transform changes
});
```

### **Staggered Animations**
```javascript
// Animate multiple elements with delay
gsap.to(elements, {
  x: 100,
  stagger: 0.1,         // 0.1s delay between each element
  duration: 1
});

// Advanced staggering
gsap.to(elements, {
  x: 100,
  stagger: {
    amount: 1,          // Total time for all animations
    from: "center",     // Start from center
    grid: "auto"        // Auto-detect grid
  }
});
```

---

## 🎭 Production Patterns

### **Hero Section Entrances**
```javascript
// Staggered hero entrance
gsap.fromTo(".hero-element",
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%"
    }
  }
);
```

### **Scroll Systems**
```javascript
// Parallax scroll system
gsap.utils.toArray(".parallax").forEach((element, i) => {
  gsap.to(element, {
    yPercent: -50 * (i + 1),
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
});
```

### **Text Effects**
```javascript
// Advanced text reveal
const split = new SplitText(".headline", { type: "chars" });
gsap.from(split.chars, {
  yPercent: 100,
  rotationX: -90,
  opacity: 0,
  duration: 0.8,
  stagger: 0.03,
  ease: "power2.out",
  force3D: true
});
```

---

## 🛠️ Best Practices

1. **Always use `force3D: true`** for better performance
2. **Use `willChange: "transform"`** for GPU-heavy animations
3. **Clear properties** with `clearProps: "transform,opacity"` when done
4. **Use staggered animations** for multiple elements
5. **Test with Chrome DevTools** for performance profiling
6. **Use passive event listeners** for scroll-based animations
7. **Clean up animations** on component unmount
8. **Use `gsap.set()`** for initial states instead of CSS

---

## 🎯 Quick Reference

| Animation | Best For | Complexity |
|-----------|----------|------------|
| **gsap.to()** | Basic animations | ⭐ |
| **ScrollTrigger** | Scroll effects | ⭐⭐ |
| **Timeline** | Sequenced animations | ⭐⭐ |
| **Draggable** | Interactive UI | ⭐⭐⭐ |
| **SplitText** | Typography effects | ⭐⭐⭐ |
| **DrawSVG** | SVG drawing | ⭐⭐⭐ |
| **MotionPath** | Path animations | ⭐⭐⭐⭐ |
| **MorphSVG** | Shape morphing | ⭐⭐⭐⭐⭐ |

---

## 📚 Plugin Requirements

Some animations require additional plugins:
- **ScrollTrigger**: `import('gsap/ScrollTrigger')`
- **Draggable**: `import('gsap/Draggable')`
- **SplitText**: `import('gsap/SplitText')`
- **DrawSVGPlugin**: `import('gsap/DrawSVGPlugin')`
- **MotionPathPlugin**: `import('gsap/MotionPathPlugin')`
- **MorphSVGPlugin**: `import('gsap/MorphSVGPlugin')`
- **CustomEase**: `import('gsap/CustomEase')`
- **Flip**: `import('gsap/Flip')`

Remember to register plugins: `gsap.registerPlugin(ScrollTrigger, Draggable, etc.)`