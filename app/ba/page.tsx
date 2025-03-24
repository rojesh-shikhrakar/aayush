import Image from "next/image";

export default function BiliaryAtresia() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Understanding Biliary Atresia
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What is Biliary Atresia?</h2>
          <p className="text-gray-700">
            Biliary atresia is a rare disease of the liver and bile ducts that
            occurs in newborns. In this condition, the bile ducts outside and
            inside the liver are scarred and blocked. Bile can&apos;t flow into the
            intestine, so it builds up in the liver and damages it.
          </p>
          <Image
            src="BA/Biliary-Atresia.jpg"
            alt="Biliary Atresia Diagram"
            width={400}
            height={300}
            className="mt-4 rounded-lg"
          />
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Jaundice (yellowing of the skin and eyes)</li>
            <li>Dark urine</li>
            <li>Pale or clay-colored stools</li>
            <li>Enlarged liver and spleen</li>
            <li>Poor weight gain and growth</li>
          </ul>
          <Image
            src="BA/StoolChart.jpg"
            alt="Biliary Atresia screening stool color card"
            width={400}
            height={300}
            className="mt-4 rounded-lg"
          />
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-gray-700">
            Diagnosis typically involves a combination of physical examination,
            blood tests, ultrasound, and a liver biopsy.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Treatment</h2>
          <p className="text-gray-700">
            The primary treatment for biliary atresia is a surgical procedure
            called the Kasai procedure (hepatoportoenterostomy). This surgery
            involves removing the blocked bile ducts and connecting the liver
            directly to the small intestine. If the Kasai procedure is not
            successful, or if the liver damage is too severe, a liver transplant
            may be necessary.
          </p>
        </div>
      </div>
    </div>
  );
}
