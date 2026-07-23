import Icon from "../icons/Icon";

function createAnchorId(title) {
  return title
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ResourceCard({ resource }) {
  const anchorId = createAnchorId(resource.title);
  const isDisabled = !resource.href;

  const actionClasses = `mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 ${
    resource.featured ? "text-surface" : "text-brand"
  }`;

  return (
    <article
      id={anchorId}
      className={`flex min-h-72 flex-col rounded-[1.5rem] border p-7 sm:p-8 ${
        resource.featured
          ? "border-accent bg-accent text-surface"
          : "border-brand/10 bg-surface"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid size-11 place-items-center rounded-full ${
            resource.featured ? "bg-surface/15" : "bg-canvas"
          }`}
        >
          <Icon
            name={resource.icon}
            className="size-5"
          />
        </span>

        {resource.emoji && (
          <span
            className="text-2xl"
            role="img"
            aria-label={`${resource.title} emoji`}
          >
            {resource.emoji}
          </span>
        )}
      </div>

      <div className="mt-auto pt-8">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            resource.featured
              ? "text-surface/70"
              : "text-accent"
          }`}
        >
          {resource.subtitle}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
          {resource.title}
        </h3>

        <p
          className={`mt-3 max-w-sm leading-6 ${
            resource.featured
              ? "text-surface/80"
              : "text-brand/65"
          }`}
        >
          {resource.description}
        </p>

        {isDisabled ? (
          <span
            aria-disabled="true"
            className={`${actionClasses} cursor-not-allowed opacity-50`}
          >
            {resource.buttonLabel}

            <Icon
              name="arrow"
              className="size-4"
            />
          </span>
        ) : (
          <a
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className={`${actionClasses} hover:underline`}
          >
            {resource.buttonLabel}

            <Icon
              name="arrow"
              className="size-4"
            />
          </a>
        )}
      </div>
    </article>
  );
}