import Dashboard from "./pages/Dashboard.js";
import Products from "./pages/Products.js";
import Call from "./pages/Call.js";

function router(params) {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/products", view: Products },
    { path: "/call", view: Call },
  ];

  const potentialRoute = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoute.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "not-found", view: () => console.log("not founded page") },
      isMatch: true,
    };
  }
  document.querySelector(".main-page").innerHTML= match.route.view();
}
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
