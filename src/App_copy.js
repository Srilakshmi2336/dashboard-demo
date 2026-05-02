import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setData, setLoading } from "./store/analyticsSlice";

import NewsSidebar from "./components/NewsSidebar";
import Navbar from "./components/Navbar";
import KpiCard from "./components/KpiCard";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.analytics.data);
  const loading = useSelector((state) => state.analytics.loading);

  useEffect(() => {
    dispatch(setLoading(true));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((apiData) => {
        const cleaned = apiData.map((item) => ({
          title: item.title,
          body: item.body,
        }));

        dispatch(setData(cleaned));
      })
      .catch(() => {
        dispatch(setLoading(false));
      });
  }, []);

  // KPI data
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

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <NewsSidebar />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          {/* Loading State */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {/* KPI Cards */}
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                {cardData.map((card, index) => (
                  <KpiCard
                    key={index}
                    title={card.title}
                    value={card.value}
                  />
                ))}
              </div>

              {/* Data List */}
              <div>
                {data?.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;