import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";

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
        path: "*",
        element: (
            <Layouts>
                <h2>Not Found</h2>
            </Layouts>
        )
    }
];

export default MyRoutes;
