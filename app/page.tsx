import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="container mx-auto p-4 flex items-center">
    <div className="w-1/2">
      <Image
        className="rounded-lg shadow-md"
        src="Photos/Transfusion.jpg"
        alt="Aayush at 5 months"
        width={500}
        height={500}
      />
    </div>
    <div className="container w-1/2 p-4">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Aayush !!!</h1>
      <p className="text-gray-700">
        When I was three months old, I was diagnosed with a rare liver disease called <b>Biliary Atresia</b>, that affects 1 in 20,000 babies. The only treatment is liver transplant. Unfortunately, a liver transplant for infants is not yet feasible in Nepal. So, I am getting my treatment (i.e transplant) in India in next couple of months.
        <br /> <br />        
        My mom and dad are doing everything they can to give me this chance, but the costs of surgery, hospital stays, international travel, and lifelong medications are more than they can manage alone. That’s why I’m asking for your help. 
        Thank you for believing in me and helping me grow up strong with your support. 

      </p>
    </div>
  </div>
  <div className="container mx-auto p-4 flex items-center">
            
            <p className="text-gray-700">
              <b>Biliary atresia</b> is a rare disease of the liver and bile ducts that occurs in newborns. In this condition, the bile ducts outside and inside the liver get progressively scarred and blocked. Due to blocked bile ducts bile cannot flow out of the liver into the intestine. The build-up of bile in the liver damages it progressively. If the disease is diagnosed before 60 days, a surgical procedure called the Kasai procedure (hepatoportoenterostomy) can be performed to restore bile flow. If the disease is diagnosed after 60 days, the only treatment is a liver transplant.
            
              <br /> <br />
              The initial symptoms are similar to those of jaundice, which is common in newborns hence likeliness of getting misdiagnosed. The symptoms includes yellowness of the skin and eyes, dark urine, pale or clay-colored stools, enlarged liver and spleen, and poor weight gain and growth. The direct bilrubin is considerably high, including all other liver function tests. The only way to confirm the diagnosis is through a liver biopsy.
            </p>
            <Image
              src="BA/Biliary-Atresia.jpg"
              alt="Biliary Atresia Diagram"
              width={400}
              height={300}
              className="mt-4 rounded-lg"
            />
          </div>
  
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Image
              src="reports/Biopsy_1.jpg"
              alt="Biopsy Report"
              width={500}
              height={600}
              className="mt-4 rounded-lg"
            />
            <Image
              src="reports/Ultrasound.jpg"
              alt="Ultrasound Report"
              width={500}
              height={600}
              className="mt-4 rounded-lg"
            />
            <Image
              src="reports/EstimateLetter.jpg"
              alt="Estimate Letter"
              width={500}
              height={600}
              className="mt-4 rounded-lg"
            />
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
   