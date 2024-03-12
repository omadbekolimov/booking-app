import React from "react";
import HotelHero from "./hero";
import HotelServices from "./services";
import HotelRooms from "./rooms";
import HotelGallary from "./gallary";

function HotelMain() {
  return (
    <div className="w-full">
      {/* navbar */}
      <header>navbar</header>
      {/* Hero page */}
      <section>
        <HotelHero />
      </section>
      {/* Service page */}
      <section>
        <HotelServices />
      </section>
      {/* Rooms page */}
      <section>
        <HotelRooms />
      </section>
      {/* Gallary page */}
      <section>
        <HotelGallary />
      </section>
      {/* Footer */}
      <footer>footer</footer>
    </div>
  );
}

export default HotelMain;
