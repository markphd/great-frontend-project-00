import "./styles/App.css";
import Card from "./components/Card";

export default function App() {

  let user = {
    image: 'profile-thumbnail.png',
    name: 'Sarah Dole',
    handler: '@sarahdole',
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
  }

  return (
    <main className="container">

      <Card image={user.image} name={user.name} handler={user.handler} testimonial={user.testimonial} />
      
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by {" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by {" "}
        <a
          href="https://www.greatfrontend.com/projects/u/markphd"
          target="_blank"
        >
          Mark Philip Dawal
        </a>
        .
      </div>
      <script src="js/index.js"></script>
    </main>
  );
}
