import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          expedita placeat reprehenderit dicta deleniti voluptatem dolorum quam
          nobis impedit tempora cum eligendi esse iste temporibus doloremque
          fuga praesentium, molestias voluptas aliquid voluptatum. Est quaerat
          iste possimus fugiat vel saepe tempora minima, ipsam natus dignissimos
          quae, explicabo veniam iusto culpa aliquam.
        </p>
        <br/>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic eos vel qui ullam. Vel, eveniet vero modi amet dicta inventore quisquam! Fugiat eum odio quo neque eligendi ratione perspiciatis officia rerum et assumenda, eos recusandae ex ipsum accusantium, odit animi ea quasi ut excepturi consequatur quas deleniti quidem laboriosam!</p>
      </div>
    </div>
  );
};

export default About;
