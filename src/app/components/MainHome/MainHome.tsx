import { SectionAltoParaiso } from "../SectionAltoParaiso/SectionAltoParaiso";
import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";
import { CarouselSwiper } from "../CarouselSwiper/CarouselSwiper";
import { EcoCarousel } from "../EcoCarousel";
import { AgreButton } from '../AgreButton/AgreButton';

export function MainHome() {
  return (
    // <div className="flex justify-center">
    //   <div className="max-w-7xl">

    <>
      <Banner />
      <Header />
      <SectionAltoParaiso />
      <EcoCarousel />
      <AgreButton/>
      {/* <CarouselSwiper/> */}
    </>
    //   </div>
    // </div>
  );
}
