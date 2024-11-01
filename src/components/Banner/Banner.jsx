import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary my-2">View the List</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
