import CheckBox from "../checkbox";
import DeleteIcon from "../../../assets/icons/delete.png";
import EditIcon from "../../../assets/icons/edit.png";
import Tooltip from "../tooltip";

const Table = ({ data: filesData }) => {
  const getFormattedTime = (unformattedTime) => {
    const date = new Date(unformattedTime);
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = formattedDate.replace(/(\d+)(th|nd|rd|st)/, "$1$2,");
    return formattedTime;
  };

  const options = {
    year: "2-digit",
    month: "long",
    day: "2-digit",
  };

  return (
    <table
      style={{
        height: "auto",
        boxShadow: "0 2px 8 0 RGBA(99, 99, 99, 0.3)",
      }}
    >
      <thead>
        <tr
          style={{
            fontSize: "14px",
            color: "#576694",
          }}
        >
          <th style={{ width: "20%" }}>
            <CheckBox label="NAME" />
          </th>
          <th style={{ width: "10%", paddingRight: "14px" }}>OWNER</th>
          <th style={{ width: "12%", paddingRight: "18px" }}>LABELS</th>
          <th style={{ width: "12%", paddingRight: "20px" }}>TYPE</th>
          <th style={{ width: "18%", paddingRight: "12px" }}>MODIFIED</th>
          <th style={{ width: "17%" }}>ACTION</th>
        </tr>
      </thead>
      {filesData &&
        filesData.map((data, index) => {
          return (
            <tbody
              key={data.id + index}
              style={{
                color: "#576694",
              }}
            >
              <tr>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CheckBox label="" />
                  <img
                    style={{
                      marginTop: "20px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "5px",
                      overflow: "hiddden",
                    }}
                    src={data.file}
                    alt="file"
                  />
                  <div
                    style={{
                      paddingTop: "20px",
                      paddingLeft: "10px",
                      width: "100px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontSize: "13px",
                    }}
                  >
                    {data.Name}
                  </div>
                </td>
                <td
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "15px",
                  }}
                >
                  <img
                    style={{
                      marginTop: "0",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      overflow: "hiddden",
                    }}
                    src={data.file}
                    alt="file"
                  />
                </td>
                <td
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    fontSize: "13px",
                  }}
                >
                  Label {data.id}
                </td>
                <td
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    fontSize: "13px",
                  }}
                >
                  {data.Type}
                </td>
                <td
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "25px",
                    fontSize: "13px",
                  }}
                >
                  {getFormattedTime(data.ModifietAt)}
                </td>
                <td
                  style={{
                    paddingTop: "20px",
                    width: "17%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "15px" }}
                      src={EditIcon}
                      alt="settings"
                    />
                    <Tooltip>
                      <img
                        style={{ width: "15px", paddingLeft: "12px" }}
                        src={DeleteIcon}
                        alt="settings"
                      />
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};

export default Table;
