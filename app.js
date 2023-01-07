function router(params) {
  const routes = [
    { path: "/", view: () => console.log("dashboard page") },
    { path: "product", view: () => console.log("product page") },
    { path: "call", view: () => console.log("call page") },
  ];

  const potentialRoute = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoute.find((route) => route.isMatch);

  if (!match) {
    match= {
      route: { path: "not-found", view: () => console.log("not founded page") },
      isMatch: true,
    };
  }
  console.log(match.route.view());
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});
