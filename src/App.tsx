
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import MainLayout from './layouts/MainLayout';
import MyStackPage from './pages/MyStackPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/my-stack',
                element: <MyStackPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ]
    },
]);

const App = () => {
    
    useEffect(() => {
        AOS.init({ 
            duration: 800, 
            once: true, 
        });
    }, []);
    
    return (
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    )
}

export default App