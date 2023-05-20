import FileLogo from '../../../assets/icons/file-icon.png'
const SectionList = () => {
    return <div> 
        <div style={{
            margin: '14px 0',
            borderRadius: '4px',
            padding: '8px 16px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F0F3FC',
            cursor: 'pointer'
        }}>
            <img style={{width: '30px'}} src={FileLogo} alt='file-logo'/>
            <span style={{
                color: '#272F48',
                fontSize: '16px',
                paddingLeft: '12px',
            }}> File Manager</span>
        </div>
    </div>
}

export default SectionList;