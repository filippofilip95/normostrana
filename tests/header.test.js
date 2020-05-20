import Header from '../src/ui/features/Header';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('Preact Main');
		expect(context.find(<Link />).length).toBe(3);
	});
});
