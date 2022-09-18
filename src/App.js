import Authentication from './Authentication/Authentication';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';

function App() {
	return (
		<main className='container d-flex justify-content-end'>
			<TermsAndConditions />
			<Authentication />
		</main>
	);
}

export default App;
