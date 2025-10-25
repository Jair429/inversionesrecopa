import { SectionAltoParaiso } from "../SectionAltoParaiso/SectionAltoParaiso";
import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";
import { EcoCarousel } from "../EcoCarousel";
import { AgreButton } from "../AgreButton/AgreButton";
import { Form } from "../../components/Form";
import { Social } from "../Social/Social";

export function MainHome() {
  return (
    // <div className="flex justify-center">
    //   <div className="max-w-7xl">

    <>
      <Banner />
      <Header />
      <SectionAltoParaiso />
      <EcoCarousel />
      <AgreButton />
      <Form />
      <div className="flex justify-center pb-20">
        <Social />
      </div>
    </>
    //   </div>
    // </div>
  );
}
