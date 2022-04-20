
import './request.css';
import {useEffect}  from 'react';
const [users, isLoaded] = useState();
async function getData(){
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json =>  {
      for(let i = 0; i < json.length; i++){
      //users.push(json[i]);
      console.log(json[i]);
      }
    
    }
    );}

    useEffect(() =>{
      getData();
    })



function RequestData() {
  return (
    <div className="ReqDiv">
      <header className="Req-header"  >
        
      </header>
    </div>
  );
}

export default RequestData;
