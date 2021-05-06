const register = (app) => {
  app.innerHTML += `
  <section class="section">
    <div class="container">
      <form>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="email@email.com" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="password" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
`;

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);
  });
};
export default register;
