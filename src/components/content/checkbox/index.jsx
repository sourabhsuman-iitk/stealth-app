import "../styles.css";
const CheckBox = ({ label }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        padding: "8px 0",
      }}
    >
      <label className="container">
        {label}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CheckBox;
