# Public Assets

This directory contains static assets for the Pyra website.

## Background Options

The Hero section supports both GIF and MP4 backgrounds. You can choose which one to use by editing the `backgroundType` variable in `src/components/Hero.tsx`.

### 🎬 **Video Background (MP4)**

To enable the video background:

1. **Add your video file**: Place a video file named `hero-background.mp4` in this directory
2. **Video specifications**:
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1920x1080 or higher
   - Duration: 10-30 seconds (loops automatically)
   - File size: Keep under 10MB for optimal performance
   - Content: High-end, minimalist visuals with ascension/precision theme

3. **Video content suggestions**:
   - Abstract geometric patterns
   - Financial data visualizations
   - Ascending/rising animations
   - Precision-focused movements
   - Dark/neutral color palette

### 🖼️ **GIF Background (Recommended)**

To use a GIF background instead:

1. **Add your GIF file**: Place a GIF file named `hero-background.gif` in this directory
2. **GIF specifications**:
   - Format: GIF (animated)
   - Resolution: 1920x1080 or higher
   - Duration: 3-10 seconds (loops automatically)
   - File size: Keep under 5MB for optimal performance
   - Content: Same suggestions as video

3. **GIF advantages**:
   - Always autoplays (no browser restrictions)
   - More reliable across all browsers
   - Simpler implementation
   - No video controls needed

## Switching Between Background Types

In `src/components/Hero.tsx`, change this line:

```tsx
const backgroundType = 'gif'; // Change to 'video' for MP4
```

## Current Assets

- `favicon.ico` - Pyra favicon
- `investor-one-pager.pdf` - Investor presentation
- `media-kit.zip` - Media kit for press
- `placeholder.svg` - Fallback image for video
- `robots.txt` - Search engine directives
- `hero-background.mp4` - Video background (optional)
- `hero-background.gif` - GIF background (optional)

## Notes

- **GIF Background**: Automatically plays, no controls needed, more reliable
- **Video Background**: Higher quality, includes play/pause controls, may have autoplay restrictions
- **Fallback**: If neither background loads, animated CSS background will be used
- **Opacity**: Both backgrounds are set to 40% opacity to maintain text readability 