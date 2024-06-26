import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./components/AboutSection"
import Projects from "./components/Projects"

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            <Layouts>
                <Home />
            </Layouts>
        )
    },
    {
        path: "/about",
        element: (
            <Layouts>
                <About />
            </Layouts>
        )
    },
    {
        path: "/projects",
        element: (
            <Layouts>
               <Projects />
            </Layouts>
        )
    },
    {
        path: "*",
        element: (
            <Layouts>
                <h2>Not Found</h2>
            </Layouts>
        )
    }
];

export default MyRoutes;
