import Image from "next/image";

const Overview = () => {
  return (
    <section className="flex justify-between flex-col sm:flex-row">
      <div className="flex-1 space-y-5 py-5">
        <h1 className="text-xl sm:text-3xl">Overview</h1>
        <p className="text-sm">
          Nama saya yayan faturrohman, Saya adalah seorang Full Stack Web
          Developer yang memiliki pengalaman dalam mengembangkan situs web dan
          aplikasi dengan desain menarik dan fungsional.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div>
            <h2 className="text-lg sm:text-2xl">Pendidikan</h2>
            <ul className="text-sm space-y-2 list-disc">
              <li>SDN Kaungcaang 2</li>
              <li>MTS Nurul Falah</li>
              <li>MA Nurul Falah</li>
              <li>Universitas Primagraha</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl">Pekerjaan</h2>
            <ul className="text-sm space-y-2 list-disc">
              <li>Freelancer Web Developer</li>
              <li>Junior Front end Developer at Universitas Primagraha</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src="/me-nobg.png"
          width={250}
          height={250}
          alt="Yayan Faturrohman"
          className="rounded-full w-full max-w-[500px] max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default Overview;
