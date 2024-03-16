import InputContent from "./InputContent";

const HomePage = () => {
  return (
    <>
      <div className="content">
        <div className="content-left">
          <h3>NX Wave. The next-gen credit card for those who love rewards.</h3>
          <small>1% Cashback + 5x Rewards + Zero Forex Markup</small>
          <InputContent pos={""} />
        </div>
        <div className="content-right">
          <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            alt="card and black sphere"
            width="300px"
            height="auto"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
