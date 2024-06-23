import { Form } from "@/components/Form";
export default function Home({
  searchParams,
}: {
  searchParams: {
    targets: string;
  },
}) {
  const targets = searchParams.targets?.split(',');
  const isBlanke = !targets || targets.length === 0;

  if (isBlanke) {
    return (
      <Form />
    )
  }

  return (
    <main className="min-h-dvh grid place-items-center">
      <div className="[perspective:1000px] group">
        <div className="w-80 transition duration-1000 group-hover:[transform:translateX(50%)_rotateX(40deg)] aspect-[3/4] [transform-style:preserve-3d] relative [transform:rotateX(20deg)]">
          <div className="[transform-style:preserve-3d] absolute group-hover:[transform:rotateY(-160deg)] origin-left transition duration-1000 inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl text-center pt-20">
            <div className="[transform:translateZ(1px)] absolute inset-0"></div>
            <h1 className="[transform:translateZ(1px)]">DEATH NOTE</h1>
          </div>
          <div className="absolute w-5  bg-zinc-800 inset-y-0 left-0 origin-left [transform:rotateY(90deg)]">
            connect
          </div>
          <div className="[transform-style:preserve-3d] p-6 bg-white border absolute inset-y-4 left-0 right-4 [transform:translateZ(-1px)]">
            <ul>
              {targets.map((target) => (
                <li key={target}>{target}</li>
              ))}
            </ul>
            <div className="w-full h-5 [transform:rotateX(90deg)] origin-bottom bg-white border absolute bottom-0 inset-x-0"></div>
          </div>
          <div className="absolute [transform:translateZ(-20px)] inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl">
            Back
          </div>
        </div>
      </div>
    </main>
  );
}
