svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-grey.js -d src/icons/zoo-grey --ext tsx assets/zoo-grey
svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/icons/zoo-color --ext tsx assets/zoo-color
node scripts/generate-icons.js
