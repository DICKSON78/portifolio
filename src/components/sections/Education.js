import { education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Education"
            subtitle="My academic background and qualifications"
          />
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <AnimateOnScroll
              key={item.institution}
              animation="animate-fade-in-up"
              delay={index * 150}
            >
              <TimelineItem
                year={item.year}
                title={item.title}
                subtitle={item.institution}
                description={item.description}
                isLast={index === education.length - 1}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
