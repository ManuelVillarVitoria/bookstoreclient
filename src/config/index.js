const environmentUrls = new Map();

environmentUrls.set("localhost", "https://localhost:80:80");
environmentUrls.set(
    "books-store-webapp.herokuapp",
    "https://books-demo-store.herokuapp.com/"
);

export default environmentUrls.get(window.location.hostname);