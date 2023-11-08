import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section>
      <h1 className="text-xl sm:text-3xl font-bold mt-3 mb-3">Contact</h1>
      <div className="w-full flex justify-between flex-col sm:flex-row gap-5">
        <div className="max-w-sm space-y-5">
          <p className="text-sm text-gray-500">
            Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
          </p>
          <div className="w-full space-y-5">
            <div className="flex gap-3">
              <div className="p-2 rounded bg-slate-800 flex justify-center items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8123 6.25C20.0332 6.48821 21.1553 7.08532 22.0349 7.96492C22.9145 8.84452 23.5116 9.96658 23.7498 11.1875L18.8123 6.25ZM18.8123 1.25C21.3489 1.5318 23.7143 2.66772 25.5201 4.47126C27.3259 6.2748 28.4648 8.63876 28.7498 11.175L18.8123 1.25ZM27.4998 21.15V24.9C27.5012 25.2481 27.4299 25.5927 27.2904 25.9117C27.151 26.2307 26.9464 26.517 26.6899 26.7523C26.4334 26.9877 26.1305 27.1669 25.8007 27.2784C25.471 27.3899 25.1215 27.4313 24.7748 27.4C20.9283 26.9821 17.2335 25.6677 13.9873 23.5625C10.9671 21.6433 8.40647 19.0827 6.48729 16.0625C4.37477 12.8015 3.0601 9.08874 2.64979 5.225C2.61856 4.87933 2.65964 4.53095 2.77042 4.20203C2.8812 3.87311 3.05926 3.57086 3.29325 3.31453C3.52725 3.05819 3.81205 2.85339 4.12953 2.71315C4.44702 2.57292 4.79022 2.50033 5.13729 2.5H8.8873C9.49393 2.49403 10.082 2.70885 10.542 3.10442C11.002 3.49998 11.3024 4.04931 11.3873 4.65C11.5456 5.85008 11.8391 7.02841 12.2623 8.1625C12.4305 8.6099 12.4669 9.09614 12.3672 9.5636C12.2675 10.0311 12.0359 10.4601 11.6998 10.8L10.1123 12.3875C11.8917 15.5169 14.4829 18.1081 17.6123 19.8875L19.1998 18.3C19.5397 17.9639 19.9687 17.7323 20.4362 17.6326C20.9037 17.5329 21.3899 17.5693 21.8373 17.7375C22.9714 18.1607 24.1497 18.4542 25.3498 18.6125C25.957 18.6982 26.5115 19.004 26.908 19.4719C27.3044 19.9397 27.515 20.537 27.4998 21.15Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-500">Phone</h3>
                <p className="text-sm">+62 838 7361 4764</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-2 rounded bg-slate-800 flex justify-center items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.5 7.5L15 16.25L2.5 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-500">Email</h3>
                <p className="text-sm">yayanfathurohman20@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="w-full flex justify-start mr-24">
            <div className="p-3 rounded bg-gray-800 max-w-sm">
              <p>“Aku akan sangat senang sekali mendapat pesan dari Anda”</p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Image
              src={"/me.png"}
              width={100}
              height={100}
              alt="Yayan faturrohman"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
