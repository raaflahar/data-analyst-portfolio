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
              This section describes latest project I created using Data
              Analysis Tools mentioned before.
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div id="portfolio-section" className="flex flex-col">
              <div
                id="container"
                className="flex flex-col items-stretch justify-center mx-4 gap-4 p-4"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col bg-dark-brown rounded-lg shadow-lg p-4 w-full mb-12 md:w-1/2" id="porto-1">
                    <div>
                      <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                        <a
                        href="https://app.powerbi.com/groups/me/reports/efd654ce-8705-481f-b7a8-4f0ef70eeff1/259ba69ca57925153c83?experience=power-bi"
                        target="_blank"
                        className=""
                      >
                        <img
                          src="https://github.com/raaflahar/data-analyst-portfolio/blob/main/src/assets/img/portfolio/Coffee-shop-dashboard.png?raw=true"
                          alt="Smartphone Sales"
                          className="w-[500px]"
                        />
                        </a>
                      </div>
                      <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                      <a
                        href="https://app.powerbi.com/groups/me/reports/efd654ce-8705-481f-b7a8-4f0ef70eeff1/259ba69ca57925153c83?experience=power-bi"
                        target="_blank"
                        className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                      >
                        Coffee Shop Sales Dashboard
                      </a>
                      </h3>
                      <p className="font-base text-white text-md">
                      This project is purposely created to gives insight about sales monthly, quarterly performances using Power BI Dashboard for owner to better understands it and make decision accordingly.
                      </p>
                    </div>            
                  </div>
                  <div className="flex flex-col bg-dark-brown rounded-lg shadow-lg p-4 w-full mb-12 md:w-1/2" id="porto-2">
                    <div>
                      <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                        <a
                        href="https://app.powerbi.com/groups/me/reports/f2e909f3-a4fa-4a1d-9a67-59b6079120d1/1a1204ac5b0bd064945f?experience=power-bi"
                        target="_blank"
                        className=""
                      >
                          <img
                          src="https://github.com/raaflahar/data-analyst-portfolio/blob/main/src/assets/img/portfolio/02%20-%20eksplorasi%20korelasi%20perawatan%20dan%20hasil%20pengobatan.png?raw=true"
                          alt="Mental Health"
                          className="w-[500px]"
                          />
                        </a>
                      </div>
                      <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                      <a
                        href="https://app.powerbi.com/groups/me/reports/57d91e82-583a-4baf-b3e5-d445d3729daf/e0c5fe7da8566df9ba23?ctid=98e1704f-16ed-4689-af8a-a6d6f7f228f0&experience=power-bi"
                        target="_blank"
                        className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                      >
                        Mental Health Dashboard
                      </a>
                      </h3>
                      <p className="font-base text-white text-md">
                      This project is created to filter any effect of
                      medication and therapy type to Mental Health problems to help family patient understands which medication and therapy is best for their beloved.
                      </p>
                    </div>
                    
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col bg-dark-brown rounded-lg shadow-lg p-4 w-full mb-12 md:w-1/2" id="porto-1">
                    <div>
                      <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                        <a
                        href="https://github.com/raaflahar/titanic-survival-rate"
                        target="_blank"
                        className=""
                      >
                        <img
                          src="https://github.com/raaflahar/titanic-survival-rate/raw/main/img/survival-rate.png"
                          alt="Titanic Survival Data"
                          className="w-[500px]"
                        />
                        </a>
                      </div>
                      <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                      <a
                        href="https://github.com/raaflahar/titanic-survival-rate"
                        target="_blank"
                        className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                      >
                        Titanic Survival Data
                      </a>
                      </h3>
                      <p className="font-base text-white text-md">
                      This project is purposely created to gives insight about survival data on Titanic disaster for sociology researcher to better understand social phenomenon about surival rate based on many factors.
                      </p>
                    </div>            
                  </div>
                  
                </div>
              </div>
              <div
                id="button-more-portfolio"
                className="flex justify-center items-center"
              >
                <a
                  href="https://github.com/raaflahar/data-analyst-portfolio"
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
