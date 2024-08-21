import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessage3Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import React from "react";

export default function Projects() {
  const [email, setEmail] = useState("chou@gmail.com");
  const [phone, setPhone] = useState("0987654321");
  const [name, setName] = useState("Jack");
  const [message, setMessage] = useState("Message");
  const [sendMessage, setSendMessage] = useState(0);

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  async function submit(e: any) {
    e.preventDefault();
    console.log("Test 0");
    setSendMessage(2);
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (name == "" || email == "" || phone == "" || message == "") {
      console.log("Test 1", email, name, phone, message);
      setSendMessage(4);
      setTimeout(() => {
        setSendMessage(0);
      }, 1000);

      return;
    }
    console.log("Test Email", isInvalidEmail);
    if (isInvalidEmail) {
      console.log("Test Email 1");
      setSendMessage(2);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSendMessage(4);
      setTimeout(() => {
        setSendMessage(0);
      }, 1000);

      return;
    }

    try {
      console.log("Test");

      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      await response.json();
      setSendMessage(9);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSendMessage(0);
    } catch (error) {
      setSendMessage(4);
    }
  }

  return (
    <div className="md:flex justify-center " id="contact">
      <div className="md:w-1/2 sm:w-full">
        <form method="post" onSubmit={submit}>
          <h1 className="text-3xl font-bold p-3">Contact Me</h1>
          <div className="p-3">
            <Input
              isClearable
              isRequired
              color="default"
              label="Name"
              placeholder="Enter your name"
              startContent={<MdPerson />}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <Input
              isRequired
              color="default"
              label="Phone"
              placeholder="Enter your phone"
              startContent={<FaPhone />}
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="p-3">
            <Input
              isRequired
              color={isInvalidEmail ? "danger" : "success"}
              isInvalid={isInvalidEmail}
              label="Email"
              placeholder="Enter your email"
              startContent={<HiOutlineMail />}
              type="email"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-3">
            <Textarea
              isMultiline
              isRequired
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              color="default"
              label="Messages"
              minRows={10}
              size="lg"
              startContent={<RiMessage3Fill />}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="p-3 w-full flex justify-center ">
            {generateSendButton(sendMessage)}
          </div>
        </form>
      </div>
    </div>
  );
}

export function generateSendButton(event: number) {
  switch (event) {
    case 0:
      //Initial
      return (
        <Button color="primary" name="submit" size="lg" type="submit">
          SEND MESSAGE
        </Button>
      );

    case 2:
      //Sending
      return <Spinner color="warning" label="Sending..." />;
    case 9:
      //Success
      return (
        <Button color="primary" name="submit" size="lg" type="submit">
          Success
        </Button>
      );
    case 4:
      //Failed
      return (
        <Button
          isDisabled
          color="primary"
          name="submit"
          size="lg"
          type="submit"
        >
          ERROR
        </Button>
      );
  }
}
