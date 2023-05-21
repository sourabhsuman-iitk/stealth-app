import SearchIcon from '../../../assets/icons/search.png'

const SearchBar = ({setSearchTerm}) => {
    const handleSetSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
      <div
        style={{
          width: "220px",
          background: "white",
          display: "flex",
          borderRadius: "4px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "8px 12px",
          border: "1.5px solid #A9B5DA",
        }}
      >
        <img style={{ width: "14px" }} src={SearchIcon} alt="settings" />
        <input
          style={{
            width: "100%",
            border: "none",
            boxShadow: "none",
            color: "#7C8DC1",
            paddingLeft: "8px",
            fontSize: "14px",
          }}
          type="text"
          placeholder="Search by name"
          onChange={handleSetSearchTerm}
        />
      </div>
    );
}

export default SearchBar;