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
  test("debe de mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
   );
   
   expect(wrapper).toMatchSnapshot();
   expect(wrapper.find('.text-info').text().trim()).toBe('Fulanito');
  }); // cierre test 1
}); // cierre describe
