import "./styles.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import InputContent from "./components/InputContent";
import AllBenefits from "./components/AllBenefits";
import AssuredCashback from "./components/AssuredCashback";
import MoreValue from "./components/MoreValue";
import Forex from "./components/Forex";
import JoiningFee from "./components/JoiningFee";
import InstantCredit from "./components/InstantCredit";
import InControl from "./components/InControl";
import Support from "./components/Support";
import Comitted from "./components/Comitted";
import ConcludingData from "./components/ConcludingData";

export const Page = ({ height = "100vh", children }) => (
  <div className="fullpage" style={{ height: height }}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
          <source
            src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Page>
          <Header />
          <HomePage />
        </Page>
      </div>
      <Page height="80vh">
        <AllBenefits />
      </Page>
      <Page height="80vh">
        <AssuredCashback />
      </Page>
      <Page height="80vh">
        <MoreValue />
      </Page>
      <Page height="80vh">
        <Forex />
      </Page>
      <Page height="40vh">
        <JoiningFee />
      </Page>
      <Page>
        <InstantCredit />
      </Page>
      <Page>
        <InControl />
      </Page>
      <Page height="60vh">
        <Support />
      </Page>
      <Page height="60vh">
        <Comitted />
      </Page>
      <Page height="500px">
        <ConcludingData />
      </Page>
      {<InputContent pos={"bottom"} />}
      {/* Able to make above one sticky but not appear on scroll
      Refer my attempts in Footer.js */}
    </div>
  );
}
