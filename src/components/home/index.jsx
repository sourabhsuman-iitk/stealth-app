import Content from "../content";
import Header from "../header";
import TabSection from "../tab-section";

const Home = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            height: '100%',
            width: '100%',
        }}>
            <TabSection />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '5',
                height: '100%',
                width: '100%',
                backgroundColor: '#EEF3FA',
            }}>
                <Header />
                <div style={{
                    width: '100%'
                }}> 
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Home;