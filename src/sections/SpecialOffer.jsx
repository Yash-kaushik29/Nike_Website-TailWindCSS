import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Dive into a world of incomparable deals that redefine the very essence
          of value. Our collection boasts top-tier selections that are
          meticulously curated to cater to your discerning taste, all while
          ensuring you unlock unprecedented savings.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Explore a realm of tailored possibilities, exceeding expectations.
          Your journey with us is an exceptional, unforgettable experience,
          redefining fulfillment. Welcome to unparalleled excellence in every
          way.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
