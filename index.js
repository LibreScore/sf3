
const path = require("path")

// GM (General MIDI) SoundFonts, bundled in each MuseScore version
// https://musescore.org/en/handbook/3/soundfonts-and-sfz-files#gm_soundfonts
// changed the extension name to `.wasm` to benefit from brotli compression on the web

// MuseScore 1
module.exports.TimGM6mb    = path.join(__dirname, "TimGM6mb.sf3.wasm") // converted to `.sf3` using [Polyphone](https://www.polyphone-soundfonts.com/)
// MuseScore 2 (up to version 2.1)
module.exports.FluidR3Mono = path.join(__dirname, "FluidR3Mono_GM.sf3.wasm")
// MuseScore 2 (as of version 2.2), 3, 4
module.exports.MSBasic     = path.join(__dirname, "MuseScore_General_Lite.sf3.wasm")
