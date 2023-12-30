import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        quod, quaerat, quasi, quidem, quibusdam, quod, quaerat.
      </p>
      <UserClass name={"Anwar Siddiqui (class)"} location={"Bangalore class"} />
    </div>
  );
};

export default About;
