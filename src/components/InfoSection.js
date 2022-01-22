import star from "../star.svg";

const InfoSection = ({ left, image, header, display, body }) => {
  return (
    <div className={`${!left ? "bg-white" : "bg-light_secondary"}`} id="about">
      <div className="relative grid grid-cols-1 md:grid-cols-2 py-14 px-8 md:py-20 md:px-16 lg:py-28 lg:px-24 gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
        {left && (
          <div>
            <img
              src={star}
              alt="star"
              className="hidden lg:block absolute top-24 left-[72px] z-10"
            />
            <div>
              <img
                src={image}
                alt="pic"
                className="rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-none md:rounded-bl-[70px] lg:rounded-bl-[100px]"
              />
            </div>
          </div>
        )}
        {!left && (
          <div className="md:hidden">
            <img
              src={star}
              alt="star"
              className="hidden lg:block absolute top-52 right-[72px] z-10"
            />
            <div>
              <img
                src={image}
                alt="pic"
                className="rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-none md:rounded-bl-[70px] lg:rounded-bl-[100px]"
              />
            </div>
          </div>
        )}
        <div className="space-y-4">
          <p className="font-header text-primary text-sm md:text-lg lg:text-xl tracking-widest">
            {header}
          </p>
          <h3 className="font-display text-black text-2xl md:text-3xl lg:text-5xl">
            {display}
          </h3>
          <p className="text-sm md:text-base lg:text-xl leading-relaxed pt-3 md:pt-5 lg:pt-7">
            {body}
          </p>
        </div>
        {!left && (
          <div className="hidden md:block">
            <img
              src={star}
              alt="star"
              className="hidden lg:block absolute top-52 right-[72px] z-10"
            />
            <div>
              <img
                src={image}
                alt="pic"
                className="rounded-br-[50px] md:rounded-br-[70px] lg:rounded-br-[100px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
