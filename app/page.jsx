import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Explore & Exchange
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Driven Ideas</span>
    </h1>
    <p className="desc text-center">
      InspireAI is an open-source AI prompting platform designed to help users
      discover, create, and share innovative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
