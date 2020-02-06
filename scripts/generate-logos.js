const fs = require("fs");
const path = require("path");

const generate = (key, logoListForStory) => {
  const logoDir = `./src/logos/${key}`;
  const logoIndexFile = `${logoDir}.tsx`;
  const relativeLogoDir = `../../${key}`;

  let logoIndexOutput = `/**
 * Generated by scripts/generate-logos.js.
 * DO NOT EDIT!
 */

`;

  let logoListOutput = `/**
 * Generated by scripts/generate-logos.js.
 * DO NOT EDIT!
 */

import * as Logos from '${relativeLogoDir}';

export const LOGO_LIST = [
`;

  fs.readdirSync(logoDir).forEach(fileName => {
    const baseName = path.basename(fileName, ".tsx");
    const logoName = `Logo${baseName}`;
    logoIndexOutput += `export { default as ${logoName} }
      from './${key}/${baseName}';
`;
    logoListOutput += `  { logo: Logos.${logoName}, name: '${logoName}' },
`;
  });

  logoListOutput += "];";

  fs.writeFileSync(logoIndexFile, logoIndexOutput);
  fs.writeFileSync(logoListForStory, logoListOutput);
};

generate("bitcoin-color", "./src/logos/__stories__/components/bitcoin-color-list.ts");
generate("misc-color", "./src/logos/__stories__/components/misc-color-list.ts");
generate("vintage-color", "./src/logos/__stories__/components/vintage-color-list.ts");
