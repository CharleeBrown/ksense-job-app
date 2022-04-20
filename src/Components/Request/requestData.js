
import './request.css';
const users = [];
function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log("id"+json['id'])); 
}



function RequestData() {
  return (
    <div className="ReqDiv">
      <header className="Req-header" onLoad={getData()}>
        
      </header>
    </div>
  );
}

export default Request;
