
const { name, version } = require("./package.json")

const CDN_PROVIDER = "https://cdn.jsdelivr.net/npm"
const URL_PREFIX = `${CDN_PROVIDER}/${name}@${version}` // https://cdn.jsdelivr.net/npm/@librescore/sf3@ver

// file URLs
module.exports.TimGM6mb    = `${URL_PREFIX}/TimGM6mb.sf3.wasm`
module.exports.FluidR3Mono = `${URL_PREFIX}/FluidR3Mono_GM.sf3.wasm`
module.exports.MSBasic     = `${URL_PREFIX}/MuseScore_General_Lite.sf3.wasm`
