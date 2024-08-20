import { Button, Input, Textarea } from "@nextui-org/react";
import { resolve } from "path";
import { useState } from "react";
export default function Projects() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(0);
  const [errorCounts, setErrorCounts] = useState(3);

  async function submit(e: any) {
    e.preventDefault();
    if (name == "" || email == "" || phone == "" || message == "") {
      setSendMessage(4);
      setTimeout(() => {
        setSendMessage(0);
      }, 2000);

      return;
    }

    try {
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      await response.json();
    } catch (error) {}
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
              label="Name"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="p-3">
            <Input
              isRequired
              label="Phone"
              placeholder="Enter your phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="p-3">
            <Input
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-3">
            <Textarea
              isMultiline
              isRequired
              label="Messages"
              minRows={10}
              size="lg"
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

    case 1:
      //Sending
      return (
        <Button isLoading color="primary" name="submit" size="lg">
          Loading
        </Button>
      );
    case 3:
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
