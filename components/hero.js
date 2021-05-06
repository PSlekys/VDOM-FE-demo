const hero = (app, title) => {
  app.innerHTML += `
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">${title}</h1>
            </div>
        </div>
    </section>
`;
};

export default hero;
