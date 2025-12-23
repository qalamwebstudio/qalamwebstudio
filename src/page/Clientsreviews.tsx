import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    text: "This service exceeded my expectations. Highly recommended! Extra line: Great experience overall.",
    imageSrc: "https://i.pravatar.cc/100?img=11",
    name: "Amit Sharma",
    EmailID: "amit.sharma@email.com",
  },
  {
    text: "Professional and prompt support throughout the project. Extra line: They solved my problem quickly.",
    imageSrc: "https://i.pravatar.cc/100?img=12",
    name: "Priya Verma",
    EmailID: "priya.verma@email.com",
  },
  {
    text: "The team delivered a beautiful and functional website. Extra line: Clean code and great design.",
    imageSrc: "https://i.pravatar.cc/100?img=13",
    name: "Rahul Singh",
    EmailID: "rahul.singh@email.com",
  },
  {
    text: "Great communication and attention to detail. Extra line: Always kept me updated on progress.",
    imageSrc: "https://i.pravatar.cc/100?img=14",
    name: "Sneha Patel",
    EmailID: "sneha.patel@email.com",
  },
  {
    text: "I am very happy with the final result. Thank you! Extra line: The project was completed before deadline.",
    imageSrc: "https://i.pravatar.cc/100?img=15",
    name: "Vikram Joshi",
    EmailID: "vikram.joshi@email.com",
  },
  {
    text: "Fast delivery and excellent quality work. Extra line: Highly recommend their services.",
    imageSrc: "https://i.pravatar.cc/100?img=16",
    name: "Meera Nair",
    EmailID: "meera.nair@email.com",
  },
  {
    text: "They understood my requirements perfectly. Extra line: Smooth collaboration throughout.",
    imageSrc: "https://i.pravatar.cc/100?img=17",
    name: "Rohan Gupta",
    EmailID: "rohan.gupta@email.com",
  },
  {
    text: "Creative solutions and a friendly team. Extra line: Great value for money.",
    imageSrc: "https://i.pravatar.cc/100?img=18",
    name: "Kavita Desai",
    EmailID: "kavita.desai@email.com",
  },
  {
    text: "I will definitely work with them again. Extra line: This is my go-to team for web projects.",
    imageSrc: "https://i.pravatar.cc/100?img=19",
    name: "Suresh Kumar",
    EmailID: "suresh.kumar@email.com",
  },
  {
    text: "Outstanding experience from start to finish. Will use again! Extra line: 5 stars service!",
    imageSrc: "https://i.pravatar.cc/100?img=20",
    name: "Anjali Mehta",
    EmailID: "anjali.mehta@email.com",
  },
];

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  EmailID: string;
};

const TestimonialCard = ({ text, imageSrc, name, EmailID }: Testimonial) => (
  <div className="card">
    <div>{text}</div>
    <div className="flex items-center gap-2 mt-5">
      <Image
        src={imageSrc}
        alt={name}
        width={80}
        height={80}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        <a className="leading-5 tracking-tight" href={`mailto:${EmailID}`}>
          {EmailID}
        </a>
      </div>
    </div>
  </div>
);

interface ClientsReviewsProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

const ClientsReviews = ({
  className,
  testimonials,
  duration = 10,
}: ClientsReviewsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin();
    const el = scrollRef.current;
    if (!el) return;

    const totalHeight = el.scrollHeight / 2;
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(el, {
      y: -totalHeight,
      duration,
      ease: "linear",
      modifiers: { y: gsap.utils.unitize(v => parseFloat(v) % totalHeight) },
    });

    return () => { tl.kill(); };
  }, [duration]);

  // Duplicate data for infinite scroll
  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials]
  );

  return (
    <div className={`${className} overflow-hidden`}>
      <div ref={scrollRef} className="flex flex-col gap-6 pb-6">
        {duplicatedTestimonials.map((t, i) => (
          <TestimonialCard key={`${t.EmailID}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

export const Clientsreviews = () => {
  const firstColumn = useMemo(() => testimonials.slice(0, 3), []);
  const secondColumn = useMemo(() => testimonials.slice(3, 6), []);
  const thirdColumn = useMemo(() => testimonials.slice(6, 9), []);

  return (
    <section className="w-full text-[#212121] font-Neue p-[3.8vw]">
      <div className="w-full justify-center flex items-center">
        <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">
          Clients’ reviews
        </h1>
      </div>

      <div className="flex justify-center gap-6 px-[5.8vw] mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[80vh] overflow-hidden">
        <ClientsReviews testimonials={firstColumn} duration={18} />
        <ClientsReviews testimonials={secondColumn} className="hidden md:block" duration={22} />
        <ClientsReviews testimonials={thirdColumn} className="hidden lg:block" duration={20} />
      </div>
    </section>
  );
};
