const ConcludingData = () => {
  return (
    <>
      <div
        style={{
          width: "40%",
          textAlign: "start",
          padding: "10px",
        }}
      >
        <h2>UNI</h2>
        <p>
          Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
          Koramangala, Bengaluru, Karnataka 560034
        </p>
        <p>Contact Us: 080 68216821</p>
        <p> Email: care@uni.club</p>
      </div>
      <div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
              style={{ paddingRight: "4px" }}
            >
              Grievance Redressal Mechanism
            </a>
            <small>{"- SBM Bank India"}</small>
          </div>
          <a href="https://www.uni.cards/docs/Uni_CSR_Policy_v1_Sep22.pdf">
            CSR Policy
          </a>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            <a href="">Instagram</a>
            <a href="">Linkdin</a>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Careers</a>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <a href="">Credit Card KFS</a>
            <a href="">Credit Card T&Cs</a>
            <a href="">Uni T&Cs</a>
            <a href="">Lending Partner TnCs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcludingData;
