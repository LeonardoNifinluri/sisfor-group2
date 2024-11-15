import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import DashboardOwner from './pages/owner-user/DashboardOwner';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
import AddBoardingHouse from './pages/owner-user/AddBoardingHouse';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Search from './pages/general/Search';
import Information from './pages/general/Information';
import DashboardOrdinary from './pages/ordinary-user/DashboardOrdinary';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/lala">
          <Search/>
        </Route>
        <Route exact path="/rency">
          <Information />
        </Route>
        <Route exact path="/wahyu">
          {/* isi dengan nama page mu wahyu */}
          <DashboardOwner></DashboardOwner>
        </Route>
        <Route exact path="/ali">
          {/* isi dengan nama page mu ali */}
          <AddBoardingHouse />
        </Route>
        <Route exact path="/home/OWNER/:userId">
          {/* ini OWNER dashboard */}
          <DashboardOwner />
        </Route>
        <Route exact path="/home/ORDINARY/:userId">
          {/* ini ordinary dashboard */}
          <DashboardOrdinary />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
