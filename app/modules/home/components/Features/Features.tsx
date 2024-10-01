import AnimatedCounter from "apps/front-office/design-system/components/AnimatedCounter";

export default function Features() {
  return (
    <div className="py-2">
      <div className="container">
        <div className="grid sm:grid-cols-3 items-center grid-cols-1 justify-between gap-8">
          <AnimatedCounter
            start={0}
            end={4}
            duration={1000}
            text="Years of experiences"
          />
          <AnimatedCounter
            start={0}
            end={10400}
            duration={1000}
            text="Designs"
          />
          <AnimatedCounter start={0} end={70} duration={1000} text="clients" />
        </div>
      </div>
    </div>
  );
}
