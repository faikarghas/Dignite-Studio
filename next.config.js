const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

require('dotenv').config()

let withEnv = {
	env : {
		API_HOST_API:process.env.API_HOST_API,
		API_HOST_IMG:process.env.API_HOST_IMG
	}
}

// let exportsConfig = {
// 	exportTrailingSlash: true,
// 	exportPathMap: function() {
// 	  return {
// 		'/': { page: '/' }
// 	  };
// 	}
// }

module.exports = withPlugins([
	withImages,
	withBundleAnalyzer,
	withEnv
	// exportsConfig
])