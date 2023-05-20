const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "white",
        display: "flex",
        paddingTop: "18px",
        paddingLeft: "53px",
        paddingRight: "47px",
        paddingBottom: "18px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          fontSize: "32px",
          color: "#404965",
        }}
      >
        File Manager
      </div>
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#814EE7",
          borderRadius: "4px",
          border: "none",
          fontSize: "16px",
          padding: "11px 23px",
          fontWeight: "800",
          color: "#FFFFFF",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            paddingRight: "7px",
          }}
        >
          +
        </span>
        <span>Upload</span>
      </button>
    </div>
  );
};

export default Header;
