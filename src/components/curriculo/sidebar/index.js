export default function Sidebar() {
    return (
        <aside>
            <info>
                <h1>Fabio Junior Pereira</h1>
                <ul>
                    <li><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                        fabiojr933@gmail.com</li>
                    <li><i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
                        (66) 9-9953-9490</li>
                    <li><i className="fa fa-linkedin-square fa-lg fa-fw" aria-hidden="true"></i>
                        https://www.linkedin.com/in/fabiojrp/</li>
                    <li><i className="fa fa-github-alt fa-lg fa-fw" aria-hidden="true"></i>
                        @fabio.pereira.93</li>
                    <li><i className="fa fa-codepen fa-lg fa-fw" aria-hidden="true"></i>
                        https://github.com/fabiojr933/</li>
                </ul>
            </info>
            <section className="about">
                <h3>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    Sobre mim
                </h3>
                <div id="aboutme">
                    <p>Sou entusiasta da área de tecnologia, amo desafios e inovação, e sou apaixonado por programação. Atualmente sou tecnólogo em Analise e
                        desenvolvimento de sistema. e paralelamente tenho feito diversos cursos com enfase em javascript e PHP, tanto no back-end com nodeJS como
                        no front-end e mobile com React e Bootstrap e banco de dados Postgres, Mysql, Firebird. Caso queira conhecer,
                        possuo alguns projetos em meus repositórios do GitHub como SPAs, APPs e APIs.
                    </p>
                </div>
            </section>
        </aside>
    );
}