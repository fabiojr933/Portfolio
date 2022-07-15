import './style.css';
import Projetos from '../../components/projeto';
import Header from '../../components/curriculo/header';

function Projeto() {
    return (
        <>
            < Header />
            <div className="main">             
                <Projetos />
            </div>

        </>
    );
}

export default Projeto;
