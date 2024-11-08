import "../About/About.css";

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32 scroll-smooth">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-secondary text-lg mb-3">
              About Me
            </h4>
            <p className="font-medium text-base text-black max-w-xl lg:text-md">
              I am a Physics graduate with a GPA of 3.58/4.00, my academic
              journey seamlessly integrates these fields, providing me a strong
              foundational in programming and data analytics. I have background
              in analytical thinking and problem-solving, honed through my
              studies, drives my interest in creating efficient and innovative
              web solutions.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:flex lg:justify-center">
            <h4 className="font-bold uppercase text-secondary text-lg mb-2 items-center">
              Skills
            </h4>
            <div className="flex items-center">
              {/* Python */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                alt="Python"
                title="Python"
                width={20}
                className="w-9 h-9 mr-2 rounded-full hover:scale-90 transition-transform duration-500 ease-in-out"
              />
              {/* Power BI */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png"
                alt="Power BI"
                title="Power BI"
                width={20}
                className="w-9 h-9 mr-2 rounded-full hover:scale-90 transition-transform duration-500 ease-in-out"
              />
              {/* MySQL */}
              <img
                src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                alt="MySQL"
                title="MySQL"
                width={20}
                className="w-9 h-9 mr-2 rounded-full hover:scale-90 transition-transform duration-500 ease-in-out"
              />
              {/* Excel */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/826px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
                alt="Spreadsheet"
                title="Spreadsheet"
                width={20}
                className="w-9 h-9 mr-2 rounded-full hover:scale-90 transition-transform duration-500 ease-in-out"
              />
              {/* Excel */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/800px-Matlab_Logo.png"
                alt="Matlab"
                title="Matlab"
                width={20}
                className="w-9 h-9 mr-2 rounded-full hover:scale-90 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
