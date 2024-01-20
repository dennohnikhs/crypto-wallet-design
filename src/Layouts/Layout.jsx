import { Container } from "react-bootstrap";
import TopNavigation from "../Navbar/TopNavigation";
import Colors from "../constants/app-colors.contants";
import HomeTabs from "../components/tabs/HomeTabs";

function Layout({ children }) {
  return (
    <Container className="py-4 shadow-md p-3 bg-body rounded-4 p-3">
      <TopNavigation />
      <Container
        className=" p-4 "
        style={{ backgroundColor: Colors.white_smoke }}
      >
        {children}
      </Container>
      <HomeTabs />
    </Container>
  );
}

export default Layout;
