export default function AuthLayoutRoute({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {children}
    </div>
  );
}