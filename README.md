# Hero App

## Elis Antonio Pérez

### React JS, Web.

- Inicial proyect
- Creating first router
- ClassName with isActive
  - className={({isActive} => 'name-class' + (isActive ? ' active' : ''))}
- Creating second router.
- Navigate push/replace.
  - useNavigate.
- Hero list.
- Hero information cards.
- Read arguments by URL.
- Hero component styling.
- Note about useMemo.
  - useMemo in getHeroById() and getHeroByPublisher()
- Animations in our component.
  - animate.style
- SearchComponent.
- Show list of heroes.
- Apply hero filter.
  - QueryString.
- Show conditional message and useMemo().

#### Proteccion de rutas
- Creacion de carpetas auth y types
- Context and Reducer of my app.
- Provide global state of the app.
- User login.
- User logout.
- Private Route.
- Public Route.
- Remember the last page visited.
  - useLocation.
  - localStorage.setItem and getItem

#### Testing
- Install and configure Enzyme.
- Tests in the authReducer.
- Tests in the AppRouter.
  - Should show login if not authenticated.
  - Authenticated user.
- Tests in the DashboardRoutes.
  - Tests routes inside DashboardRoutes.
- Tests in the SearchScreen.
  - Tests with the queryParameters.
  - Mock of functions and requerActual.