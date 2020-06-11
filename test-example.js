const SystemFonts = require('./dist/main').default;

const systemFonts = new SystemFonts();
const fontList = systemFonts.getFontsSyncWithPaths();
console.log(fontList);
console.log(fontList.length, 'fontList.length');