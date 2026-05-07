const classes = [
  {
    id: 1,
    name: "Physics 201",
    location: "Hill Center 114",
    start: "9:00 AM",
    end: "10:20 AM",
    color: "#6366f1",
    bg: "#1a1a2d",
    done: true,
  },
  {
    id: 2,
    name: "Math 301",
    location: "Murray Hall 212",
    start: "11:30 AM",
    end: "12:50 PM",
    color: "#60a5fa",
    bg: "#1a1f2d",
    done: true,
  },
  {
    id: 3,
    name: "English 210",
    location: "Murray Hall 106",
    start: "2:00 PM",
    end: "3:20 PM",
    color: "#a78bfa",
    bg: "#211a2d",
    done: false,
    current: true,
  },
  {
    id: 4,
    name: "CS 214",
    location: "CoRE Building 301",
    start: "4:30 PM",
    end: "5:50 PM",
    color: "#4ade80",
    bg: "#1a2d1e",
    done: false,
  },
];

function ClassCard({ cls }) {
  return (
    <div
      style={{
        margin: "0 20px 10px",
        background: cls.current ? cls.bg : "#1a1d26",
        borderRadius: "14px",
        padding: "14px 16px",
        border: `1px solid ${cls.current ? cls.color + "55" : "#2a2d35"}`,
        display: "flex",
        gap: "14px",
        alignItems: "center",
        opacity: cls.done ? 0.5 : 1,
      }}
    >
      <div
        style={{
          width: "4px",
          borderRadius: "4px",
          alignSelf: "stretch",
          background: cls.color,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#f1f3f5", fontSize: "14px", fontWeight: "600" }}>
            {cls.name}
          </p>
          {cls.current && (
            <span
              style={{
                fontSize: "10px",
                padding: "3px 8px",
                borderRadius: "6px",
                background: cls.color + "22",
                color: cls.color,
                fontWeight: "600",
              }}
            >
              NOW
            </span>
          )}
        </div>
        <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "3px" }}>
          {cls.location}
        </p>
        <p style={{ color: "#4b5563", fontSize: "11px", marginTop: "4px" }}>
          {cls.start} — {cls.end}
        </p>
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div style={{ height: "100%", overflowY: "auto", paddingBottom: "80px" }}>
      <div style={{ padding: "48px 20px 16px" }}>
        <p style={{ color: "#6b7280", fontSize: "12px" }}>Wednesday, May 6</p>
        <h2
          style={{
            color: "#f1f3f5",
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "4px",
          }}
        >
          Schedule
        </h2>
      </div>

      <div
        style={{
          margin: "0 20px 20px",
          background: "#1a1d26",
          borderRadius: "16px",
          padding: "14px 16px",
          border: "1px solid #2a2d35",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            color: "#f59e0b",
            fontWeight: "600",
            letterSpacing: "0.08em",
            marginBottom: "6px",
          }}
        >
          ⚠ TRANSIT ALERT
        </p>
        <p style={{ fontSize: "13px", color: "#c9cdd6", lineHeight: "1.5" }}>
          Your{" "}
          <span style={{ color: "#fbbf24", fontWeight: "500" }}>CS 214</span>{" "}
          class is at 4:30 PM — peak bus hours. Leave by{" "}
          <span style={{ color: "#fbbf24", fontWeight: "500" }}>3:45 PM</span>{" "}
          to avoid crowding.
        </p>
      </div>

      <p
        style={{
          padding: "0 20px 10px",
          fontSize: "11px",
          fontWeight: "600",
          color: "#4b5563",
          letterSpacing: "0.08em",
        }}
      >
        TODAY'S CLASSES
      </p>

      {classes.map((cls) => (
        <ClassCard key={cls.id} cls={cls} />
      ))}
    </div>
  );
}

export default Schedule;
