"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// images
import logoOne from "@/src/assets/images/client logos/partnerlogo_1.svg";
import logoTwo from "@/src/assets/images/client logos/partnerlogo_2.svg";
import logoThree from "@/src/assets/images/client logos/partnerlogo_13.svg";
import logoFour from "@/src/assets/images/client logos/partnerlogo_4.svg";
import logoFive from "@/src/assets/images/client logos/partnerlogo_5.svg";
import logoSix from "@/src/assets/images/client logos/partnerlogo_6.svg";
import logoSeven from "@/src/assets/images/client logos/partnerlogo_7.svg";
import logoEight from "@/src/assets/images/client logos/partnerlogo_8.svg";
import logoNine from "@/src/assets/images/client logos/partnerlogo_9.svg";
// import logoTen from "@/src/assets/images/client logos/partnerlogo_10.svg";

const ClientsPartners: React.FC = () => {
  const clientData = [
    { partnerLogo: logoOne },
    { partnerLogo: logoTwo },
    { partnerLogo: logoThree },
    { partnerLogo: logoFour },
    { partnerLogo: logoFive },
    { partnerLogo: logoSix },
    { partnerLogo: logoSeven },
    { partnerLogo: logoEight },
    { partnerLogo: logoNine },
    // { partnerLogo: logoTen },
  ];

  const clientLageLogo = [
    { partnerTopLogo: logoOne,},
    { partnerTopLogo: logoTwo,  },
    { partnerTopLogo: logoThree,  },
    { partnerTopLogo: logoFour, },
    // {partnerTopLogo:logoFive,partnerBottomLogo:logoTen},
    { partnerTopLogo: logoFive,  },
    { partnerTopLogo: logoSix, },
    { partnerTopLogo: logoSeven,  },
    { partnerTopLogo: logoEight,  },
    // {partnerTopLogo:logoFive,partnerBottomLogo:logoTen},
  ]
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="2xl:py-[45px] xl:py-[66px] py-[40px] px-[25px]">
          <div className="xl:mb-[45px] mb-[40px]">
            <h5 className="text-black font-bold xl:text-[22px] lg:text-base text-[28px] text-center">
              Our Clients &amp; Partners
            </h5>
          </div>
          <div className="md:grid hidden grid-cols-1 2xl:gap-[28px] xl:gap-[42px]">
            {/* {clientData.map((data, index) => (
              <div key={index} className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] flex justify-center">
              <Image
                src={data.partnerLogo}
                alt="Partner Logo"
                width={0}  // Auto-scale width
                height={0} // Auto-scale height
                className="w-full h-auto object-contain"
              />
            </div>
            ))} */}
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 1000,
                }),
              ]}
            >
              <CarouselContent>
                {clientLageLogo.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="lg:basis-1/6 basis-2/4 max-[420px]:basis-full"
                  >
                    <div className="flex justify-center flex-col 2xl:gap-y-[60px] xl:gap-y-[38px] gap-y-[32px] 2xl:gap-x-[60px] xl:gap-x-[38px] gap-x-[32px]">
                      <Image
                        src={data.partnerTopLogo}
                        alt=""
                        width={0} // Auto-scale width
                        height={0} // Auto-scale height
                        className="w-full h-auto max-h-[50px] object-contain"
                      />
                      {/* <Image
                        src={data.partnerBottomLogo}
                        alt=""
                        width={240}
                        height={80}
                      /> */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="md:hidden">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {clientData.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="min-[576px]:basis-1/3 basis-1/2"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={data.partnerLogo}
                        alt=""
                        width={0} // Auto-scale width
                        height={0} // Auto-scale height
                        className="w-full h-auto max-h-[40px] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ClientsPartners;
