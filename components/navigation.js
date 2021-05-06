const token = localStorage.getItem("token");

const publicLinks = [
  {
    name: "Login",
    path: "login",
  },
  {
    name: "Register",
    path: "register",
  },
];

const privateLinks = [
  {
    name: "Home",
    path: "dashboard",
  },
];

const navigation = (app) => {
  const path = location.hash.slice(1);

  app.innerHTML += `
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google"
                />
            </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    ${
                      token
                        ? privateLinks
                            .map(
                              (x) =>
                                `<button class="button" onclick="location.hash = '${x.path}'">${x.name}</button>`
                            )
                            .join("")
                        : publicLinks
                            .map(
                              (x) =>
                                `<button class="button ${
                                  path === x.path && "is-primary"
                                }" onclick="location.hash = '${x.path}'">${
                                  x.name
                                }</button>`
                            )
                            .join("")
                    } 
                </div>
            </div>
        </div>
        </div>
    </nav>
`;
};

export default navigation;
