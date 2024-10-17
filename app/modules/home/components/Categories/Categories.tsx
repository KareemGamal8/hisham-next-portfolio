import { useInView } from "react-intersection-observer";
import { categoriesData } from "../../data";
import SectionTitle from "@/app/design-system/components/SectionTitle";

export default function Categories() {
  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={categoriesRef}
      className={`bg-cinder pb-16 ${
        categoriesInView && "animate-fade-up animate-duration-[1500ms]"
      }`}
    >
      <div className="container">
        <div className="flex flex-col gap-12 items-center justify-center">
          <SectionTitle
            mainTitle="Industries"
            subtitle="What i've worked with"
            subtitleClassName="left-5"
            mainTitleClassName="text-5xl"
          />
        </div>
        <div className="grid grid-cols-4 max-lg:gap-y-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-3">
          {categoriesData.map((category) => {
            const { Icon, id, name } = category;
            return (
              <div
                key={category.id}
                className="bg-haiti border-[3px] border-ebony-clay cursor-pointer text-white py-6 px-4 mt-8 rounded-2xl transition-all hover:bg-violet-red hover:border-violet-red"
              >
                <Icon size={35} />
                <p className="mt-2 uppercase font-semibold">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
