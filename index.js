import imagemin from 'imagemin'
import webp from 'imagemin-webp'

const outputDirectory = './images/webp'
const convert = async () => {
  await imagemin(['images/*.png'], {
    destination: outputDirectory,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs converted')

  await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputDirectory,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('JPGs and JPEGs converted')
}

await convert()