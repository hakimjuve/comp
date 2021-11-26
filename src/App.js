import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
<>
<div className="wrapper">
    <div className="profile">
               <ProfilePhoto />
        <div className="overlay">
                <h4><FullName />   </h4>
                 <span><Adress /></span>
        </div>
    </div>
</div>
</>
    </div>
  );
}

export default App;



