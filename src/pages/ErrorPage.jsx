export const ErrorPage = () => {
  const error = {
    backgroundColor: "navy",
    height: "100dvh",
    width: "100%",
    color: "white",
    fontSize: "2rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={error}>
      <h1>Oops! something went wrong try again..👋</h1>
    </div>
  );
};
