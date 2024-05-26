export default async function loader(url){
    return await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}