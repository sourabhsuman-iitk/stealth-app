import SettingsIcon from '../../assets/icons/settings.png'
import { useFetchCategories } from '../../hooks/use-fetch-categories';
import CheckBox from './checkbox';
import Feed from './feed';
import SearchBar from './search-bar';

const Content = () => {

    const categoriesData = useFetchCategories();
    return <div style={{
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        padding: '40px'
    }}>
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '57px 0',
            flex: 1.5,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <span style={{
                    fontSize: '18px',
                    color: '#404965',
                    paddingRight: '19px'
                }}>
                    CATEGORIES
                </span>
                <img style={{width: '25px'}} src={SettingsIcon} alt='settings'/>
            </div>
            {categoriesData && categoriesData.map((data, index) => {
                return (
                    <div id={index + data.name} style={{
                        paddingTop: '17px'
                    }}>
                        <div style={{ fontSize: '18px',
                            color: '#404965',}}>
                            {data.Name}
                        </div>
                        {
                            data.Labels.map((labelData) => {return <CheckBox label={labelData.Name}/>})
                        }
                    </div>
                )
            }) }
        </div>

        <div style={{
            padding: '0 20px 10px 10px',
            flex: 4,
        }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <SearchBar />
            </div>
            <Feed />

        </div>
    </div>
}

export default Content;