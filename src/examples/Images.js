// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import React from 'react';
import styled from 'styled-components';
import big from '../assets/images/big.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Images = () => {
	return (
		<Wrapper>
			<article>
				<h4>constrained / default</h4>
				<StaticImage
					src="../assets/images/recipe-1.jpeg"
					alt="food"
					height={400}
					placeholder="tracedSVG"
					layout="constrained"
					className="example-img"
					as="section"
				/>
			</article>
			<article>
				<h4>full width</h4>
				<StaticImage
					src="../assets/images/recipe-1.jpeg"
					alt="food"
					placeholder="dominantColor"
					layout="fullWidth"
					className="example-img"
					as="article"
				/>
			</article>
			<article>
				<h4>fixed</h4>
				<StaticImage
					src="../assets/images/recipe-1.jpeg"
					alt="food"
					placeholder="blurred"
					layout="fixed"
					width={200}
					className="example-img"
					as="div"
				/>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	width: 70vw;
	margin: 0 auto;
	display: grid;
	text-align: center;
	gap: 2rem;
	article {
		border: 2px solid red;
	}
	.example-img {
		border-radius: 1rem;
	}
	/* @media (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
	} */
`;

export default Images;
