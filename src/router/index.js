
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';


const RouterApp = () => {

    return (
        <Router>
          <AppRoutes />
        </Router>
    )
}
export default RouterApp