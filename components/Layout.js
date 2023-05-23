import Navbar from "./navbar";

const Layout = (props) => (
  <>
    <Navbar />
    {props.children}
  </>
);

export default Layout;
