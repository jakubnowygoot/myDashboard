import CardStartPage from "../components/startPage/CardStartPage";
import Button from "../components/ui/Button";

function HomePage() {
  return (
    <CardStartPage>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Understand Widget Power.
        <span className="sm:block"> Increase Conversion. </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" type="button">
          Get Started
        </Button>
        <Button href="/" type="button">
          Learn More
        </Button>
      </div>
    </CardStartPage>
  );
}

export default HomePage;
