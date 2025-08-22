export const SectionTitle = ({ title, id }: { title: string; id: string }) => {
  return (
    <h2
      id={id}
      className="text-4xl text-center font-medium bg-gradient-to-l from-green-dark via-green-primary to-green-accent bg-clip-text text-transparent mb-6"
    >
      {title}
    </h2>
  );
};
