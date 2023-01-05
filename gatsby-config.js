/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require('dotenv').config({
	path: `.env`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: 'Simply Recipes',
		description: 'nice and clean recipes site',
		author: '@qianwei',
		person: { name: 'qianwei', age: 21 },
		simpleData: ['item 1', 'item 2'],
		complexData: [
			{ name: 'qianwei', age: 21 },
			{ name: 'susan', age: 24 },
		],
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `rohx8imdd33t`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Montserrat',
							variants: ['400'],
						},
						{
							family: 'Inconsolata',
							variants: ['400', '500', '600', '700'],
						},
					],
				},
			},
		},
		`gatsby-plugin-react-helmet`,
	],
};
