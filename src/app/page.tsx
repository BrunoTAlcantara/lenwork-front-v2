import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="hidden lg:flex items-center lg:w-8/12 justify-center  h-full bg-white text-black ">
        <div className="flex-1 h-full text-center">
          <div className="relative w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src="/bg.jpg"
                sizes="100%"
                fill={true}
                objectFit="cover"
                alt="imagem-bg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2179b5] to-[#40c8f4] opacity-80" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-10 pt-20  lg:w-1/4 bg-white ">
        <h1 className="text-4xl font-light text-gray-800 mb-6">
          Lean cadastro
        </h1>
        <div className="h-96"></div>
        {/* <UserForm /> */}
      </div>
    </div>
  );
}
