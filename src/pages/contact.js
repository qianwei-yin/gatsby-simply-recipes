import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const Contact = ({ data }) => {
	return (
		<Layout>
			<SEO title="Contact" />
			<main className="page">
				<section className="contact-page">
					<article className="contact-info">
						<h3>Want To Get In Touch?</h3>
						<p>
							Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
						</p>
						<p>Cardigan prism bicycle rights put a bird on it deep v.</p>
						<p>
							Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights
							cardigan poke.
						</p>
					</article>
					<article>
						<form className="form control-form" action="https://formspree.io/f/xqkoklep" method="POST">
							<div className="form-row">
								<label htmlFor="name">your name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="form-row">
								<label htmlFor="email">your email</label>
								<input type="email" name="email" id="email" />
							</div>
							<div className="form-row">
								<label htmlFor="message">message</label>
								<textarea name="message" id="message" />
							</div>
							<button className="btn block" type="submit">
								submit
							</button>
						</form>
					</article>
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

export default Contact;
