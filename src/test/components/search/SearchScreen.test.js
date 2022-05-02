import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";


describe('Pruebas en <SearchScreen />', () => {
 test('debe de mostrarse correctamente con valores por defecto', () => {
  const wrapper = mount(
   <MemoryRouter initialEntries={['/search']}>
    <SearchScreen />
   </MemoryRouter> 
    );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.alert').text().trim()).toBe('The results will be displayed here...');
 }); // cierre test 1
 
}); // cierre describe
