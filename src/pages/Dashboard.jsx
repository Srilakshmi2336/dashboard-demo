import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import KpiCard from "../components/KpiCard";
import PostChart from "../components/PostCard";
import BodyChart from "../components/BodyChart";
import Filter from "../components/FilterBar";
import PostTable from "../components/PostTable"
import { Grid } from "@mui/material";
 import { Box, Typography } from "@mui/material";
 import Layout from "../components/Layout";


function Dashboard() {

     const [limit, setLimit] = useState(5);
    const [isLoggedIn,setIsLoggedIn] =useState(true);
     
  const data = useSelector((state) => state.analytics.data);
  const loading = useSelector((state) => state.analytics.loading);
  const error = useSelector((state) => state.analytics.error);

  const filteredData= limit == "All"? data:data.slice(0, limit);

  // KPI Data
  const cardData = [
    {
      title: "Total Posts",
      value: data?.length || 0,
    },
    {
      title: "Avg Title Length",
      value:
        data && data.length > 0
          ? Math.floor(
              data.reduce((acc, item) => acc + item.title.length, 0) /
                data.length
            )
          : 0,
    },
  ];

  // Loading
  if (loading) return <p>Loading...</p>;

  // Error
  if (error) return <p>Something went wrong</p>;


return (
  <Layout>
  <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", p: 3 }}>

    {/* 🔹 Filter Section */}
    <Box sx={{ mb: 3, p: 2, bgcolor: "#fff", borderRadius: 2 }}>
     
      <Filter setLimit={setLimit} />
    </Box>

    {/* 🔹 Overview Section */}
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>

      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <KpiCard title={card.title} value={card.value} />
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* 🔹 Analytics Section */}
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Analytics
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: "#fff", borderRadius: 2 }}>
            <PostChart data={data} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: "#fff", borderRadius: 2 }}>
            <BodyChart data={data} />
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* 🔹 Table Section */}
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Posts Table
      </Typography>

      <Box sx={{ p: 2, bgcolor: "#fff", borderRadius: 2 }}>
        <PostTable data={data} />
      </Box>
    </Box>

  </Box>
  </Layout>
);
}

export default Dashboard;