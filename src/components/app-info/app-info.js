
import './app-info.css';

const AppInfo = ({teamNumber, starsNumber}) => {
  return(
    <div className="app-info">
      <h1>New Hightech Company</h1>
      <h2>Our team : {teamNumber}</h2>
      <h3>Team's stars: {starsNumber}</h3>
    </div>
  );
}

export default AppInfo;