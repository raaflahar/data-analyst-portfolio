import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-tertiary">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg uppercase text-secondary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-white text-2xl mb-4">
              Latest Project
            </h2>
            <p className="font-medium text-md text-white">
              This section describes latest project I created using Tech Stack
              mentioned before.
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div id="portfolio-section" className="flex flex-col">
              <div
                id="container"
                className="flex items-center justify-center mx-4"
              >
                <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                    <a
                      href="https://app.powerbi.com/groups/me/reports/57d91e82-583a-4baf-b3e5-d445d3729daf/e0c5fe7da8566df9ba23?ctid=98e1704f-16ed-4689-af8a-a6d6f7f228f0&experience=power-bi"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="https://github.com/raaflahar/data-analyst-portfolio/blob/main/src/assets/img/portfolio/01-penjualan-smartphone.jpg?raw=true"
                        alt="Smartphone Sales"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                    <a
                      href="https://app.powerbi.com/groups/me/reports/57d91e82-583a-4baf-b3e5-d445d3729daf/e0c5fe7da8566df9ba23?ctid=98e1704f-16ed-4689-af8a-a6d6f7f228f0&experience=power-bi"
                      target="_blank"
                      className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                    >
                      Average Price Smartphone Sales
                    </a>
                  </h3>
                  <p className="font-base text-white text-md">
                    This project is a project that analyzes average data
                    Smartphone price sales use derived Dummy Data from Kaggle.
                  </p>
                </div>
              </div>
              <div
                id="button-more-portfolio"
                className="flex justify-center items-center"
              >
                <a
                  href="https://github.com/raaflahar"
                  target="_blank"
                  className="text-base font-semibold text-black bg-primary py-3 px-3 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out"
                >
                  More Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
