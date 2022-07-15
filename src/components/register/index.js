import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const Register = () => {
    const navigate = useNavigate();
    useEffect(() => {
      var senha = prompt('Essa pagina é restrita somente desenvolverdor pode ter acesso, Digite a senha de segurança');    
      if(senha != 'fabio1022'){       
       navigate('/');
      }
    }, [])
    return (
        <div className="login-card">
            <h1>Cadastro</h1><br />
            <form>
                <input type="text" name="user" placeholder="Nome" />
                <input type="text" name="user" placeholder="Email" />
                <input type="password" name="pass" placeholder="Senha" />
                <input type="submit" name="login" className="login login-submit" value="login" />
            </form>

            <div className="login-help">
                <Link to="/login">Já possuo conta?</Link> - <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
export default Register;