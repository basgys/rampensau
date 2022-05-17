# Rampensau

Color palette generation function using hue cycling and easing functions.
## Installation

Rampensau is bundled as both UMD and ES on npm. Install it using npm:

```js
npm install rampensau
```

You can then import rampensau into your project:

```js
// CJS style
let generateRandomColorRamp = require("rampensau");

// ES style: import individual methods
import { generateRandomColorRamp } from "rampensau";
```

## Usage

```js
import { generateHSLRamp } from 'rampensau';

function generateHSLRamp  ({
  total   = 9,                          // number of colors in the ramp
  hCenter = Math.random() * 360,        // hue center at the center of the ramp
  hCycles = 1,                          // number of hue cycles 
                                        // (.5 = 180°, 1 = 360°, 2 = 720°, etc.)
  sRange  = [0.4, 0.35],                // saturation range
  sEasing = (x) => Math.pow(x, 2),      // saturation easing function

  lRange  = [Math.random() * 0.1, 0.9], // lightness range
  lEasing = (x) => Math.pow(x, 1.5),    // lightness easing function
});
```

### generateHSLRamp(Options{})

Function returns an array of colors in HSL format (`[0…360,0…1,0…1]`).

#### Options

- `total` int 3… → Amount of base colors.
- `hCenter` float 0…1 → 0 Red, 180 Teal etc..
- `hCycles` float 0…1 → Number of hue cycles. (.5 = 180°, 1 = 360°, 2 = 720°, etc.)
- `sRange` array [0…1,0…1] → Saturation Range
- `sEasing` function(x) → Saturation easing function
- `lRange` array [0…1,0…1] → Lightness Range
- `lEasing` function(x) → Saturation easing function
