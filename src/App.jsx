// import TopBannerComponent from "./components/TopBannerComponent";
// import Navbar from "./components/Navbar";
// import BannerComponent from "./components/BannerComponent";
// import CountdownComponent from "./components/CountdownComponent";
// import BrandPartnersComponent from "./components/BrandPartnersComponent";
// import ProductsComponent from "./components/ProductsComponent";
// import PolicyComponent from "./components/PolicyComponent";
// import NewsLetterComponent from "./components/NewsLetterComponent";

function App() {
  return (
    <div className="w-full mx-auto h-full">
      {/* <TopBannerComponent />
      <Navbar /> */}
      <div className="pl-4 lg:pl-0 lg:w-[85%] mx-auto py-4 text-xs">
        <p>Home {'>'} <span className="text-gray-400">Official Stores</span></p>
      </div>
      {/* <BannerComponent />
      <CountdownComponent />
      <BrandPartnersComponent />
      <ProductsComponent />
      <PolicyComponent />
      <NewsLetterComponent /> */}
    </div>
  );
}

export default App;