import './style.css';
import Header from '../../components/curriculo/header';
import Sidebar from '../../components/curriculo/sidebar';
import Experiencia from '../../components/curriculo/experiencia';
import Formacao from '../../components/curriculo/formacao';
import Competencia from '../../components/curriculo/competencia';
import Informação from '../../components/curriculo/informacao';
function Curriculo() {
    return (
        <>
            <Header />
            <title>Currículum Vitae</title>
            <div className="resume">
                <Sidebar />
                <main>
                    <Experiencia />
                    <Formacao />
                    <Competencia />
                    <Informação />
                </main>
            </div>
        </>
    );
}

export default Curriculo;
