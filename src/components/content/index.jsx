import CategoriesSection from "./categories-section";
import Feed from "./feed";

const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        flexDirection: "row",
        padding: "40px",
      }}
    >
      <CategoriesSection />
      <Feed />
    </div>
  );
};

export default Content;
