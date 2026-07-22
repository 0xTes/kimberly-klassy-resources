import BrandMark from "../brand/BrandMark";
import Container from "./Container";

export default function SiteHeader({ brand }) {
  return <header className="py-7 sm:py-9"><Container className="text-center"><BrandMark brand={brand} /></Container></header>;
}
