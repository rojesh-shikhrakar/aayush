import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Aayush !!!</h1>
      <p className="text-gray-700">
        When I was three months old, I was diagnosed with a rare liver disease called <a href="/BA">Biliary Atresia (BA)</a>, that affects 1 in 20,000 babies. The only treatment liver transplant. Unfortunately, a liver transplant for infants is not yet feasible in Nepal. So, I'm getting my treatment (i.e transplant) in India in next couple of months.
        <br /> <br />        
        However, My parents need your support. They are spending a lot of money for my treatment. And they need your help. Your donation will help me get a new liver and a new life. Thank you for your support!
      </p>
    </div>
  </div>
  <div className="container mx-auto p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">I have a Bank Account</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Account Name:</strong> Aayush Man Shikhrakar
            </li>
            <li>
              <strong>Bank Name:</strong> Nabil Bank
            </li>
            <li>
              <strong>Account Number:</strong> 00310017515084
            </li>
            <li>
              <strong>Branch:</strong> New Road, Kathmandu
            </li>
          </ul>
          <br/>
          Please mention in the remark for Liver Transplant Expenses.

          <Image
              src="AayushNabilQR.png"
              alt="QR Code for Donation"
              width={250}
              height={250}
              className="rounded-lg shadow-md"
            />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">For International Donations <br/> Donate to my Father&apos;s account</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Account Name:</strong> Rojesh Man Shikhrakar
            </li>
            <li>
              <strong>Bank Name:</strong> Nabil Bank
            </li>
            <li>
              <strong>Account Number:</strong> 00310017512471
            </li>
            <li>
              <strong>Branch:</strong> New Road, Kathmandu
            </li>
            <li>
              <strong>Swift Code:</strong> NARBNPKA
            </li>
          </ul>
          <br/>
          Please mention in the remark "For Liver Transplant Expenses".

          <Image
              src="RojeshNabilQR.jpg"
              alt="QR Code for Donation"
              width={250}
              height={250}
              className="rounded-lg shadow-md"
            />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Thank You</h2>
        <p className="text-gray-700 text-center">
          Every donation, big or small, makes a difference. We are incredibly
          grateful for your generosity and support during this challenging time.
          <br />
          Together, you can help Aayush get a new liver and a chance to see future.</p>
        </div>
        </div>
    </div>
  );  
};
   