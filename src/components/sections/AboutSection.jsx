import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection({ about }) {
  return <section id="about" className="py-24 sm:py-32"><Container><div className="grid gap-12 lg:grid-cols-2 lg:gap-24"><SectionHeading eyebrow={about.eyebrow} title={about.title} /><div className="max-w-xl pt-1"><div className="space-y-5 text-base leading-7 text-brand/70">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4" aria-label="Kimberly's values">{about.highlights.map((highlight) => <li className="border-t border-brand/15 pt-3 text-sm font-medium" key={highlight}>{highlight}</li>)}</ul></div></div></Container></section>;
}
