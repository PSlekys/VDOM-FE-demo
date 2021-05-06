import hero from "./components/hero.js";
import nav from "./components/navigation.js";
import register from "./pages/register.js";
import about from "./pages/about.js";

const app = document.getElementById("app");

function router() {
  app.innerHTML = "";
  nav(app);

  switch (location.hash.slice(1)) {
    case "register":
      hero(app, "Register");
      register(app);
      break;
    case "about":
    default:
      hero(app, "About");
      about(app);
  }
}

router();
addEventListener("hashchange", router);
