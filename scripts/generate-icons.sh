svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-grey.js -d src/icons/valentine-grey --ext tsx assets/valentine-grey
svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/icons/valentine-color --ext tsx assets/valentine-color

svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-grey.js -d src/icons/virtual-reality-grey --ext tsx assets/virtual-reality-grey
svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/icons/virtual-reality-color --ext tsx assets/virtual-reality-color

svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-grey.js -d src/icons/zoo-grey --ext tsx assets/zoo-grey
svgr --template scripts/svgr-template.js --config-file scripts/.svgrrc-color.js -d src/icons/zoo-color --ext tsx assets/zoo-color
node scripts/generate-icons.js
