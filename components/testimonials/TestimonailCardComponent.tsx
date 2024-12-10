import { TestimonialType } from "@/difinitions/types/components-type/testimonial";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from 'next/image';

export default function TestimonialCardComponent({ testimonials }: { testimonials: TestimonialType[] }) {
    return (
        <div>
            <Carousel >
            <CarouselContent className="-ml-2 md:-ml-4" >
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="w-[366px] ">
                                <CardContent className=" flex flex-col items-center p-6">
                                    <Image 
                                        src={testimonial.media} 
                                        alt={testimonial.name} 
                                        className="w-20 h-20 rounded-full mb-4" 
                                    />
                                    <p className="text-center mb-2">{testimonial.comment}</p>
                                    <p className="font-semibold text-center">{testimonial.name}</p>
                                    <p className="text-center">{testimonial.position}</p>
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
        
    );
}
