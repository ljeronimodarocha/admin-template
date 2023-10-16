export default function Logo() {
  return (
    <div
      className={`
      flex flex-col
        h-14 w-14 rounded-full items-center justify-center
      bg-white
  `}
    >
      <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`} />
      <div className="flex mt-0.5">
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5" />
        <div className="h-3 w-3 rounded-full bg-green-600 ml-0.5" />
      </div>
    </div>
  );
}
