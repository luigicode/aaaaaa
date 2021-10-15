import logo from "./logo.svg";

function Nav() {
  return (
    <div>
      <section className="bg-nos">
        <nav className="border-b p-6 ">
          <img src={logo} width="200px" height="50px" />
          <div className="flex font-bold mt-4">
            <a href="/">
              <a className="mr-4 text-red-500 hover:text-red-400">Home</a>
            </a>
            <a href="/sell-pokemon">
              <a className="mr-6 text-red-500 hover:text-red-400">
                Sell pokémon
              </a>
            </a>
            <a href="/my-pokemon">
              <a className="mr-6 text-red-500 hover:text-red-400">My pokémon</a>
            </a>
            <a href="/trainer-dashboard">
              <a className="mr-6 text-red-500 hover:text-red-400">
                Trainer Dashboard
              </a>
            </a>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Nav;
