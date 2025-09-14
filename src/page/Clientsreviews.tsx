import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    text: "This service exceeded my expectations. Highly recommended!",
    imageSrc: "https://i.pravatar.cc/100?img=11",
    name: "Amit Sharma",
    EmailID: "amit.sharma@email.com",
  },
  {
    text: "Professional and prompt support throughout the project.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=12",
    name: "Priya Verma",
    EmailID: "priya.verma@email.com",
  },
  {
    text: "The team delivered a beautiful and functional website.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=13",
    name: "Rahul Singh",
    EmailID: "rahul.singh@email.com",
  },
  {
    text: "Great communication and attention to detail.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=14",
    name: "Sneha Patel",
    EmailID: "sneha.patel@email.com",
  },
  {
    text: "I am very happy with the final result. Thank you!estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=15",
    name: "Vikram Joshi",
    EmailID: "vikram.joshi@email.com",
  },
  {
    text: "Fast delivery and excellent quality work.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=16",
    name: "Meera Nair",
    EmailID: "meera.nair@email.com",
  },
  {
    text: "They understood my requirements perfectly.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=17",
    name: "Rohan Gupta",
    EmailID: "rohan.gupta@email.com",
  },
  {
    text: "Creative solutions and a friendly team.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=18",
    name: "Kavita Desai",
    EmailID: "kavita.desai@email.com",
  },
  {
    text: "I will definitely work with them again.estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=19",
    name: "Suresh Kumar",
    EmailID: "suresh.kumar@email.com",
  },
  {
    text: "Outstanding experience from start to finish. Will use again! estimonials array me text me 2 line add karo sab me not secand text variable current text inside the add",
    imageSrc: "https://i.pravatar.cc/100?img=20",
    name: "Anjali Mehta",
    EmailID: "anjali.mehta@email.com",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const ClientsReviews = (props: {
  className: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Duplicate content for infinite effect
    const originalContent = el.innerHTML;
    el.innerHTML += originalContent;

    const totalHeight = el.scrollHeight / 2;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(el, {
      y: -totalHeight,
      duration: props.duration || 10,
      ease: "linear",
      onComplete: () => {
        gsap.set(el, { y: 0 });
      },
    });

    return () => {
      tl.kill();
    };
  }, [props.duration]);

  return (
    <div className={`${props.className} overflow-hidden`}>
      <div ref={scrollRef} className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, EmailID }) => (
              <div key={EmailID} className="card ">
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
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <a
                      className="leading-5 tracking-tight"
                      href={`mailto:${EmailID}`}
                    >
                      {EmailID}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const Clientsreviews = () => {
  return (
    <section className="w-full bg-[#f1f1f1] text-[#212121] font-Neue p-[3.8vw] ">
      <div className="w-full">
        <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">
          Clients’ reviews
        </h1>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mb-8"></div>

      <div className="flex justify-center gap-6 px-[5.8vw] mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[80vh] overflow-hidden">
        <ClientsReviews testimonials={firstColumn} className="" duration={18} />
        <ClientsReviews
          testimonials={secondColumn}
          className="hidden md:block"
          duration={22}
        />
        <ClientsReviews
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={20}
        />
      </div>
    </section>
  );
};
