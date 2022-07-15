import { Link  } from 'react-router-dom';

const Header = () => {
    return (
        <div className="nav-down">
            <nav id="menu-h">
                <ul>
                    <li>
                        <Link  to='/' >
                            Home
                        </Link>
                    </li>

                    <li><Link to="/projetos">Portfolio</Link></li>

                    <li><a href="https://github.com/fabiojr933" target="_blank">GitHub</a></li>

                    <li><a href="https://api.whatsapp.com/send?phone=5566999539490" target="_blank">Contato</a></li>

                    <li><Link to="/login">Entrar</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;