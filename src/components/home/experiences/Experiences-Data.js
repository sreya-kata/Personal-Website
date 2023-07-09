import scholastic from "../../../assets/scholastic.png";
import woodmackenzie from "../../../assets/woodmackenzie.png";
import cargurus from "../../../assets/cargurus.png";
import scout from "../../../assets/scout.png";
import hackbeanpot from "../../../assets/hackbeanpot.png";
import khoury from "../../../assets/khoury.png";

export const experienceData = [
  {
    name: "Scholastic",
    image: scholastic,
    position: "Associate Software Engineer",
    time: "June 2023 - Present",
    languages: ["React", "TypeScript", "Postman", "AWS"],
    description: "",
    url: "https://www.scholastic.com/home",
    projects: ["https://www.scholastic.com/edtech/index.html"],
  },
  {
    name: "Wood Mackenzie",
    image: woodmackenzie,
    position: "Software Development Co-op",
    time: "July - December 2022",
    languages: [
      "TypeScript",
      "Python",
      "PostgreSQL",
      "GraphQL",
      "Neo4j",
      "Docker",
      "AWS",
    ],
    description:
      "- Migrated data from Data Manager to map platform by building GraphQL endpoints and adjusting pipelines to ES <br>- Improved Data Manager by adding and enhancing features using React to query from a GraphQL server<br>- Undertook data load by writing Python scripts that query from Neo4j and write SQL insert statements<br>- Coordinated ingestion of data from pipelines through AWS S3 buckets and CloudFormation files<br>- Contributed to routine code reviews and release team meetings to push code to higher environments in Jenkins",
    url: "https://www.woodmac.com/",
    projects: ["https://www.woodmac.com/lens/hydrogen/"],
  },
  {
    name: "CarGurus",
    image: cargurus,
    position: "Software Engineering Co-op",
    time: "May - December 2021",
    languages: ["React", "TypeScript", "Java", "Freemarker", "SQL"],
    description:
      "- Spearheaded frontend development of account hub pages to remove legacy FTL code and outdated design<br>- Implemented React components with Java APIs to increase lead conversion on returning user pages by 2-4%<br>- Optimized consumer retention by working on email marketing and workflows on Iterable<br>- Launched mobile push notifications for returning users through A/B testing code snippets on Iterable<br>- Analyzed customer interactions with Snowplow data queries and SQL statements to track UI usages and clicks",
    url: "https://www.cargurus.com",
  },
  {
    name: "Scout",
    image: scout,
    position: "Technical Lead and Developer",
    time: "January 2021 - May 2022",
    languages: ["React", "GraphQL", "Gatsby", "CMS", "Shopify"],
    description:
      "<b>Technical Lead:</b><br>- Coordinated development tasks for a growing skincare company's website built off a Shopify theme<br>- Leveraged Liquid templating to expand on ecommerce and blog features<br>- Maintained relationship with clients whilst leading 2 developers on the team on weekly sprints<br><br><b>Developer:</b><br>- Collaborated with an agile team of 5 designers and developers to conduct a client-requested project over 4 months<br>- Developed brand and identity features for a website with detailed research and Github code reviews and requests<br>- Employed React and Gatsby with back-end API calls and Contentful data management to administer Netlify deployment",
    url: "https://scout.camd.northeastern.edu/",
    projects: ["https://ornamiskincare.com/", "https://vitalnortheastern.org/"],
  },
  {
    name: "HackBeanpot",
    image: hackbeanpot,
    position: "Co-Director and Team Member",
    time: "April 2021 - April 2023",
    description:
      "<b>Co-Director:</b><br>- Direct organization to expand upon core values by supporting team leads in their development goals and spearheading key diversity and alumni initiatives<br>- Promote team camaraderie for members by facilitating engaging meetings and fostering a comfortable, inclusive environment for participation<br>- Pivot hackathon event and team bonding to an person environment post-COVID while effectively maintaining our core values of welcoming and inspiring first-time hackers to grow their technological skills<br><br><b>Team Member:</b><br>- Elevated sponsor experience by developing perks and accommodating experiences for over 200 students<br>Devised a sponsorship packet and reach out to potential sponsors, raising over $10,000<br>- Promoted HackBeanpot’s mission to create an inclusive and diverse community to foster tech",
    url: "https://hackbeanpot.com/",
  },
  {
    name: "Khoury College of Computer Science",
    image: khoury,
    position: "Discrete Structures TA",
    time: "September - December 2020",
    description:
      "- Served 15 hours a week holding office hours over Microsoft Teams and grading assignments and exams for 100 students<br>- Reinstated concepts regarding logic, proofs, probability, and graph theory to ingrain strong critical thinking skills",
    url: "https://www.khoury.northeastern.edu/",
  },
];
