const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "white",
        display: "flex",
        paddingTop: "12px",
        paddingLeft: "30px",
        paddingRight: "28px",
        paddingBottom: "12px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #DCE0E3",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          fontSize: "20px",
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
          fontSize: "14px",
          padding: "8px 18px",
          fontWeight: "800",
          color: "#FFFFFF",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: "16px",
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
