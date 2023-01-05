import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import AllRecipes from '../components/AllRecipes';
import SEO from '../components/SEO';

const Recipes = () => {
	return (
		<Layout>
			<SEO title="Recipes" />
			<main className="page">
				<AllRecipes />
			</main>
		</Layout>
	);
};

export default Recipes;
