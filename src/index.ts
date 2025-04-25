import { lch } from "d3-color";
import type { IntRange } from "type-fest";

/**
 * The type of lightness values.
 *
 * This value is range from 5 to 95 as number.
 */
export type Lightness = IntRange<5, 100, 5>;

/**
 * The type of hue values.
 *
 * This value is range from 0 to 100 as number.
 */
export type Hue = IntRange<0, 100>;

/**
 * The contants value of chroma on lch color spaces.
 */
export const CHROMA: number = 60;

/**
 * The enumurate values of colors.
 *
 * This value means color index on lch color scpaces.
 */
export enum HUE {
  gray = 0,
  red = 9,
  orange = 14,
  yellow = 22,
  rime = 29,
  green = 34,
  cyan = 51,
  sky = 60,
  blue = 76,
  purple = 84,
  magenta = 94,
}

/**
 * Make hexcode of colors by lch color values.
 *
 * @param {Hue} hue - the hue value on lch color ring.
 * @param {Lighness} lightness - the lightness value on lch color.
 * @returns {string} - the hex code like as `#123abc`.
 */
export const toHexCode = (hue: Hue, lightness: Lightness): string =>
  lch(lightness, CHROMA, (360 / 100) * hue).formatHex();

/**
 * The `gray` hex codes.
 */
export const Gray = {
  gray00: "#000000",
  gray05: lch(5, 0, 0).formatHex(),
  gray10: lch(10, 0, 0).formatHex(),
  gray15: lch(15, 0, 0).formatHex(),
  gray20: lch(20, 0, 0).formatHex(),
  gray25: lch(25, 0, 0).formatHex(),
  gray30: lch(30, 0, 0).formatHex(),
  gray35: lch(35, 0, 0).formatHex(),
  gray40: lch(40, 0, 0).formatHex(),
  gray45: lch(45, 0, 0).formatHex(),
  gray50: lch(50, 0, 0).formatHex(),
  gray55: lch(55, 0, 0).formatHex(),
  gray60: lch(60, 0, 0).formatHex(),
  gray65: lch(65, 0, 0).formatHex(),
  gray70: lch(70, 0, 0).formatHex(),
  gray75: lch(75, 0, 0).formatHex(),
  gray80: lch(80, 0, 0).formatHex(),
  gray85: lch(85, 0, 0).formatHex(),
  gray90: lch(90, 0, 0).formatHex(),
  gray95: lch(95, 0, 0).formatHex(),
  gray100: "#ffffff",
} as const;

/**
 * The `red` hex codes.
 */
export const Red = {
  red05: toHexCode(HUE.red, 5),
  red10: toHexCode(HUE.red, 10),
  red15: toHexCode(HUE.red, 15),
  red20: toHexCode(HUE.red, 20),
  red25: toHexCode(HUE.red, 25),
  red30: toHexCode(HUE.red, 30),
  red35: toHexCode(HUE.red, 35),
  red40: toHexCode(HUE.red, 40),
  red45: toHexCode(HUE.red, 45),
  red50: toHexCode(HUE.red, 50),
  red55: toHexCode(HUE.red, 55),
  red60: toHexCode(HUE.red, 60),
  red65: toHexCode(HUE.red, 65),
  red70: toHexCode(HUE.red, 70),
  red75: toHexCode(HUE.red, 75),
  red80: toHexCode(HUE.red, 80),
  red85: toHexCode(HUE.red, 85),
  red90: toHexCode(HUE.red, 90),
  red95: toHexCode(HUE.red, 95),
} as const;

/**
 * The `orange` hex codes.
 */
export const Orange = {
  orange05: toHexCode(HUE.orange, 5),
  orange10: toHexCode(HUE.orange, 10),
  orange15: toHexCode(HUE.orange, 15),
  orange20: toHexCode(HUE.orange, 20),
  orange25: toHexCode(HUE.orange, 25),
  orange30: toHexCode(HUE.orange, 30),
  orange35: toHexCode(HUE.orange, 35),
  orange40: toHexCode(HUE.orange, 40),
  orange45: toHexCode(HUE.orange, 45),
  orange50: toHexCode(HUE.orange, 50),
  orange55: toHexCode(HUE.orange, 55),
  orange60: toHexCode(HUE.orange, 60),
  orange65: toHexCode(HUE.orange, 65),
  orange70: toHexCode(HUE.orange, 70),
  orange75: toHexCode(HUE.orange, 75),
  orange80: toHexCode(HUE.orange, 80),
  orange85: toHexCode(HUE.orange, 85),
  orange90: toHexCode(HUE.orange, 90),
  orange95: toHexCode(HUE.orange, 95),
} as const;

/**
 * The `yellow` hex codes.
 */
