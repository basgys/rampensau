var rampensau = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    colorHarmonies: () => colorHarmonies,
    generateHSLRamp: () => generateHSLRamp,
    generateHSLRampParams: () => generateHSLRampParams,
    hxxToCSSxLCH: () => hxxToCSSxLCH,
    shuffleArray: () => shuffleArray,
    uniqueRandomHues: () => uniqueRandomHues
  });
  function generateHSLRamp({
    total = 9,
    hStart = Math.random() * 360,
    hStartCenter = 0.5,
    hEasing = (x) => x,
    hCycles = 1,
    sRange = [0.4, 0.35],
    sEasing = (x) => Math.pow(x, 2),
    lRange = [Math.random() * 0.1, 0.9],
    lEasing = (x) => Math.pow(x, 1.5),
    hueList
  } = {}) {
    const lDiff = lRange[1] - lRange[0];
    const sDiff = sRange[1] - sRange[0];
    const length = hueList && hueList.length > 0 ? hueList.length : total;
    return Array.from({ length }, (_, i) => {
      const relI = i / (length - 1);
      const fraction = 1 / length;
      return [
        hueList ? hueList[i] : (360 + hStart + (1 - hEasing(relI, fraction) - hStartCenter) * (360 * hCycles)) % 360,
        sRange[0] + sDiff * sEasing(relI, fraction),
        lRange[0] + lDiff * lEasing(relI, fraction)
      ];
    });
  }
  function shuffleArray(array, rndFn = Math.random) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(rndFn() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  }
  var colorHarmonies = {
    complementary: (h) => [h, (h + 180) % 360],
    splitComplementary: (h) => [h, (h + 150) % 360, (h + 210) % 360],
    triadic: (h) => [h, (h + 120) % 360, (h + 240) % 360],
    tetradic: (h) => [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360],
    analogous: (h) => [
      h,
      (h + 30) % 360,
      (h + 60) % 360,
      (h + 90) % 360,
      (h + 120) % 360,
      (h + 150) % 360
    ]
  };
  function uniqueRandomHues({
    startHue = 0,
    total = 9,
    minHueDiffAngle = 60,
    rndFn = Math.random
  } = {}) {
    minHueDiffAngle = Math.min(minHueDiffAngle, 360 / total);
    const baseHue = startHue || rndFn() * 360;
    const huesToPickFrom = Array.from({
      length: Math.round(360 / minHueDiffAngle)
    }, (_, i) => (baseHue + i * minHueDiffAngle) % 360);
    let randomizedHues = shuffleArray(huesToPickFrom, rndFn);
    if (randomizedHues.length > total) {
      randomizedHues = randomizedHues.slice(0, total);
    }
    return randomizedHues;
  }
  var hxxToCSSxLCH = ([hue, chroma, lightness] = [0, 0, 0], mode = "oklch") => `${mode}(${(lightness * 100).toFixed(2)}% ${chroma.toFixed(4)} ${hue.toFixed(2)})`;
  var generateHSLRampParams = {
    hStart: {
      default: 0,
      props: { min: 0, max: 360, step: 0.1 }
    },
    hCycles: {
      default: 1,
      props: { min: -1.25, max: 1.5, step: 1e-3 }
    },
    hStartCenter: {
      default: 0.5,
      props: { min: 0, max: 1, step: 1e-3 }
    },
    minLight: {
      default: Math.random() * 0.2,
      props: { min: 0, max: 1, step: 1e-3 }
    },
    maxLight: {
      default: 0.89 + Math.random() * 0.11,
      props: { min: 0, max: 1, step: 1e-3 }
    },
    total: {
      default: 5,
      props: { min: 4, max: 50, step: 1 }
    },
    minSaturation: {
      default: 0.4,
      props: { min: 0, max: 1, step: 1e-3 }
    },
    maxSaturation: {
      default: 0.35,
      props: { min: 0, max: 1, step: 1e-3 }
    }
  };
  return src_exports;
})();
