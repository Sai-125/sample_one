import React, { useEffect } from "react";
import Products from "./Products";

const Home = () => {
  useEffect(() => {
    localStorage.setItem(
      "updateitems",
      JSON.stringify({
        id: "",
        image: "",
        description: "",
        title: "",
        price: "",
        rating: "",
      })
    );
  }, []);

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/242/027/original/set-of-fresh-fruits-agriculture-farmers-market-local-produce-shopping-and-harvesting-text-poster-flat-illustration-vector.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          {/* <div class="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/001/254/426/non_2x/online-grocery-shopping-banner-template-with-fruits-vector.jpg" class="d-block w-100" alt="..." style={{height:'80vh',objectFit:'contain'}}/>
    </div>
    <div class="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/05/01/56/19/1000_F_501561996_vICV6nqNAngNZbguqro5cS3a8t00nMjv.jpg" class="d-block w-100" alt="..." style={{height:'80vh',objectFit:'contain'}}/>
    </div> */}
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> */}
        {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
      </div>

      <div className="">
        <Products />
      </div>
    </div>
  );
};

export default Home;
