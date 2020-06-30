import { getChatSource } from '../utils/source';

function HomePage() {
    const data = getChatSource();
    return (<div>
        <div style={{
		    width:'200px',
		    height:'80px',
		    backgroundColor:'yellow',    　　　　
		    fontSize:'24px',    　　　　
		    textAlign:'center'   　　　　
		}}>
        	<span>&lt;</span>
        	<img src='https://static.it1352.com/Content/img/login_register.png' alt=""/>
        </div>
        {
            data.map((item, index) => <div key={index.toString()}>{item.msg}</div>)
        }
    </div>);
}

export default HomePage;