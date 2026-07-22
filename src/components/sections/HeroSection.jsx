import Avatar from "../brand/Avatar";
import Container from "../layout/Container";
import SocialLinks from "../social/SocialLinks";
import ButtonLink from "../ui/ButtonLink";

export default function HeroSection({ brand }) {
  const { identity, hero, socials } = brand;
  return <section className="pb-24 pt-12 sm:pb-32 sm:pt-20"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"><div className="order-2 text-center lg:order-1 lg:text-left"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{hero.eyebrow}</p><h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{hero.headline}</h1><p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-brand/70 lg:mx-0">{hero.description}</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"><ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink><ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink></div><SocialLinks socials={socials} className="mt-10 lg:justify-start" /></div><div className="order-1 flex justify-center lg:order-2"><div className="relative"><div aria-hidden="true" className="absolute inset-4 rounded-full border border-accent/35" /><Avatar image={identity.profileImage} alt={identity.profileImageAlt} initials="KK" className="relative size-56 rounded-full border-[10px] border-surface shadow-soft sm:size-72" /></div></div></div></Container></section>;
}
