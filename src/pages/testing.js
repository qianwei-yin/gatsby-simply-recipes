import React from 'react';
import { graphql } from 'gatsby';

const Testing = ({ data }) => {
	const title = data.site.siteMetadata.title;

	return (
		<div>
			<h1>Testing</h1>
			<h3>The title is: {title}</h3>
		</div>
	);
};

export const data = graphql`
	{
		site {
			siteMetadata {
				author
				description
				simpleData
				title
				complexData {
					age
					name
				}
				person {
					age
					name
				}
			}
		}
	}
`;

export default Testing;
