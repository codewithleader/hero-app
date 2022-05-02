import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {
	test('debe de mostrarse correctamente con valores por defecto', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<SearchScreen />
			</MemoryRouter>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.alert').text().trim()).toBe(
			'The results will be displayed here...'
		);
	}); // cierre test 1

	test('debe mostrar a Batman y el input con el valor del queryString', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchScreen />
			</MemoryRouter>
		);
		expect(wrapper.find('input').prop('value')).toBe('batman');
		expect(wrapper).toMatchSnapshot();
	}); // cierre test 2

	test('debe mostrar un error si no se encuentra el hero', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=asdfasdf']}>
				<SearchScreen />
			</MemoryRouter>
		);
		expect(wrapper.find('.alert-danger').text().trim()).toBe(
			'No results for: asdfasdf'
		);
	}); // cierre test 3
}); // cierre describe
