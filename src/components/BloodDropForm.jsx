import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

import { Droplet } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const BloodDropForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for contacting the Youth Red Cross Club.",
    // });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="relative w-full max-w-md mt-6 bg-red-600 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-6">
          <Droplet size={28} className="text-white mr-2" />
          <h2 className="text-2xl font-bold text-white">Send a Message</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-yellow-200 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Email Address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-yellow-200 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Phone Number"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-yellow-200 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[120px]"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-yellow-200 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-red-600 hover:bg-white/90 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BloodDropForm;
