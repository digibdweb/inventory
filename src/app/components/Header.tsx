// components/Header.tsx
export default function Header() {
    return (
      <header className="fixed w-full border-b bg-linear-to-r from-blue-900 to-green-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold"><a href="/barcode">Asset Tracker</a></div>
          <nav className="space-x-6 ">
            <a href="/" className="">
              Home
            </a>
            <a href="/barcode" className="">
              Barcode
            </a>
            <a href="/equipment" className="">
              Equipment
            </a>
            <a href="/about" className="">
              About
            </a>
            <a href="/contact" className="">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
      