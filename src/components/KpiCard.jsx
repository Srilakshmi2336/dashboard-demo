function KpiCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "150px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <p style={{ margin: 0, fontSize: "14px", color: "gray" }}>
        {title}
      </p>
      <h3 style={{ margin: "10px 0 0 0" }}>{value}</h3>
    </div>
  );
}

export default KpiCard;