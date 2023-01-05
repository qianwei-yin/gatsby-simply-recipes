import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const About = ({ data }) => {
	return (
		<Layout>
			<SEO title="About" />
			<main className="page">
				<section className="about-page">
					<article>
						<h2>I'm baby coloring book poke taxidermy</h2>
						<p>
							Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi
							biodiesel chia.
						</p>
						<p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
						<Link to="/contact" className="btn">
							contact
						</Link>
					</article>
					<StaticImage
						src="../assets/images/about.jpeg"
						alt="person pouring salt in bowl"
						className="about-img"
						placeholder="blurred"
					/>
				</section>
				<section className="featured-recipes">
					<h5>Look at this AwesomeSouce!</h5>
					<RecipesList recipes={data.allContentfulRecipe.nodes} />
				</section>
			</main>
		</Layout>
	);
};

// For PAGE query, we don't need use hook to get the data. Just straightly use the prop!
// Should write the export keyword!!!
export const query = graphql`
	query {
		allContentfulRecipe(sort: { title: ASC }, filter: { featured: { eq: true } }) {
			nodes {
				title
				prepTime
				cookTime
				id
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;

export default About;
