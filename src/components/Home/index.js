import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const HomePage = () => (
	<div>
		<h1>Home</h1>
	</div>
);

//is authenticated?
const condition = authUser => !!authUser;

//below is export with a single hoc, replaced with multiple hoc using recompose
// export default withAuthorization(condition)(HomePage);

export default compose(
	withEmailVerification,
	withAuthorization(condition),
)(HomePage);