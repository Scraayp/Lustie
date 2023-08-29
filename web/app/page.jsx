import Feed from '@/components/feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Manage your tasks
        <br className="max-md:hidden" />{' '}
        <span className="blue_gradient text-center">with Lustie</span>
      </h1>
      <p className="desc text-center">
        Lustie is a simple task manager that helps you to organize your tasks
        and projects.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
