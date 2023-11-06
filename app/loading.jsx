import SkeletonCard from "@/components/SkeletonCard";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;