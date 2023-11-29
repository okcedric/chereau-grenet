import Gallery from "./Gallery";
function Grid({ data }) {
  return data.map((gallery) => (
    <Gallery key={gallery.title} gallery={gallery}></Gallery>
  ));
}
export default Grid