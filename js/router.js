class Router {
  //contructor
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }
  //Método para inciar el router
  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URI = pathname === "/" ? "home" : pathname.replace("/", "");
    this.load(URI);
  }

  //Método para cargar las vistas
  load(page = "home") {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.querySelector("#content");
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, "genial", path);
  }
}
