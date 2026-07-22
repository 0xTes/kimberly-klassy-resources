import Container from "../layout/Container";
import ResourceCard from "../ui/ResourceCard";
import SectionHeading from "../ui/SectionHeading";

export default function ResourceSection({ resources }) {
  return (
    <section
      id="resources"
      className="bg-surface py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Official links"
          title="A few places to begin."
          description="Everything here is Kimberly's official space. Choose what feels right and enjoy the journey."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              resource={resource}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}