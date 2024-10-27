
const LoginPage = () => {
  
  return (
    <div>
      <h2>Bienvenido</h2>
      <p>Por favor inicia sesion</p>

      <form >
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Iniciar sesion</button>
          <button type="button">Olvide mi contraseña?</button>
        </div>

      </form>

    </div>
  )
}

export default LoginPage