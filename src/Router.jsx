import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./components/AboutSection"

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
        index: true,
        element: (
            <Layouts>
                <About />
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
