import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Pruebas en <DashboardRoutes />", () => {
 const contextValue = {
  user: {
   logged: true,
   name: "Fulanito",
  }
 };
  test("debe de mostrarse correctamente - Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
   );
   
   expect(wrapper).toMatchSnapshot();
   expect(wrapper.find('.text-info').text().trim()).toBe('Fulanito');
   expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen')
  }); // cierre test 1
 
  test("debe de mostrarse correctamente - DC", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
   );
   
   expect(wrapper).toMatchSnapshot();
   expect(wrapper.find('h1').text().trim()).toBe('DC Screen')
  }); // cierre test 2
}); // cierre describe
