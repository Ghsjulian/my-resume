import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./components/AboutSection"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import NotFound from "./components/404"


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
        path: "/contact",
        element: (
            <Layouts>
                <Contact />
            </Layouts>
        )
    },
    {
        path: "/skills",
        element: (
            <Layouts>
               <Skills />
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
        element: <NotFound/>
    }
];

export default MyRoutes;
