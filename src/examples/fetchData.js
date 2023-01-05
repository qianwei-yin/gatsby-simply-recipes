import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
	query {
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

const FetchData = () => {
	const data = useStaticQuery(getData);
	return <div>fetchData</div>;
};

export default FetchData;
