import { json } from "d3-fetch";

const tabObjet = [];

Promise.all([
  json("https://jsonplaceholder.typicode.com/users"),
  json("https://jsonplaceholder.typicode.com/posts"),
]).then(([users, posts]) => {
  console.log(users);
  console.log(posts);

  users.forEach((element) => {
    tabObjet.push({
      nom_user: element.name,
      ville: element.address.city,
      nom_companie: element.company.name,
      titres_posts: posts.filter(post => post.userId === element.id).map(post => post.title),
    });
    const nbr_posts = titres_posts.length; 
  });

  console.log(tabObjet[0]);
  console.log(nbr_posts)
});
