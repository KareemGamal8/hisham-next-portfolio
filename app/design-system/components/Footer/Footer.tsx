import Link from "next/link";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="mt-auto text-white border-t-2 shadow-lg border-ebony-clay flex flex-col gap-4 justify-center items-center py-4 font-medium text-base">
      <div className="lg:text-lg">
        Created By
        <Link
          className="px-1 font-semibold text-violet-red underline"
          href="https://www.linkedin.com/in/kareem-gamal-1889a8230/"
          target="_blank"
        >
          Kareem Gamal
        </Link>
      </div>
      <p>© All rights reserved {date.getFullYear()}</p>
    </footer>
  );
}
