    import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = ({ variant = "default", className, ...props }: ButtonProps) => {
  const base = "rounded-full font-medium px-6 py-3 transition-all duration-200";
  const variants = {
    default: "bg-black text-white hover:opacity-80",
    outline: "border border-gray-400 hover:bg-gray-100",
  };

  return <button className={clsx(base, variants[variant], className)} {...props} />;
};
