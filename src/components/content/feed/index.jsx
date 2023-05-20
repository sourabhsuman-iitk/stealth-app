import Table from "../table";

const Feed = () => {
    return <div 
    style={{
        background: 'white',
        marginTop: '15px',
        height: '450px',
        overflow: 'hidden',
        overflowY: 'scroll',
        borderRadius: '8px',
        boxShadow: '0 2px 8 0 #636363',
        padding: '19px 25px'
    }}>
        <div style={{
            fontSize: '22px',
            color: '#404965',
        }}>
            All Items
        </div>
        <Table />
    </div>
}

export default Feed;