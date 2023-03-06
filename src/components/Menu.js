function Menu() {
    const headerMenu = ['Home', 'Orders', 'Clients', 'Results'];

    return (
        <div>
            {headerMenu.map((el, i) =>
                <li key={i}>{el}</li>
            )
            }
        </div>
    );
}
export default Menu;