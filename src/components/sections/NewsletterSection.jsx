import ButtonLink from "../ui/ButtonLink";
import Container from "../layout/Container";

export default function NewsletterSection({ newsletter }) {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="rounded-[2rem] border border-brand/10 bg-surface px-7 py-12 shadow-card sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {newsletter.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-brand sm:text-5xl">
              {newsletter.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-brand/70">
              {newsletter.description}
            </p>
          </div>

          <form
            className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={newsletter.placeholder}
              className="min-h-12 flex-1 rounded-full border border-brand/15 bg-white px-6 text-brand placeholder:text-brand/45 focus:border-accent focus:outline-none"
            />

            <ButtonLink
              href="#"
              className="justify-center"
            >
              {newsletter.buttonLabel}
            </ButtonLink>
          </form>
        </div>
      </Container>
    </section>
  );
}