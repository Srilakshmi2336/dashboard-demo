import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./NewsSidebar.jsx";

function Layout({ children }) {
  return (
    <Box>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Area */}
      <Box sx={{ display: "flex" }}>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <Box sx={{ flex: 1, p: 3, background: "#f5f5f5", minHeight: "100vh" }}>
          {children}
        </Box>

      </Box>
    </Box>
  );
}

export default Layout;