export const Yellow = {
  yellow05: toHexCode(HUE.yellow, 5),
  yellow10: toHexCode(HUE.yellow, 10),
  yellow15: toHexCode(HUE.yellow, 15),
  yellow20: toHexCode(HUE.yellow, 20),
  yellow25: toHexCode(HUE.yellow, 25),
  yellow30: toHexCode(HUE.yellow, 30),
  yellow35: toHexCode(HUE.yellow, 35),
  yellow40: toHexCode(HUE.yellow, 40),
  yellow45: toHexCode(HUE.yellow, 45),
  yellow50: toHexCode(HUE.yellow, 50),
  yellow55: toHexCode(HUE.yellow, 55),
  yellow60: toHexCode(HUE.yellow, 60),
  yellow65: toHexCode(HUE.yellow, 65),
  yellow70: toHexCode(HUE.yellow, 70),
  yellow75: toHexCode(HUE.yellow, 75),
  yellow80: toHexCode(HUE.yellow, 80),
  yellow85: toHexCode(HUE.yellow, 85),
  yellow90: toHexCode(HUE.yellow, 90),
  yellow95: toHexCode(HUE.yellow, 95),
} as const;

/**
 * The `rime` hex codes.
 */
export const Rime = {
  rime05: toHexCode(HUE.rime, 5),
  rime10: toHexCode(HUE.rime, 10),
  rime15: toHexCode(HUE.rime, 15),
  rime20: toHexCode(HUE.rime, 20),
  rime25: toHexCode(HUE.rime, 25),
  rime30: toHexCode(HUE.rime, 30),
  rime35: toHexCode(HUE.rime, 35),
  rime40: toHexCode(HUE.rime, 40),
  rime45: toHexCode(HUE.rime, 45),
  rime50: toHexCode(HUE.rime, 50),
  rime55: toHexCode(HUE.rime, 55),
  rime60: toHexCode(HUE.rime, 60),
  rime65: toHexCode(HUE.rime, 65),
  rime70: toHexCode(HUE.rime, 70),
  rime75: toHexCode(HUE.rime, 75),
  rime80: toHexCode(HUE.rime, 80),
  rime85: toHexCode(HUE.rime, 85),
  rime90: toHexCode(HUE.rime, 90),
  rime95: toHexCode(HUE.rime, 95),
} as const;

/**
 * The `green` hex codes.
 */
export const Green = {
  green05: toHexCode(HUE.green, 5),
  green10: toHexCode(HUE.green, 10),
  green15: toHexCode(HUE.green, 15),
  green20: toHexCode(HUE.green, 20),
  green25: toHexCode(HUE.green, 25),
  green30: toHexCode(HUE.green, 30),
  green35: toHexCode(HUE.green, 35),
  green40: toHexCode(HUE.green, 40),
  green45: toHexCode(HUE.green, 45),
  green50: toHexCode(HUE.green, 50),
  green55: toHexCode(HUE.green, 55),
  green60: toHexCode(HUE.green, 60),
  green65: toHexCode(HUE.green, 65),
  green70: toHexCode(HUE.green, 70),
  green75: toHexCode(HUE.green, 75),
  green80: toHexCode(HUE.green, 80),
  green85: toHexCode(HUE.green, 85),
  green90: toHexCode(HUE.green, 90),
  green95: toHexCode(HUE.green, 95),
} as const;

/**
 * The `cyan` hex codes.
 */
export const Cyan = {
  cyan05: toHexCode(HUE.cyan, 5),
  cyan10: toHexCode(HUE.cyan, 10),
  cyan15: toHexCode(HUE.cyan, 15),
  cyan20: toHexCode(HUE.cyan, 20),
  cyan25: toHexCode(HUE.cyan, 25),
  cyan30: toHexCode(HUE.cyan, 30),
  cyan35: toHexCode(HUE.cyan, 35),
  cyan40: toHexCode(HUE.cyan, 40),
  cyan45: toHexCode(HUE.cyan, 45),
  cyan50: toHexCode(HUE.cyan, 50),
  cyan55: toHexCode(HUE.cyan, 55),
  cyan60: toHexCode(HUE.cyan, 60),
  cyan65: toHexCode(HUE.cyan, 65),
  cyan70: toHexCode(HUE.cyan, 70),
  cyan75: toHexCode(HUE.cyan, 75),
  cyan80: toHexCode(HUE.cyan, 80),
  cyan85: toHexCode(HUE.cyan, 85),
  cyan90: toHexCode(HUE.cyan, 90),
  cyan95: toHexCode(HUE.cyan, 95),
} as const;

/**
 * The `sky` hex codes.
 */
