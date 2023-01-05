import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import setupTags from '../utils/setupTags';
import { Link, graphql } from 'gatsby';
import slugify from 'slugify';
import SEO from '../components/SEO';

const Tags = ({ data }) => {
	const newTags = setupTags(data.allContentfulRecipe.nodes);

	return (
		<Layout>
			<SEO title="Tags" />
			<main className="page">
				<section className="tags-page">
					{newTags.map((tag, index) => {
						const [text, value] = tag;
						const tagSlug = slugify(text, { lower: true });
						return (
							<Link to={`/tags/${tagSlug}`} className="tag" key={index}>
								<h5>{text}</h5>
								<p>{value} recipes</p>
							</Link>
						);
					})}
				</section>
			</main>
		</Layout>
	);
};

export const query = graphql`
	query {
		allContentfulRecipe(sort: { title: ASC }) {
			nodes {
				content {
					tags
				}
			}
		}
	}
`;

export default Tags;
