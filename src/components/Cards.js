const Cards = () => {
  return (
    <div
      className="px-10 pt-10 pb-14 md:px-14 md:pt-14 md:pb-20 lg:px-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto text-center"
      id="cards"
    >
      <div>
        <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold mb-10 md:mb-12 lg:mb-16">
          <span className="text-primary">
            <span className="text-3xl md:text-6xl">4</span> R’s
          </span>{" "}
          of Four Our Living
        </h2>
      </div>
      <div className="justify-between grid grid-cols-2 gap-5 md:flex">
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/4rs/reduce.svg"
            alt="reduce"
            className="mx-auto w-10 md:w-12 lg:w-auto"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-4xl">
            Reduce
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/4rs/reuse.svg"
            alt="reuse"
            className="mx-auto w-10 md:w-12 lg:w-auto"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-4xl">
            Reuse
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/4rs/recycle.svg"
            alt="recycle"
            className="mx-auto w-10 md:w-12 lg:w-auto"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-4xl">
            Recycle
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/4rs/remove.svg"
            alt="remove"
            className="mx-auto w-10 md:w-12 lg:w-auto"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-4xl">
            Remove
          </h3>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold mb-10 md:mb-12 lg:mb-16">
          <span className="text-primary">
            <span className="text-3xl md:text-6xl">4</span> Services
          </span>{" "}
          of Four Our Living
        </h2>
      </div>
      <div className="justify-between grid grid-cols-2 gap-5 md:flex">
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/services/TrashValet.png"
            alt="reduce"
            className="mx-auto w-10 md:w-12 lg:w-16"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl">
          Trash Valet
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/services/DeliveryValet.png"
            alt="reuse"
            className="mx-auto w-10 md:w-12 lg:w-16"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl">
          Package Delivery Valet
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/services/CleaningService.png"
            alt="recycle"
            className="mx-auto w-10 md:w-12 lg:w-20"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl">
          Cleaning Service
          </h3>
        </div>
        <div className="py-7 px-7 md:py-8 md:px-8 lg:py-12 lg:px-12 bg-light_2x_secondary text-center space-y-6 hover:bg-light_secondary rounded-xl md:w-60">
          <img
            src="/images/services/DogWalking.png"
            alt="remove"
            className="mx-auto w-10 md:w-12 lg:w-16"
          />
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl">
          Dog Walking
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
