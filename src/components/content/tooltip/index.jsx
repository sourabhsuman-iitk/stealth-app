import React, { useState } from 'react';
import RemoveIcon from '../../../assets/icons/remove.png';
import DeleteIcon from '../../../assets/icons/delete.png';
import CorrectIcon from '../../../assets/icons/correct.png';

const Tooltip = ({ children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="tooltip" style={{
        position: 'relative', display: 'flex'
    }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isTooltipVisible && <div className="tooltip-text" style={{
        position: 'absolute',
        top: '-70px',
        left: '-80px',
        width:'160px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: ' 0 2px 4px 0 rgba(238,243,250, 1)'
      }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: 'rgba(238,243,250, 0.6)',
            overflow: 'hidden',
            padding: '4px 6px'
        }}> 
            <img src={DeleteIcon} style={{height: '10px'}} alt="remove" /> 
            <span style={{
                fontSize: '11px',
                paddingLeft: '6px'
            }}>
                    Remove
            </span>
         </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%',  padding: '10px',}}> 
            <span style={{
                fontSize: '13px', paddingRight: '20px'
            }}>
            Are you sure?
            </span>
            <img src={RemoveIcon} style={{height: '12px', paddingLeft: '5px'}} alt="remove" /> 
            <img src={CorrectIcon} style={{height: '12px', paddingLeft: '5px'}} alt="remove" />
        </div> 
    </div>}
    </div>
  );
};

export default Tooltip;