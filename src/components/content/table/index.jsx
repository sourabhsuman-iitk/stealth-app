import CheckBox from "../checkbox";
import DeleteIcon from '../../../assets/icons/delete.png'
import EditIcon from '../../../assets/icons/edit.png'
import Tooltip from "../tooltip";
import { useFetchFiles } from "../../../hooks/use-fetch-files";


const Table = () => {
const filesData = useFetchFiles();
const getFormattedTime = (unformattedTime) => {
    const date = new Date(unformattedTime);
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = formattedDate.replace(/(\d+)(th|nd|rd|st)/, "$1$2,");
    return formattedTime;
}

const options = {
  year: "2-digit",
  month: "long",
  day: "2-digit",
};


console.log(filesData);
  return (
    <table style={{
        height: 'auto'
    }}>
        <thead>
            <tr style={{
                fontSize: '16px',
                color: '#576694',
            }}>
                <th style= {{width: '200px'}}><CheckBox label="NAME" />
                </th>
                <th style= {{width: '50px', paddingRight: '20px'}}>OWNER</th>
                <th style= {{width: '50px', paddingRight: '20px'}}>LABELS</th>
                <th style= {{width: '60px', paddingRight: '30px'}}>TYPE</th>
                <th style= {{width: '90px', paddingRight: '20px'}}>MODIFIED</th>
                <th style= {{width: '70px'}}>ACTION</th>
            </tr>
        </thead>
        {filesData && filesData.map((data) => {
            return (
                <>
                <tbody id={data.id} style={{
                        color: '#576694',
                }}>
                    <tr>
                    <td style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <CheckBox label="" />
                        <img style={{marginTop: '20px' ,width: '38px', height: '38px', borderRadius: '5px', overflow: 'hiddden'}} src={data.file} alt="file" />
                        <div style={{
                            paddingTop: '20px', paddingLeft: '10px', width: '100px', textOverflow: 'ellipsis', overflow: 'hidden'
                        }}>
                            {data.Name}
                        </div>
                    </td>
                    <td style={{
                            paddingTop: '20px'
                        }}>
                        <img style={{marginTop: '0' ,width: '38px', height: '38px', borderRadius: '50%', overflow: 'hiddden'}} src={data.file} alt="file" />
                        </td>
                    <td style={{
                            paddingTop: '20px'
                        }}>Label {data.id}</td>
                    <td style={{
                            paddingTop: '20px'
                        }}>{data.Type}</td>
                    <td style={{
                            paddingTop: '20px'
                        }}>{getFormattedTime(data.ModifietAt)}</td>
                    <td style={{
                            paddingTop: '20px',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}>
                            <img style={{width: '15px'}} src={EditIcon} alt='settings'/>
                            <Tooltip >
                                <img style={{width: '15px', paddingLeft: '12px'}} src={DeleteIcon} alt='settings'/>
                            </Tooltip>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </>
            )
        })}
    </table>
  );
};

export default Table;