import { SectionAltoParaiso } from "../SectionAltoParaiso/SectionAltoParaiso";
import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";
export function MainHome() {
  return (
    // <div className="flex justify-center">
    //   <div className="max-w-7xl">
    <>
        <Banner/>
        <Header />
        <SectionAltoParaiso />
    </>
    //   </div>
    // </div>
  );
}
