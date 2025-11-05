# Exercise3
Chrome version: 141.0.7390.123

## A. Functional Checks: 

To verify the integrity and behavior of the layout after the major stylistic shift to the vintage print look.
### Layout Integrity:
Ensure the .wrapper is correctly centered.Verify that section (70%) and aside (24%) are floating correctly and do not overlap.

### Scrollbar Overflow:
Check that the sidebar is not squeezed or displaced when content overflows (i.e., when the vertical scrollbar appears), 

### confirmed by the implementation of box-sizing: 
border-box.Links and States:Validate the styles of the :hover and .current states for all navigation and sidebar links, ensuring they adhere to the vintage ink/sepia color scheme (#C7A76A and #5A4A3E).



## B. Responsiveness Check (Developer Tools)
Goal: To ensure the fixed-width layout scales appropriately on smaller screens.

Simulation:Use the browser's developer tools to reduce the viewport width from $1200\text{px}$ down to $500\text{px}$.Verify that the .wrapper's rules (width: 90% and max-width: 940px) take effect correctly, and that images (max-width: 100%) do not overflow the page boundaries.

## C. Update Style
The work primarily involved the following CSS adjustments:

### Color Palette Shift: 
Switched the entire palette to off-white/beige backgrounds (#f7f7f5) to mimic aged paper, paired with deep brown/ink colors (#333333, #5A4A3E) for text and structural elements. All neon colors were removed.

### Typography: 
Adopted classic serif fonts (Georgia, 'Times New Roman') for the body text to enhance readability and the retro feel of a printed broadsheet.

### Accents: 
Used sepia-toned browns (#A08C75) for links and subtitles, while implementing heavy, solid brown borders to give the wrapper and header a sturdy, editorial print quality.

### Layout Integrity: 
Crucially, the transformation was achieved without altering the core float layout or responsiveness of the columns.