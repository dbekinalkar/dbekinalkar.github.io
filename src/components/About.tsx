import profile from "../assets/images/profile.jpg";

const About = ({ id }: { id: string }) => {
  return (
    <div className="bg-base-200 py-8 scroll-mt-16" id={id}>
      <h1 className="text-5xl font-bold text-center mb-8">About Me</h1>
      <div className="container py-4 px-8 max-w-md md:max-w-3xl flex flex-wrap md:flex-nowrap justify-center mx-auto gap-16 content-center items-center">
        <img
          src={profile}
          className="max-w-sm rounded-lg shadow-2xl self-center w-60"
        />
        <p className="text-lg mt-4 font-serif min-w-64 flex-grow">
          I am a software engineer with a passion for about transforming ideas
          into impactful solutions. I am currently a student at Purdue
          University studying Computer Science. I specialize in full-stack web
          development and machine learning. I am constantly learning new
          technologies and frameworks to improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
