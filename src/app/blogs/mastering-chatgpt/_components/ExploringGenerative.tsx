import Image from "next/image";
import Link from "next/link";
import React from "react";

// images
import exploringGenerative from "@/src/assets/images/exploring-generative.jpg";

function ExploringGenerative() {
  return (
    <>
      <div className="flex flex-col 2xl:gap-y-8 xl:gap-y-7 lg:gap-y-5 gap-y-4 2xl:text-[20px] xl:text-[18px] lg:text-[17px] text-[15px] text-[#4B5563] [&_a]:text-[#3563E9] [&_a]:font-medium">
        <p>
          Hello there! As a marketing manager in the SaaS industry, you might be
          looking for innovative ways to engage your audience. I bet{" "}
          <strong>Generative AI</strong> has crossed your mind as an option for
          creating content. Well, let me share from my firsthand experience.
        </p>
        <p>
          Google encourages high-quality blogs regardless of whether
          they&apos;re{" "}
          <Link target="_blank" href="">
            written by humans or created using artificial intelligence
          </Link>{" "}
          like ChatGPT. Here&apos;s what matters: producing original material
          with expertise and trustworthiness based on Google{" "}
          <Link target="_blank" href="">
            E-E-A-T principles
          </Link>
          .
        </p>
        <p>
          This means focusing more on people-first writing rather than primarily
          employing AI tools to manipulate search rankings. There comes a time
          when many experienced professionals want to communicate their insights
          but get stuck due to limited writing skills – that’s where Generative
          AI can step in.
        </p>
        <p>
          So, together, we’re going explore how this technology could help us
          deliver valuable content without sounding robotic or defaulting into
          mere regurgitations of existing materials (spoiler alert – common
          pitfalls!). Hang tight - it’ll be a fun learning journey!
        </p>
        <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden">
          <Image src={exploringGenerative} alt="" />
        </div>
      </div>
    </>
  );
}

export default ExploringGenerative;
