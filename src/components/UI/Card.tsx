/* eslint-disable padding-line-between-statements */
import { Card as HeroCard, CardHeader, CardBody, Image, CardFooter, Button } from "@heroui/react";
import { format } from "date-fns";

import { IPost } from "@/src/types";

const PostCard = ({ post }: { post: IPost }) => {
  const { title, category, images, city, dateFound, _id } = post || {};
  return (
    <HeroCard className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold"> {category?.name}</p>
        <small className="text-default-500"> {format(new Date(dateFound), "dd MMMM, yyyy")}</small>
        <h4 className="font-bold text-large"> {title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          removeWrapper
        alt="Card example background"
        className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
        src={images[0]}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
         <p className="text-tiny text-black">{city}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Details
        </Button>
      </CardFooter>
    </HeroCard>
  );
};

export default PostCard;