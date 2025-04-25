import { Colorscheme } from "../src/index";

const header = `/* THIS FILE IS AUTO GENERATED. DO NOT EDIT! */

:root {`;

const footer = `}`;

function main() {
  console.log(header);
  for (const name of Object.keys(Colorscheme)) {
    const hex = Colorscheme[name];
    console.log(`  --colors-${name}: ${hex};`);
  }
  console.log(footer);
}

main();
