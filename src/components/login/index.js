import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="login-card">
            <h1>Login</h1><br />
            <form>
                <input type="text" name="user" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="submit" name="login" className="login login-submit" value="login" />
            </form>

            <div className="login-help">
                <Link to="/register">Não possue conta?</Link> - <Link to="/register">Cadastre-se</Link>
            </div>
        </div>
    )
}
export default Login;