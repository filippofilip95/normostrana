import Navigation from '../src/ui/features/Navigation/Navigation';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Navigation', () => {
	test('Navigation renders 3 nav items', () => {
		const context = shallow(<Navigation />);
		expect(context.find('h1').text()).toBe('Preact Main');
		expect(context.find(<Link />).length).toBe(3);
	});
});
