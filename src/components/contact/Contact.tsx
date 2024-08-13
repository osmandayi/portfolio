"use client";
import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLanguage } from "@/context/language";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const { language } = useLanguage();
  const {
    letsConnect,
    letsConnectDesc,
    yourEmail,
    yourEmailPlaceholder,
    subject,
    message,
    messagePlaceholder,
    sendMessage,
    headsUp,
    headsUpMessage,
  } = language;

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
        <div className="col-span-1 flex flex-col gap-3">
          <h2 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            {letsConnect}
            {/* İletişime Geçelim */}
            {/* Bana Ulaş */}
          </h2>
          <p className="text-base text-white">{letsConnectDesc}</p>
          <div className="flex flex-row gap-4 mt-5">
            <a
              href="https://github.com/osmandayi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <BsGithub className="h-10 w-10 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/osman-d-272a2820b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin className="h-10 w-10 text-white" />
            </a>
            <a
              href="mailto:osman.dayi3478@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email to Osman"
            >
              <BsGoogle className="h-10 w-10 text-white" />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          {emailSubmitted ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>{headsUp}</AlertTitle>
              <AlertDescription>{headsUpMessage}</AlertDescription>
            </Alert>
          ) : (
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label className="">{yourEmail}</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder={yourEmailPlaceholder}
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="">{subject}</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder={subject}
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="">{message}</Label>
                <Textarea
                  className="bg-mycolor-600 mt-2"
                  name="message"
                  placeholder={messagePlaceholder}
                  required
                />
              </div>
              <Button type="submit">{sendMessage}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
