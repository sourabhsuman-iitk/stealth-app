import SettingsIcon from "../../../assets/icons/settings.png";
import { useFetchCategories } from "../../../hooks/use-fetch-categories";
import CheckBox from "../checkbox";

const CategoriesSection = () => {
  const categoriesData = useFetchCategories();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "57px 0",
        flex: 1.5,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            color: "#404965",
            paddingRight: "19px",
          }}
        >
          CATEGORIES
        </span>
        <img style={{ width: "16px" }} src={SettingsIcon} alt="settings" />
      </div>
      {categoriesData &&
        categoriesData.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                paddingTop: "17px",
              }}
            >
              <div style={{ fontSize: "15px", color: "#404965" }}>
                {data.Name}
              </div>
              {data.Labels.map((labelData) => {
                return <CheckBox label={labelData.Name} />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default CategoriesSection;
