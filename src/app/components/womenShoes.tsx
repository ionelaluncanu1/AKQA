import data from "@/app/data.json";
import Image from "next/image";

export default function WomenShoes() {
  return (
    <div>
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:max-w-none">
          <h2 className="text-3xl">Women&apos;s Shoes</h2>
          <div className="mt-8 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:space-y-0">
            {data.womenShoes.map((item) => {
              return (
                <div className="group relative" key={item.id}>
                  <div className="relative w-full overflow-hidden rounded-lg bg-white aspect-square group-hover:opacity-75">
                    <Image
                      alt="test"
                      src={item.url}
                      className="h-full w-full object-cover object-center"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                  <div className="mt-6 text-2xl">
                    <span className="absolute inset-0"></span>
                    <span className="flex">
                      {item.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-base text-gray-200">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
