import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey and career highlights"
          />
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <AnimateOnScroll
              key={item.company}
              animation="animate-fade-in-up"
              delay={index * 150}
            >
              <TimelineItem
                year={item.year}
                title={item.title}
                subtitle={item.company}
                description={item.description}
                tags={item.tags}
                isLast={index === experience.length - 1}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
