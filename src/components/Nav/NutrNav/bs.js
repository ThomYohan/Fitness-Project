class Submenu extends React.Component {
    render() {
        return (
            <ul className="nav__submenu">
                <li className="nav__submenu-item ">
                    <a>Our Company</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Our Team</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Our Portfolio</a>
                </li>
            </ul>
        )
    }
}


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = () => {
        this.setState({ showAboutMenu: true });
    };

    handleLeave = () => {
        this.setState({ showAboutMenu: false });
    };

    render() {
        return (
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__menu-item">
                        <a>Home</a>
                    </li>
                    <li
                        className="nav__menu-item"
                        onMouseLeave={this.handleLeave}
                    >
                        <a onMouseEnter={this.handleHover}>
                            About</a>
                        {this.state.showAboutMenu && <Submenu />}
                    </li>
                    <li className="nav__menu-item">
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById("menu-container")
);


{/* <div className='home'>
                        <Link to='/private'>
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className='goals'>
                        <Link to='/goals'>
                            <button className="goalsButton">Goals</button>
                        </Link>
                    </div>
                    <div className='check-in'>
                        <Link to='/check-in'>
                            <button className="checkinButton">Check-in</button>
                        </Link>
                    </div>
                    <div className='reports'>
                        <Link to='/reports'>
                            <button className="reportsButton">Reports</button>
                        </Link>
                    </div> */}
                    {/* <div className='profile'>
                    <Link to='/profile'>
                        <button>Profile</button>
                    </Link>
                </div> */}
                    {/* <div>
                    <Link to='/'>
                        <button>Logout</button>
                    </Link>
                </div> */}
                    {/* <div>
                    <Link to='/reports/food'>

                    </Link>
                </div>
                <div>
                    <Link to='/reports/exercise'>
                    
                    </Link>
                </div> */}