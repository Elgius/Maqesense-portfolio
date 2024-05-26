import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image src="/images/1.jpg" alt="The image" width={800} height={800} />
    </div>
  );
};

export default page;
