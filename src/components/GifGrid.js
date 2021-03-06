import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

   const { data: images, loading } = useFetchGifs(category);

   return (
      <>
         <h3 className=" animate__tada">{category}</h3>

         {loading && <p>Loading...</p>}

         <div className="card-grid animate__animated animate__fadeInLeft">
            {
               images.map(img => (
                  <GifGridItem
                     key={img.id}
                     {...img}
                  />
               ))
            }
         </div>
      </>
   );
};

export default GifGrid;
