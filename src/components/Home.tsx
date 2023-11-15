import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <>
      <div className="Home-main">
        <div className="hot-content-details">
          <h1>Heard of home cosmetics?</h1>
          <p>No? Let's try them! Shall we ?</p>
          <Link to="shop"><button>Shop Now</button></Link>
        </div>
        <img src="/background.jpg" alt="background" />
      </div>
    </>
  );
}
