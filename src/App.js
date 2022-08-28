import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import { individualProjectData } from "./components/home/projects/Project-Data";

function App() {
  const vital = individualProjectData.vital;
  const election = individualProjectData.election;
  const covid = individualProjectData.covid;
  const mbta = individualProjectData.mbta;
  const job = individualProjectData.job;
  const running = individualProjectData.running;
  const ornami = individualProjectData.ornami;
  const animator = individualProjectData.animator;

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/vital"
            element={
              <Project
                name={vital.name}
                collage={vital.collage}
                description={vital.description}
                code={vital.code}
                live={vital.live}
              />
            }
          />
          <Route
            path="/election"
            element={
              <Project
                name={election.name}
                collage={election.collage}
                description={election.description}
                code={election.code}
                live={election.live}
              />
            }
          />
          <Route
            path="/covid"
            element={
              <Project
                name={covid.name}
                collage={covid.collage}
                description={covid.description}
                code={covid.code}
                live={covid.live}
              />
            }
          />
          <Route
            path="/mbta"
            element={
              <Project
                name={mbta.name}
                collage={mbta.collage}
                description={mbta.description}
                code={mbta.code}
                live={mbta.live}
              />
            }
          />
          <Route
            path="/job"
            element={
              <Project
                name={job.name}
                collage={job.collage}
                description={job.description}
                code={job.code}
                live={job.live}
              />
            }
          />
          <Route
            path="/running"
            element={
              <Project
                name={running.name}
                collage={running.collage}
                description={running.description}
                code={running.code}
                live={running.live}
              />
            }
          />
          <Route
            path="/ornami"
            element={
              <Project
                name={ornami.name}
                collage={ornami.collage}
                description={ornami.description}
                code={ornami.code}
                live={ornami.live}
              />
            }
          />
          <Route
            path="/animator"
            element={
              <Project
                name={animator.name}
                collage={animator.collage}
                description={animator.description}
                code={animator.code}
                live={animator.live}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
