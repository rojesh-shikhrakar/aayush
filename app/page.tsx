import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex items-center">
    <div className="w-1/2">
      <Image
        className="rounded-lg shadow-md"
        src="Photos/Aayush-5M.png"
        alt="Aayush at 5 months"
        width={500}
        height={500}
      />
    </div>
    <div className="w-1/2 p-4">
      <h1 className="text-4xl font-bold mb-4">AaGu, AaaGuuuu!!!</h1>
      <p className="text-gray-700">
        Hi, I&apos;m Aayush Man Shikhrakar. I&apos;m just a baby. I like to eat, sleep, and poop. Gu Gu Ga Ga and Aagu is all I can say. But I&apos;m learning new things every day.
        <br /> <br />
        
        Unfortunately, When I was three months old, I was diagnosed with a rare liver disease called <a href="/BA">Biliary Atresia (BA)</a>, that affects 1 in 20,000 babies. There is no medicine for this disease and the only treatment is a surgery called Kasai Portoenterostomy that removes the damaged bile ducts and replace them with a loop of intestine. However, since I was three months old, chances of success was low. Hence, I need a liver very soon.
        <br /> <br />
        
        Unfortunately again, a liver transplant for infants in Nepal is not recommended. So, I need to go to India for the transplant, It will be fun. I need to be healthy and grow to 10-12 kgs before the transplant. So, my parents are doing their best to take care of me and my liver. I need to take medicines and suppliments, eat healthy food, and avoid infections. It is a long and difficult journey.
        <br /> <br />        
        
        But I am a fighter! And I will survive. <br />
        However, I need your support. My parents are spending a lot of money for my treatment. And they need your help. <Link href="/donation">Please donate to my liver transplant fund</Link>. Your donation will help me get a new liver and a new life. Thank you for your support!
      </p>
    </div>
  </div>

  );  
};
   