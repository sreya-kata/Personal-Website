import election from "../../../assets/election.png";
import job from "../../../assets/job.png";
import mbta from "../../../assets/mbta.png";
import running from "../../../assets/running.png";
export const projectData = [
  {
    name: "2024 Election Results",
    image: election,
    languages: "Python (Pandas, Scikit-Learn)",
    description:
      "As my final project for data science, my classmate and I produced a model that could predict county-level results for the upcoming presidential election, based on demographics. Our pipeline consisted of getting the data (CSVs for election and demographic data), cleaning (extracting only relevant information the CSVs and merging them into one dataframe), and machine learning (regression to estimate the proportion/votes for each party)<br><b>Code available upon request</b>",
    live: "https://drive.google.com/file/d/1CM-6eLzgvY-u1cwn3waYTk1vg-ZfZ_ax/view",
  },
  {
    name: "MBTA Database",
    image: mbta,
    languages: "SQL",
    description:
      "As a final project for a database class, my partner and I decided to represent the MBTA subway system as a relational model. Using MySQL, we first established our ER diagram and how we wanted to represent each entity within the system, to ultimately connect them together based on specific relationships. Using SQL standards for table creation and query writing, we successfully analyzed the MBTA in relation to gentrification and transporation efforts <br><b>Code available upon request</b>",
    report:
      "https://drive.google.com/file/d/1xpNyWRwRKqaqFYVHipJgvZIiKpMcskvK/view?usp=sharing",
  },
  {
    name: "Job Recommendation Engine",
    image: job,
    languages: "Neo4j, Python",
    description:
      "As a final project for a NoSQL database class, my group and I decided to create a job recommendation engine based in Neo4j. Using Python, we first programatically generated data for all our desired fields, to ultimately combine them in a master dataset. Upon importing this data into Neo4j, we made the appropriate nodes and edges. Our queries revolved around multiple points of analysis but they included questions regarding popularity of jobs, skills, and connections",
    live: "https://www.youtube.com/watch?v=q8XvdC7n5bs",
    code: "https://github.com/rahuls1098/jobRecommendationEngine",
  },
  {
    name: "RunningBuddy",
    image: running,
    languages: "Java (Android Studio), Firebase",
    description:
      "As a final project for a mobile app (Android) class, my partner and I decided to create an app that would help runners in the Boston area find each other.we mocked up the design on the XML files provided in Android Studio. We used Firebase authentication and data management to register and store data about each user. Using Java standards for classes and package management, we successfully created a fully-functioning app <br><b>Code available upon request</b>",
    live: "https://drive.google.com/file/d/1zE6u4_xw6S93CJLR9uBUNVWgbg_9JIVw/view",
  },
];
