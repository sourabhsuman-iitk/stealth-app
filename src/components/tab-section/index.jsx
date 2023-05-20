import StealthLogo from "../../assets/icons/stealth-logo.png";
import SectionList from "./section-list";
const TabSection = () => {
  return (
    <div
      style={{
        flex: "1",
        boxShadow: "0 2px 8px #636363",
        borderRight: "1px solid #DCE0E3",
        padding: "0 14px",
      }}
    >
      <div
        style={{
          padding: "21px 32px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottom: "1px solid #DCE0E3",
        }}
      >
        <img style={{ width: "44px" }} src={StealthLogo} alt="logo" />
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            paddingLeft: "7px",
          }}
        >
          Stealth
        </div>
      </div>
      <SectionList />
    </div>
  );
};

export default TabSection;
