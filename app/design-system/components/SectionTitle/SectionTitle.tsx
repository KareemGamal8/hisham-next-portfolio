import { cn } from "../../utils/cn";

type SectionTitleProps = {
  mainTitle: string;
  subtitle: string;
  className?: string;
  mainTitleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionTitle({
  mainTitle,
  className,
  mainTitleClassName,
  subtitle,
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <div className={cn("relative", className)}>
      <span
        className={cn(
          "font-edu absolute -top-4 -left-0 bg-gradient-to-tl font-extrabold from-cinder via-violet-red to-black-rose text-transparent bg-clip-text lg:text-xl",
          subtitleClassName,
        )}>
        {subtitle}
      </span>
      <h3 className={cn("text-white text-4xl font-bold", mainTitleClassName)}>
        {mainTitle}
      </h3>
    </div>
  );
}
