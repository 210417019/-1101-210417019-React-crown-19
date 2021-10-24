import {Switch, Route} from 'react-router-dom';
import Homepage_19 from './pages/Homepage_19';
import ShopTwo_19 from './pages/ShopTwoPage_19';
import ContactPage_19 from './pages/ContactPage_19';
import SigninPage_19 from './pages/SigninPage_19';
import Header_19 from './components/Header_19';

import './App_19.scss';

function App_19() {
  return (
    <div>
      <Header_19 />
      <Switch>
        <Route exact path='/' component={Homepage_19} />
        <Route exact path='/shop_19' component={ShopTwo_19} />
        <Route exact path='/contact_19' component={ContactPage_19} />
        <Route exact path='/signin_19' component={SigninPage_19} />
      </Switch>
    </div>
  );
}

export default App_19;
