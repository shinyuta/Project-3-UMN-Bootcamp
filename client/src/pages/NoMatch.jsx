
const NoMatch = () => {
  return (
    <div>
      <div className="wrapper" style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 10 }}>404 Page Not Found</h1>
        <h1 style={{ marginTop: 0, color: "var(--darkText)" }}>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </div>
    </div>
  );
};

export default NoMatch;
