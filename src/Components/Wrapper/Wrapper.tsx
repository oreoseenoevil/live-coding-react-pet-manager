interface WrapperProps {
  status: string;
  children: React.ReactNode;
}

export const Wrapper = ({ status, children }: WrapperProps) => {
  return (
    <div>
      <div className="header">
        <h1>{status}</h1>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
