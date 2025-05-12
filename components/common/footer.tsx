export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 text-center text-sm sm:text-base">
        <p>© {new Date().getFullYear()} Summo. All rights reserved.</p>
      </div>
    </footer>
  );
}
