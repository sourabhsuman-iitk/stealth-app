import { useState } from "react";
import SearchBar from "../search-bar";
import Table from "../table";
import { useFetchFiles } from "../../../hooks/use-fetch-files";

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = useFetchFiles();

  const filteredData = searchTerm
    ? data.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : data;

  return (
    <div
      style={{
        padding: "0 20px 10px 10px",
        flex: 4,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <div
        style={{
          background: "white",
          marginTop: "15px",
          height: "450px",
          overflow: "hidden",
          overflowY: "scroll",
          borderRadius: "6px",
          boxShadow: "0 2px 8 0 #636363",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "#404965",
          }}
        >
          All Items
        </div>
        <Table data={filteredData} />
      </div>
    </div>
  );
};

export default Feed;
