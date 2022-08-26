import {
  faMedkit,
  faLandmark,
  faHeart,
  faVirus,
  faSubway,
  faPlay,
  faWallet,
  faPersonRunning,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import vital from "../../../assets/vital.png";
import vitalDetails from "../../../assets/vitalDetails.png";
import election from "../../../assets/election.jpeg";
import electionDetails from "../../../assets/electionDetails.png";
import pyramid from "../../../assets/pyramid.jpeg";
import animator from "../../../assets/animator.jpeg";
import covid from "../../../assets/covid.jpeg";
import covidDetails from "../../../assets/covidDetails.jpeg";
import job from "../../../assets/job.jpeg";
import mbta from "../../../assets/mbta.jpeg";
import mbtaDetails from "../../../assets/mbtaDetails.png";
import ornami from "../../../assets/ornami.jpeg";
import running from "../../../assets/running.jpeg";

export const projectData = [
  {
    name: "ViTAL",
    image: vital,
    icon: faMedkit,
    languages: ["React", "GraphQL"],
    collage: vitalDetails,
    description:
      "ViTAL is the only Northeastern student organization that is devoted to healthcare innovation in an era of unconvential career paths and growing technology. As such, its appearance needs to embody this. My team at Scout was tasked with redesigning both their brand and website. This is a semester-long project that requires a great deal of research. \n\n We first did feature analysis and user stories to understand what functionality and information would be present on their website. We decided on developing a homepage, about, team, events, and opportunities pages for them. My co-developer and I split up the pages but reconvened whenever we needed to work together.\n\nUsing React with Gatsby as a static site generator, we made a fully-functioning website for ViTAL. They can update the content as they would like in the Contentful CMS.",
    code: "https://github.com/vital-northeastern/vital-site",
    live: "https://vitalnortheastern.org/",
  },
  {
    name: "2024 Election Results",
    image: election,
    icon: faLandmark,
    languages: ["Python (Pandas, Scikit-Learn)"],
    collage: electionDetails,
    description:
      "As my final project for data science, I teamed up with another classmate to produce a model that could predict county-level results for the upcoming presidential election, based on demographics.\n\nWe followed a pipeline that consisted of getting the data (largely from CSVs-Github for election data and census-related data for demographics), cleaning (extracting only relevant information from each CSV and then merging them into one dataframe), and doing the machine learning (we chose to use regression to estimate the proportion/votes for each party).\n\nThis project was a deeper delve into data science and machine learning concepts like regression analysis and predictions. We used the sklearn library to do our analytics and pandas to deal with dataframes.",
    code: "",
    live: "https://drive.google.com/file/d/1CM-6eLzgvY-u1cwn3waYTk1vg-ZfZ_ax/view",
  },
  {
    name: "COVID-19 Vaccine Waste Tracker",
    image: covid,
    icon: faVirus,
    languages: ["Java (Spring Boot)", "SQL", "React"],
    collage: covidDetails,
    description:
      "Upon attending HackBeanpot I joined a team of 3 other Northeastern students. We dedicated the weekend towards creating an application that helps hospitals and other COVID-19 vaccine distribution centers to record and report vaccines that are wasted. This project was manifested as a result of the CDC reporting that many vaccines are going to waste, but there not being any concerted effort to track the waste.\n\nThe web application has three main components: the dashboard, login, and data entry page. The dashboard shows a table of top ten most 'wasteful' counties (with the option to reverse the ordering). The graph on this page shows a daily tracker of the total number of vaccines wasted. The login page is a way od addressing security issues and administrative privileges. Lastly, if a successful login was entered, a data entry page comes into play with inputs for the hospital, county, date, and number of vaccines entered. This data, once submitted, is added to a database.\n\nUsing full-stack development principles, this project takes advantage of React components and API calls to a Java Sprint Boot backend server that is connected to a local SQL database.",
    code: "https://github.com/sreya-kata/HPB2021",
    live: "https://devpost.com/software/covid-19-vaccine-waste-tracker?",
  },
  {
    name: "MBTA Database",
    image: mbta,
    icon: faSubway,
    languages: ["SQL"],
    collage: mbtaDetails,
    description:
      "As a final project for a database class centered around SQL, my partner and I decided to represent the MBTA subway system as a relational model. Using MySQL, we first established our ER diagram and how we wanted to represent each entity within the system, to ultimately connect them together based on specific relationships.\n\nOnce an ER diagram was finalized, we began collecting data from various sources. Though this is further detailed in the report, we extracted data from the MBTA website, government CSVs, and cross-referencing maps. Upon importing this data into MySQL, we made the appropriate tables and keys. Our queries revolved around multiple points of analysis but they included questions regarding monthly ridership, location hotspots, and route density.\n\nUsing SQL standards for table creation and query writing, we successfully analyzed the MBTA subway system. In the future, I hope to use this model in real-world contexts like relations to gentrification and public transportation.",
    code: "",
    live: "",
  },
  {
    name: "Job Recommendation Engine",
    image: job,
    icon: faBriefcase,
    languages: ["Neo4j", "Python"],
    collage: mbtaDetails,
    description:
      "As a final project for a database class centered around SQL, my partner and I decided to represent the MBTA subway system as a relational model. Using MySQL, we first established our ER diagram and how we wanted to represent each entity within the system, to ultimately connect them together based on specific relationships.\n\nOnce an ER diagram was finalized, we began collecting data from various sources. Though this is further detailed in the report, we extracted data from the MBTA website, government CSVs, and cross-referencing maps. Upon importing this data into MySQL, we made the appropriate tables and keys. Our queries revolved around multiple points of analysis but they included questions regarding monthly ridership, location hotspots, and route density.\n\nUsing SQL standards for table creation and query writing, we successfully analyzed the MBTA subway system. In the future, I hope to use this model in real-world contexts like relations to gentrification and public transportation.",
    code: "",
    live: "",
  },
  {
    name: "RunningBuddy",
    image: running,
    icon: faPersonRunning,
    languages: ["Java", "Android Studio"],
  },
  {
    name: "Pyramid Solitaire",
    image: pyramid,
    icon: faHeart,
    languages: ["Java"],
  },
  {
    name: "Ornami",
    image: ornami,
    icon: faWallet,
    languages: ["Liquid", "Shopify"],
  },
  {
    name: "Easy Animator",
    image: animator,
    icon: faPlay,
    languages: ["Java"],
  },
];
