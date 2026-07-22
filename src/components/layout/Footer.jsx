import BrandMark from "../brand/BrandMark";
import SocialLinks from "../social/SocialLinks";
import { brandConfig } from "../../config/brand.config";
import Container from "./Container";

export default function Footer({ footer, brand }) {
  const { contact, legalLinks, additionalLinks, showSocials, copyright } = footer;
  const contactItems = [contact.email && { label: contact.email, href: `mailto:${contact.email}` }, contact.phone && { label: contact.phone, href: `tel:${contact.phone}` }, contact.address && { label: contact.address }].filter(Boolean);
  const links = [...legalLinks, ...additionalLinks];
  return <footer className="border-t border-brand/10 py-10"><Container><div className="flex flex-col items-center gap-6 text-center"><BrandMark brand={brand} compact />{showSocials && <SocialLinks socials={brandConfig.socials} />} {contactItems.length > 0 && <address className="not-italic text-sm text-brand/65">{contactItems.map((item) => item.href ? <a className="mx-2 hover:text-brand" href={item.href} key={item.label}>{item.label}</a> : <span className="mx-2" key={item.label}>{item.label}</span>)}</address>}{links.length > 0 && <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-brand/65">{links.map((link) => <a className="hover:text-brand" href={link.href} key={link.label}>{link.label}</a>)}</nav>}<p className="text-xs text-brand/55">{copyright.replace("{year}", new Date().getFullYear())}</p></div></Container></footer>;
}
