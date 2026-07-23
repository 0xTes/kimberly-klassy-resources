import Container from "../layout/Container";
import ButtonLink from "../ui/ButtonLink";

export default function CallToAction({ cta }) {
  return <section className="pb-24 sm:pb-32"><Container><div className="rounded-[2rem] bg-brand px-7 py-14 text-center text-surface sm:px-12 sm:py-20"><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{cta.title}</h2><p className="mx-auto mt-4 max-w-xl text-lg text-surface/70">{cta.description}</p><ButtonLink href={cta.action.href} className="mt-8 bg-white text-brand shadow-sm hover:bg-white hover:text-brand hover:shadow-md active:bg-white active:text-brand active:scale-[0.98]">{cta.action.label}</ButtonLink></div></Container></section>;
}
