import Loadable from "@caixue/react-loadable";
import LoaderPage from "../../components/LoaderPage";

export const LodableHomePage = Loadable({
  loader: () => import("./"),
  loading: () => <LoaderPage />,
});
