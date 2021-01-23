import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const menus = [
  { title: 'Singles', items: [{ title: 'Expansion Sets', url: '/singles/expansion' }, { title: 'Core Sets', url: '/singles/core' }, { title: 'Special Sets', url: '/singles/special' }, { title: 'Promo Cards', url: '/singles/promo' }] },
  { title: 'Magic Online', items: [{ title: 'Event Tickets', url: '/magic/events' }] },
  { title: 'Packs y Kits de Inicio', items: [{ title: 'Kits de Inicio', url: '/packs/kits' }, { title: 'Packs de Cartas', url: '/packs/cards' }, { title: 'Mazos', url: '/packs/decks' }] },
  { title: 'Productos Sellados', items: [{ title: 'Magic The Gathering', url: '/sealed/magic' }, { title: 'Yu-Gi-Oh', url: '/sealed/yugioh' }, { title: 'Pokémon', url: '/sealed/pokemon' }] },
  { title: 'Accesorios', items: [{ title: 'Protectores para Mazo', url: '/accessories/protectores' }, { title: 'Cajas Portamazos', url: '/accessories/portamazos' }, { title: 'Carpetas', url: '/accessories/carpetas' }, { title: 'Manteles', url: '/accessories/manteles' }, { title: 'Dados', url: '/accessories/dados' }] },
  { title: 'Muñecos y Maquetas', items: [{ title: 'Muñecos y Maquetas', url: '/maquetas' }] },
]

const MenuNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" style={{ borderRadius: '0rem 0rem 1rem 1rem' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menus.map((menu) => {
              return (
                <NavDropdown style={{ textColor: 'white' }} title={menu.title} id="basic-nav-dropdown">
                  {menu.items.map((submenu) => {
                    return (
                      <NavDropdown.Item href={submenu.url}>{submenu.title}</NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuNavbar;
