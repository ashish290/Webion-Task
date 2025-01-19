import "./Note.css";

function Note() {
  return (
    <div className="note">
      <div className="card">
        <div className="frontend-card">
          <h1 className="frontend-heading">Front-end Guide</h1>
          <ul>
            <li>Clone the exact project.</li>
            <li>
              Fill out the form first, and the form details should be added in
              card format.
            </li>
            <li>
              The card length will be added to the home page dynamically, and
              placed & unplaced values will also be updated dynamically.
            </li>
            <li>If we delete a card, it will update on the home page.</li>
            <span className="language" style={{ color: "rgb(201 253 2)", listStyleType: "none" }}>
              <li style={{ listStyleType: "disc", color: "#ffff" }}>
                Our requirement:
              </li>
              <li>1.HTML</li>
              <li>2.CSS</li>
              <li>3.JavaScript</li>
              <li>4.ReactJS</li>
            </span>
          </ul>
        </div>

        <div className="fullstack-card">
          <h1 className="fullstack-heading">Fullstack Development Guide</h1>
          <ul>
            <li>Clone the exact project.</li>
            <li>
              Fill out the form first, and the form details should be added in
              card format.
            </li>
            <li>
              The card length will be added to the home page dynamically, and
              placed & unplaced values will also be updated dynamically.
            </li>
            <li>If we delete a card, it will update on the home page.</li>
            <span className="language" style={{ color: "rgb(201 253 2)", listStyleType: "none" }}>
              <li style={{ listStyleType: "disc", color: "#ffff" }}>
                Our requirement choose any one language for backend:
              </li>
              <li>1.HTML</li>
              <li>2.CSS</li>
              <li>3.JavaScript</li>
              <li>4.ReactJS</li>
              <li>5.NodeJS</li>
              <li>6.Python</li>
              <li>7.Java</li>
              <li>8.MongoDB</li>
              <li>9.SQL</li>
            </span>
            <li>
              For the backend, connect with the database using any language you
              know (Python, Node.js), and use either MongoDB or SQL.
            </li>
          </ul>
        </div>
      </div>
      <div className="important-card" >
        <div className="important-note">
          <h1 className="important-heading">
            <div className="Bottom-border" >Important Notes</div>
          </h1>
          <ul className="important-list">
            <li>No need for notes files; they are for guidance only.</li>
            <li>
              Once completed, deploy the project to Github,Vercel or Netlify and
              upload the link in the given form.
            </li>
            <li>We have attached asset files in zip format, check them out.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Note;