export const Sky = {
  sky05: toHexCode(HUE.sky, 5),
  sky10: toHexCode(HUE.sky, 10),
  sky15: toHexCode(HUE.sky, 15),
  sky20: toHexCode(HUE.sky, 20),
  sky25: toHexCode(HUE.sky, 25),
  sky30: toHexCode(HUE.sky, 30),
  sky35: toHexCode(HUE.sky, 35),
  sky40: toHexCode(HUE.sky, 40),
  sky45: toHexCode(HUE.sky, 45),
  sky50: toHexCode(HUE.sky, 50),
  sky55: toHexCode(HUE.sky, 50),
  sky60: toHexCode(HUE.sky, 60),
  sky65: toHexCode(HUE.sky, 65),
  sky70: toHexCode(HUE.sky, 70),
  sky75: toHexCode(HUE.sky, 75),
  sky80: toHexCode(HUE.sky, 80),
  sky85: toHexCode(HUE.sky, 85),
  sky90: toHexCode(HUE.sky, 90),
  sky95: toHexCode(HUE.sky, 95),
} as const;

/**
 * The `blue` hex codes.
 */
export const Blue = {
  blue05: toHexCode(HUE.blue, 5),
  blue10: toHexCode(HUE.blue, 10),
  blue15: toHexCode(HUE.blue, 15),
  blue20: toHexCode(HUE.blue, 20),
  blue25: toHexCode(HUE.blue, 25),
  blue30: toHexCode(HUE.blue, 30),
  blue35: toHexCode(HUE.blue, 35),
  blue40: toHexCode(HUE.blue, 40),
  blue45: toHexCode(HUE.blue, 45),
  blue50: toHexCode(HUE.blue, 50),
  blue55: toHexCode(HUE.blue, 55),
  blue60: toHexCode(HUE.blue, 60),
  blue65: toHexCode(HUE.blue, 65),
  blue70: toHexCode(HUE.blue, 70),
  blue75: toHexCode(HUE.blue, 75),
  blue80: toHexCode(HUE.blue, 80),
  blue85: toHexCode(HUE.blue, 85),
  blue90: toHexCode(HUE.blue, 90),
  blue95: toHexCode(HUE.blue, 95),
} as const;

/**
 * The `purple` hex codes.
 */
export const Purple = {
  purple05: toHexCode(HUE.purple, 5),
  purple10: toHexCode(HUE.purple, 10),
  purple15: toHexCode(HUE.purple, 15),
  purple20: toHexCode(HUE.purple, 20),
  purple25: toHexCode(HUE.purple, 25),
  purple30: toHexCode(HUE.purple, 30),
  purple35: toHexCode(HUE.purple, 35),
  purple40: toHexCode(HUE.purple, 40),
  purple45: toHexCode(HUE.purple, 45),
  purple50: toHexCode(HUE.purple, 50),
  purple55: toHexCode(HUE.purple, 55),
  purple60: toHexCode(HUE.purple, 60),
  purple65: toHexCode(HUE.purple, 65),
  purple70: toHexCode(HUE.purple, 70),
  purple75: toHexCode(HUE.purple, 75),
  purple80: toHexCode(HUE.purple, 80),
  purple85: toHexCode(HUE.purple, 85),
  purple90: toHexCode(HUE.purple, 90),
  purple95: toHexCode(HUE.purple, 95),
} as const;

/**
 * The `magenta` hex codes.
 */
export const Magenta = {
  magenta05: toHexCode(HUE.magenta, 5),
  magenta10: toHexCode(HUE.magenta, 10),
  magenta15: toHexCode(HUE.magenta, 15),
  magenta20: toHexCode(HUE.magenta, 20),
  magenta25: toHexCode(HUE.magenta, 25),
  magenta30: toHexCode(HUE.magenta, 30),
  magenta35: toHexCode(HUE.magenta, 35),
  magenta40: toHexCode(HUE.magenta, 40),
  magenta45: toHexCode(HUE.magenta, 45),
  magenta50: toHexCode(HUE.magenta, 50),
  magenta55: toHexCode(HUE.magenta, 55),
  magenta60: toHexCode(HUE.magenta, 60),
  magenta65: toHexCode(HUE.magenta, 65),
  magenta70: toHexCode(HUE.magenta, 70),
  magenta75: toHexCode(HUE.magenta, 75),
  magenta80: toHexCode(HUE.magenta, 80),
  magenta85: toHexCode(HUE.magenta, 85),
  magenta90: toHexCode(HUE.magenta, 90),
  magenta95: toHexCode(HUE.magenta, 95),
} as const;

/**
 * The all hex codes.
 */
export const Colorscheme: Record<string, string> = {
  ...Gray,
  ...Red,
  ...Orange,
  ...Yellow,
  ...Rime,
  ...Green,
  ...Cyan,
  ...Sky,
  ...Blue,
  ...Purple,
  ...Magenta,
} as const;
