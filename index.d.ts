export declare type ModifiedEasingFn = (x: number, fr?: number) => number;
export declare type Vector2 = [number, number];
export declare type Vector3 = [number, number, number];
export declare type hueArguments = {
    hStart?: number;
    hStartCenter?: number;
    hCycles?: number;
    hEasing?: ModifiedEasingFn;
};
export declare type presetHues = {
    hueList: number[];
};
export declare type saturationArguments = {
    sRange?: Vector2;
    sEasing?: ModifiedEasingFn;
};
export declare type lightnessArguments = {
    lRange?: Vector2;
    lEasing?: ModifiedEasingFn;
};
declare type BaseGenerateColorRampArgument = {
    total?: number;
} & hueArguments & saturationArguments & lightnessArguments;
export declare type GenerateColorRampArgument = BaseGenerateColorRampArgument & {
    hueList?: never;
};
export declare type GenerateColorRampArgumentFixedHues = BaseGenerateColorRampArgument & presetHues;
/**
 * Generates a color ramp based on the HSL color space.
 * @param {GenerateColorRampArgument} args - The arguments to generate the ramp.
 * @returns {Array<number>} - The color ramp.
 */
export declare function generateColorRamp(args: GenerateColorRampArgument): Vector3[];
export declare function generateColorRamp(args: GenerateColorRampArgumentFixedHues): Vector3[];
export declare function shuffleArray<T>(array: T[], rndFn?: () => number): T[];
export declare type colorHarmony = "complementary" | "splitComplementary" | "triadic" | "tetradic" | "analogous";
export declare type colorHarmonyFn = (h: number) => number[];
/**
 * Generates a list of hues based on a color harmony.
 * @param {number} h - The base hue.
 * @param {colorHarmony} harmony - The color harmony.
 * @returns {Array<number>} - The list of hues.
 */
export declare const colorHarmonies: {
    [key in colorHarmony]: colorHarmonyFn;
};
export declare type uniqueRandomHuesArguments = {
    startHue?: number;
    total?: number;
    minHueDiffAngle?: number;
    rndFn?: () => number;
};
/**
 * Generates a list of unique hues.
 * @param {uniqueRandomHuesArguments} args - The arguments to generate the hues.
 * @returns {Array<number>} - The list of hues.
 */
export declare function uniqueRandomHues({ startHue, total, minHueDiffAngle, rndFn, }?: {
    startHue?: number | undefined;
    total?: number | undefined;
    minHueDiffAngle?: number | undefined;
    rndFn?: (() => number) | undefined;
}): number[];
export declare type hxxToCSSxLCHMode = "oklch" | "lch" | "hsl";
/**
 * Converts Hxx (Hue, Chroma, Lightness) values to a CSS `oklch()` color function string.
 *
 * @param {Object} hxx - An object with hue, chroma, and lightness properties.
 * @param {number} hxx.hue - The hue value.
 * @param {number} hxx.chroma - The chroma value.
 * @param {number} hxx.lightness - The lightness value.
 * @returns {string} - The CSS color function string in the format `oklch(lightness% chroma hue)`.
 */
export declare const hxxToCSSxLCH: ([hue, chroma, lightness]?: Vector3, mode?: hxxToCSSxLCHMode) => string;
declare type FillFunction<T> = T extends number ? (amt: number, from: T, to: T) => T : (amt: number, from: T | null, to: T | null) => T;
/**
 * Linearly interpolates between two values.
 *
 * @param {number} amt - The interpolation amount (usually between 0 and 1).
 * @param {number} from - The starting value.
 * @param {number} to - The ending value.
 * @returns {number} - The interpolated value.
 */
export declare const lerp: FillFunction<number>;
/**
 * Scales and spreads an array to the target size using interpolation.
 *
 * @param {Array} initial - The initial array of values.
 * @param {number} targetSize - The desired size of the resulting array.
 * @param {function} fillFunction - The interpolation function (default is lerp).
 * @returns {Array} The scaled and spread array.
 * @throws {Error} If the initial array is empty or target size is invalid.
 */
export declare const scaleSpreadArray: <T>(initial: T[], targetSize: number, fillFunction?: FillFunction<T>) => T[];
export declare const generateColorRampParams: {
    total: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    hStart: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    hCycles: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    hStartCenter: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    minLight: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    maxLight: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    minSaturation: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    maxSaturation: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
};
export {};
