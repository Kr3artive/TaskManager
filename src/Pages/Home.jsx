import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import PriorityCard from "../components/PriorityCard";
import ScheduleCard from "../components/ScheduleCard"

const Home = () => {
  return (
    <div className="p-4 h-screen mb-2">
      <Header />
      <Info/>
      <div className="mb-12">
        <PriorityCard />
        <ScheduleCard/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
