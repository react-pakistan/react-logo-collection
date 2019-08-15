svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/logos/bitcoin-color --ext tsx assets/bitcoin-color
svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/logos/vintage-color --ext tsx assets/vintage-color
node scripts/generate-logos.js
