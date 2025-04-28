// router.js
const router = (function() {
  let routes = {};
  let defaultRoute = null;
  let notFoundPage = null;
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement); // createRoot only once

  function config(routeMap) {
    routes = { ...routeMap };
    defaultRoute = routeMap.default || null;
    notFoundPage = routeMap.notfound || null;

    window.addEventListener('popstate', () => {
      renderRoute(location.pathname.slice(1));
    });

    renderRoute(location.pathname.slice(1)); // render correct page on page load
  }

  function routeTo(path) {
    history.pushState(null, '', '/' + path);
    renderRoute(path);
  }

  function replaceTo(path) {
    history.replaceState(null, '', '/' + path);
    renderRoute(path);
  }

  function renderRoute(path) {
    const Component = routes[path] || notFoundPage || defaultRoute;
    if (root && Component) {
      root.render(Component);
    }
  }

  return { config, routeTo, replaceTo };
})();

// Easy access
const routeTo = router.routeTo;
const replaceTo = router.replaceTo;
