import ThoughtInput from "./components/ThoughtInput";

export default async function Feed() {
  return (
    <main className="flex px-10 pb-5 gap-5 h-full justify-around">
      <div className="flex flex-col grow p-5 h-96 bg-white rounded-3xl">
        <h3 className="text-xl font-bold">Following</h3>
      </div>
      <div className="flex grow-[2] flex-col gap-5">
        <ThoughtInput />
        <div className="flex grow w-full h-10 p-5 bg-white rounded-3xl">
          <h2 className="text-2xl font-bold">Thoughts</h2>
        </div>
      </div>
      <div className="flex flex-col grow p-5 h-96 bg-white rounded-3xl">
        <h3 className="text-xl font-bold">Themes</h3>
      </div>
    </main>
  );
}
