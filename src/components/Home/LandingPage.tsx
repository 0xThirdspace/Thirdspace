import HeroBanner from "./HeroBanner";
import Partners from "./Partners";
import Features from "./Features";
import BountyBanner from "./BountyBanner";
import HowItWorks from "./HowItWorks";
import Roadmap from "./Roadmap";
import Layout from "../Layout/Layout";
type Props = {};

const LandingPage = (props: Props) => {

  return (
    <Layout>
      <HeroBanner/>
      <Partners/>
      <Features/>
      <BountyBanner/>
      <HowItWorks/>
      <Roadmap/>
    </Layout>
  );
};

export default LandingPage;
