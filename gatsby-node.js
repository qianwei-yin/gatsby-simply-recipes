// everytime edit something in this gatsby-node file, need to restart the server.

const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// since this is a node file but not a react component, the syntax is going to be a little different
	const result = await graphql(`
		query GetTagRecipes {
			allContentfulRecipe {
				nodes {
					content {
						tags
					}
				}
			}
		}
	`);

	result.data.allContentfulRecipe.nodes.forEach((node) => {
		node.content.tags.forEach((tag) => {
			const tagSlug = slugify(tag, { lower: true });
			createPage({
				path: `/tags/${tagSlug}`,
				component: path.resolve(`src/templates/tag-template.js`),
				context: {
					tag: tag,
				},
			});
		});
	});
};
