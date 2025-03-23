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
        Hi, I&apos;m Aayush Man Shikhrakar. I&apos;m just a baby. I like to eat, sleep, and poop. Gu Gu Ga Ga and Aagu is all I can say. But I&apos;m learning new things every day. And I&apos;m growing up so fast!
        <br /> <br />
        
        Unfortunately, When I was three months old, I was diagnosed with a rare disorder called Biliary Atresia. It&apos;s a rare liver disease that affects 1 in 20,000 babies. Even many of the doctors here in Nepal haven’t met a baby with my condition before. Since, It&apos;s the liver, there&apos;s no medicine to cure it. The only treatment is a surgery called Kasai Portoenterostomy to remove the damaged bile ducts and replace them with a loop of intestine. However, since I was three months old, chances of success was low. Furthermore, my liver was already reach cirrhosis the end-stage of the liver disease. Hence, I need a liver very soon.
        <br /> <br />
        
        Unfortunately again, there&apos;s no possibility of liver transplant for infants in Nepal. So, I get to travel to India for the transplant, It will be fun. But, I&apos;m too small for the transplant. So, I need to wait until I&apos;m 10-12 kgs. And I need to be healthy for the transplant. So, my parents need to take care of me and my liver. I need to take medicines and suppliments, eat healthy food, and avoid infections. It&apos;s a long and difficult journey.
        <br /> <br />        
        
        But I&apos;m a fighter! I&apos;ll survive. <br />
        However, I need your support. My parents are spending a lot of money for my treatment. And they need your help. <Link href="/donation">Please donate to my liver transplant fund</Link>. Your donation will help me get a new liver and a new life. Thank you for your support!
      </p>
    </div>
  </div>

  );  
};
   