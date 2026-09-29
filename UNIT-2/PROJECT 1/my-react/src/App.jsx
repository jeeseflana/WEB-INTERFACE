import React from "react";
import "./App.css";

function Hobby(props) {
  return (
    <div
      className="hobby"
      style={{backgroundColor: props.color}}
    >
      <img src={props.image} alt={props.name} />
      <div className="hobbyText">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        {props.favorite && (
          <span>My Favorite</span>
        )}
      </div>
    </div>
  );
}

function App() {
  const myName = "Flan";
  const course = "Computer Science Engineering";
  return (
    <>
      <div className="page">
        <div className="hero">
          <div>
            <p className="tag">
              WELCOME TO MY WORLD
            </p>
            <h1>
              Hi, I'm <b>{myName}</b>
            </h1>
            <p className="intro">
              I'm a {course} student who enjoys creativity,
              technology, designing and exploring new ideas.
            </p>
          </div>
          <div className="circle">
            F
          </div>

        </div>
        <div className="about">
          <div className="aboutTitle">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
          <p className="aboutText">
            I am a Computer Science Engineering student with
            an interest in both technology and creative
            activities. I enjoy learning new things and
            exploring different areas of computer science,
            especially web designing and programming.
            <br />
            <br />
            Apart from academics, I like spending my free time
            watching movies and series, listening to music,
            creating content and exploring new places. These
            activities help me stay creative, relaxed and
            motivated.
            <br />
            <br />
            I believe that hobbies are an important part of
            personal growth because they allow me to learn,
            express myself and discover new interests outside
            the classroom.
          </p>
        </div>
        <div className="heading">
          <p>MY INTERESTS</p>

        <h1>Things I Love</h1>
        </div>
        <div className="hobbyContainer">
          <Hobby
            name="Web Designing"
            description="I enjoy designing websites and experimenting with colours, layouts and creative ideas."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
            color="#E7EEFF"
            favorite={true}
          />
          <Hobby
            name="Content Creation"
            description="Creating content is a fun way for me to express my ideas, experiment with visuals and share my creativity."
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            color="#FFEAF2"
          />
          <Hobby
            name="Watching Movies"
            description="I enjoy watching movies and series with interesting stories, characters and different perspectives."
            image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
            color="#F0E9FF"
            favorite={true}
          />
          <Hobby
            name="Listening to Music"
            description="Music helps me relax, enjoy my free time and improve my mood while doing everyday activities."
            image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"
            color="#E7FFF3"
          />
          <Hobby
            name="Coding"
            description="I like learning programming and creating small projects that help me improve my technical skills."
            image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
            color="#FFF2D9"
          />
          <Hobby
            name="Exploring"
            description="I love discovering new places, trying new experiences and creating memorable moments."
            image="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800"
            color="#E4F9FF"
          />
        </div>
        <div className="footer">
          <p>Made with React and JSX</p>
        </div>
      </div>
    </>
  );
}
export default App;
