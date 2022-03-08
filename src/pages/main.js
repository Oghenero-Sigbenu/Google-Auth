import '../styles/App.css';
import Banner1 from "../assests/images/banner1.jpeg";

function Home() {

  return (
    <div className="home">
        <div className='banner'>
            <img src={Banner1} alt="home banner"/>
        </div>
    </div>
  );
}

export default Home;
