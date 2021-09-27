const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  }
})
