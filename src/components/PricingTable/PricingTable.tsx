import List from "./List";
import { pricingPlans } from "./Pricing";
import PricingCard from "./PricingCard";
import PricingCardTwo from "./PricingCardTwo";

const Pricing = () => {
 
  return (
    <section className="overflow-hidden my-10" id="pricing">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark  sm:text-4xl md:text-[40px]">
                Monthly Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Explore pricing structure with detailed information on different
                subscription levels and corresponding monthly costs.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center gap-1">
          <div className="-mx-4 flex flex-wrap">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.type}
                type={plan.type}
                price={plan.price}
                subscription={plan.subscription}
                description={plan.description}
                glow={plan.type === "Premium"} // Add this line
              >
                {plan.features.map((feature, idx) => (
                  <List key={idx}>{feature}</List>
                ))}
              </PricingCard>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark  sm:text-4xl md:text-[40px]">
            Project Basis Pricing Plan
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Breakdown of costs and features for customizable project-based
            pricing plans tailored to your specific needs.
          </p>
        </div>

        <div className="w-[100%] flex flex-wrap justify-center">
          <PricingCardTwo
            type="Premium"
            price1="₹899"
            subscription1="Reel"
            price2="₹1499"
            subscription2="Long Content"
            price3="₹1899"
            subscription3="Podcast"
            description="Perfect for professional content creator."
          >
            <List>Unlimited revision</List>
            <List>Flexible timeline</List>
            <List>Free consultation</List>
            <List>Dedicated support</List>
          </PricingCardTwo>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
