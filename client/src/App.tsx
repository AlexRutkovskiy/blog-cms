import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from "./routes";
import { IRoute } from "./types";

const renderRoutes = () => {
    return routes.map((route: IRoute) => {
        const Component = route.element;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={<Component />}
            />
        )
    })
}

function App() {
    return (
        <Router>
            <Routes>
                { renderRoutes() }
            </Routes>
        </Router>
    );
}

export default App;
