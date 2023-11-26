import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="container">
      <Header/>
<div className="container">
  <h2>Contextual classNamees</h2>
  <p>Contextual classNamees can be used to color table rows or table cells. The classNamees that can be used are: .active, .success, .info, .warning, and .danger.</p>
  <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>Defaultson</td>
        <td>def@somemail.com</td>
      </tr>      
      <tr className="success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr className="danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr className="info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr className="warning">
        <td>Warning</td>
        <td>Refs</td>
        <td>bo@example.com</td>
      </tr>
      <tr className="active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="container">
  <h2>Horizontal form</h2>
  <form className="form-horizontal" action="/action_page.php">
    <div className="form-group">
      <label className="control-label col-sm-2" for="email">Email:</label>
      <div className="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" for="pwd">Password:</label>
      <div className="col-sm-10">          
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </div>
  </form>
</div>


       <Footer/>
      
    </div>
  );
}

export default App;
