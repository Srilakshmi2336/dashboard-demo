import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function BodyCard({data}){

    const labels=data?.slice(0,5).map((item)=>item.body);
const values=data?.slice(0,5).map((item)=>item.body.length);

const chartData={
   labels: labels,
  datasets: [
    {
      label: "Demo Data",
      data: values,
    },
  ],
};



return(
     <div style={{ width: "500px", marginTop: "20px" }}>
      <Bar data={chartData} />
    </div>
)
}

export default BodyCard

