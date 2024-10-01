export default function Footer() {
  const date = new Date();

  return (
    <footer className="mt-auto text-white border-t-2 shadow-lg border-ebony-clay flex justify-center items-center py-6 font-bold text-sm">
      © All rights reserved {date.getFullYear()}
    </footer>
  );
}
