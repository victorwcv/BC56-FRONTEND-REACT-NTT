function ErrorPage() {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>!Oops </h1>
      <p>Algo salio mal</p>
      <p>Por favor, intenta nuevamente mas tarde</p>
    </div>
  );
}

export default ErrorPage;
