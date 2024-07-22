import Link from "next/link";

function AboutUsPage() {
  return (
    <>
      <div className="w-full py-12 pl-36 border-b from-gray-800 to-gray-600">
        <div className="flex flex-col text-white w-max">
          <h1 className="text-5xl font-light m-0">About Pango</h1>
        </div>
      </div>
      <div className="flex flex-col p-8 w-4/5 mx-auto bg-white rounded-lg mt-8">
        <h2 className="mt-12 text-gray-900 text-4xl font-semibold">Our Mission</h2>
        <p className="text-gray-900 text-lg my-2 leading-8">
          At Pango, our mission is to empower businesses through innovative web solutions. We strive to be a trusted partner, helping our clients achieve their digital goals with cutting-edge designs and effective strategies.
        </p>
        <h2 className="mt-12 text-gray-900 text-4xl font-semibold">Our Purpose</h2>
        <p className="text-gray-900 text-lg my-2 leading-8">
          Our purpose is to make a positive impact on the digital landscape by delivering high-quality web development services. We believe in creating user-friendly, impactful websites that drive engagement and growth.
        </p>
        <h2 className="mt-12 text-gray-900 text-4xl font-semibold">Our Values</h2>
        <ul className="list-disc pl-5 mt-3">
          <li className="text-gray-900 text-lg my-3 leading-8">
            <b className="text-xl">Integrity:</b> We uphold the highest standards of honesty and transparency in all our projects.
          </li>
          <li className="text-gray-900 text-lg my-3 leading-8">
            <b className="text-xl">Expertise:</b> Our team is dedicated to delivering top-notch web solutions, leveraging years of industry experience.
          </li>
          <li className="text-gray-900 text-lg my-3 leading-8">
            <b className="text-xl">Innovation:</b> We embrace the latest technologies and trends to create websites that stand out.
          </li>
          <li className="text-gray-900 text-lg my-3 leading-8">
            <b className="text-xl">Collaboration:</b> We believe that teamwork is essential for success and building strong relationships with our clients.
          </li>
          <li className="text-gray-900 text-lg my-3 leading-8">
            <b className="text-xl">Responsibility:</b> We take accountability for our actions and their impact on our clients and society.
          </li>
        </ul>
        <p className="text-gray-900 text-lg my-2 leading-8">
          Thank you for considering Pango as your partner in achieving your digital objectives. Please do not hesitate to{" "}
          <Link className="text-gray-900" href="/contactus">
            contact us
          </Link>{" "}
          to learn more about our services and how we can help you succeed.
        </p>
      </div>
    </>
  );
}

export default AboutUsPage;
