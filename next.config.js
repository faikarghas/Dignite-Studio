const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
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

module.exports = withPlugins([
	withCSS,
	withSass,
	withImages,
	withBundleAnalyzer,
	withEnv
])