import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const CardDesign = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="flex gap-2">
          {" "}
          <Image
            src={
              "https://i.pinimg.com/originals/0b/1d/fc/0b1dfc8ebe6f365f4208cb0cff5c46c9.gif"
            }
            alt="Coder"
            className="border rounded-lg"
            width={50}
            height={50}
          />{" "}
          <span className="w-full flex-col">
            <h1>RealTime </h1>
            <h2>COdeCOntribute</h2>
          </span>
        </CardTitle>
        <CardDescription>Simply Code With Any one in Real Time</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 ">
        <Input type="text" placeholder="Group ID" />
        <Input type="text" placeholder="Enter Your Name" />
        <Button className="w-full">Join</Button>
      </CardContent>
      <CardFooter className="flex flex-col w-full gap-2">
        <div className="flex  w-full gap-2">
          <p>Create Room to share:</p>
          <Link className="bg-blue-500 text-blue-400" href={"/room"}>
            New Room
          </Link>
        </div>
        <div className="flex  w-full gap-2">
          <p className="flex gap-2">
            This Project is OpenSource On
            <Link
              className=""
              href={"https://github.com/prab002/multiple-user-editor"}
            >
              GitHub
            </Link>
          </p>
          <Image
            src={
              "https://i.pinimg.com/originals/2e/e6/4c/2ee64c1f8e4358d928d265f5b8389a35.gif"
            }
            alt="Coder"
            width={20}
            height={20}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardDesign;
