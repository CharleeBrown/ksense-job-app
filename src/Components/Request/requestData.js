
import './request.css';
const users = [];
function getData(){
  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json)
        .then(data =>console.log(data))
        };

function RequestData() {
  return (
    <div className="ReqDiv">
      <header className="Req-header" onLoad={getData()}>
        
      </header>
    </div>
  );
}

export default Request;
