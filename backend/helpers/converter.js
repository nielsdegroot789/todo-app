import converter from '@tmcw/togeojson'
import fs from 'fs'
import DOMParser from 'xmldom'

const parsedGPX = new DOMParser.DOMParser().parseFromString(
  fs.readFileSync('./pct-data/CA_Sec_A_tracks.gpx', 'utf8')
)

const geojson = converter.gpx(parsedGPX)
console.log(JSON.stringify(geojson))
export default converter
