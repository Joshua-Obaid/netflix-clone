
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup } from './pages'
import { useAuthListener } from './hooks';



export function App() {
    const { user } = useAuthListener()
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<Signin />} />
                <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                <Route path={ROUTES.BROWSE} element={<Browse />} />
                <Route path={ROUTES.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}


// import React from 'react';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import * as ROUTES from './constants/routes';
// import { Home, Browse, Signin, Signup } from './pages';
// import { useAuthListener } from './hooks';
// import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

// export function App() {
//   const { user } = useAuthListener();
  
//   return (
//     <Router>
//         <Switch>
//             <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
//                 <Signin />
//             </IsUserRedirect>
//             <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
//                 <Signup />
//             </IsUserRedirect>
//             <ProtectedRoute user={user} path={ROUTES.BROWSE}>
//                 <Browse />
//             </ProtectedRoute>
//             <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
//                 <Home />
//             </IsUserRedirect>
//         </Switch>
//     </Router>
//   );
// }

