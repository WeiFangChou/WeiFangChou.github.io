"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

export function ContactForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const values = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setIsSubmitting(false);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full  max-w-md p-4">
        <CardHeader>
          <p className="text-2xl font-bold">Contact Us</p>
        </CardHeader>
        <CardBody>
          <Form onSubmit={onSubmit} validationBehavior="native" id="contact">
            <Input
              label="Name"
              isRequired
              id="name"
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your name";
                }
              }}
            />
            <Input
              label="Email"
              isRequired
              id="email"
              type="email"
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your email";
                }
                if (validationDetails.typeMismatch) {
                  return "Please enter a valid email address";
                }
              }}
            />
            <Input
              label="Phone"
              id="phone"
              type="tel"
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your phone number";
                }
                if (validationDetails.typeMismatch) {
                  return "Please enter a valid phone number";
                }
              }}
            />
            <Textarea
              label="Message"
              isRequired
              id="message"
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your message";
                }
              }}
            />
            <Button isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
