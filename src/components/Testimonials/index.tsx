import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "riya S",
    designation: "Trader",
    content:
      "Bargainwale has completely streamlined our order management process. It’s user-friendly, efficient, and saves us so much time. Highly recommend it for manufacturers and traders!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Anil D.",
    designation: "Retailer",
    content:
      "As a seller managing multiple clients, Bargainwale’s intuitive dashboard and automated tools are a lifesaver. It’s like having an extra team member who never sleeps!",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Ravi K",
    designation: "Small Business Owner",
    content:
      "Our growing business needed a reliable SaaS tool, and Bargainwale fits perfectly. The only reason I didn’t give 5 stars is that I’d love more customization options.",
    image: "/images/testimonials/author-03.png",
    star: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our users say Say"
          paragraph="From intuitive design to powerful features, out app has become an essential tool for users around the world."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
