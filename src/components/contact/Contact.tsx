"use client";
import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const JSONData = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            Let&apos;s Connect
            {/* İletişime Geçelim */}
            {/* Bana Ulaş */}
          </h5>
          <p className="text-base text-white">
            Sizinle tanışmak ve projeleriniz hakkında konuşmak benim için büyük
            bir zevk olacak. Sorularınız, işbirliği teklifleriniz ya da
            teknoloji üzerine sohbet etmek isterseniz, aşağıdaki iletişim
            seçenekleri aracılığıyla bana ulaşabilirsiniz. Birlikte neler
            yapabileceğimizi keşfetmek için sabırsızlanıyorum. İletişime
            geçmekten çekinmeyin!
            {/* I would be delighted to connect with you and
            discuss your projects. If you have any questions, collaboration
            proposals, or simply want to chat about technology, feel free to
            reach out through the contact options below. I’m excited to explore
            what we can achieve together. Don’t hesitate to get in touch! */}
          </p>
          <div className="flex flex-row gap-4 mt-5">
            <a
              href="https://github.com/osmandayi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-10 w-10 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/osman-d-272a2820b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="h-10 w-10 text-white" />
            </a>
            <a
              href="mailto:osman.dayi3478@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGoogle className="h-10 w-10 text-white" />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          {emailSubmitted ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
          ) : (
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label className="">Your Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="">Message</Label>
                <Textarea
                  className="bg-mycolor-600 mt-2"
                  name="message"
                  placeholder="Type your message here."
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
