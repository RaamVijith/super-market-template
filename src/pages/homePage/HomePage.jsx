import Header from "../../components/Header/Header"
import FeaturedCategory from "../../components/featuredCategory/FeaturedCategory"
import HeroSection from "../../components/heroSection/HeroSection"
import Banner1 from "../../components/banner1/Banner1"
import ProductListing from "../../components/product_listing/Product_listing"
import PopularProducts from "../../components/popularProducts/PopularProducts"
import Banner2 from "../../components/banner2/Banner2"
import DailyBestSelling from "../../components/dailyBestSelling/DailyBestSelling"
import Footer from "../../components/footer/Footer"
import Highlights from "../../components/higlights/Highlights"

const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroSection/>
        <FeaturedCategory/>
        <Banner1/>
        <PopularProducts/>
        <Banner2/>
        <DailyBestSelling/>
        <Highlights/>
        <Footer/>
    </>
  )
}

export default HomePage