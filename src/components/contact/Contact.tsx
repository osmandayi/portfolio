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
      console.log("MESSAGE Success ");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            Let&apos;s Connect
          </h5>
          <p className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
            mollitia minus repellendus libero repudiandae autem iusto explicabo
            totam sequi sapiente architecto obcaecati nisi sunt praesentium
            aperiam consectetur magnam, numquam perspiciatis? Vero expedita
            repudiandae laborum autem, sint repellendus minima, officia omnis ut
            perferendis quam vel, mollitia corrupti asperiores ex quae.
          </p>
          <div className="flex flex-row gap-4 mt-5">
            <BsGithub className="h-10 w-10 text-white" />
            <BsLinkedin className="h-10 w-10 text-white" />
            <BsGoogle className="h-10 w-10 text-white" />
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
