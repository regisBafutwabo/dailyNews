/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: ['static.inshorts.com'],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
