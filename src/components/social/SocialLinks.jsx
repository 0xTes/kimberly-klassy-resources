import Icon from "../icons/Icon";

export default function SocialLinks({ socials, className = "" }) {
  return <ul className={`flex flex-wrap justify-center gap-2 ${className}`} aria-label="Social links">{socials.map((social) => <li key={social.name}><a className="grid size-10 place-items-center rounded-full border border-brand/15 text-brand transition hover:border-accent hover:bg-surface" href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Kimberly on ${social.name}`}><Icon name={social.icon} className="size-4" /></a></li>)}</ul>;
}
