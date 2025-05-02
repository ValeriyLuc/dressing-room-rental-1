
import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: string;
  size?: number;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  fallback = "HelpCircle",
  className, 
  ...props 
}) => {
  // @ts-ignore - библиотека динамически импортирует иконки
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

  return (
    <LucideIcon 
      size={size} 
      className={className} 
      {...props} 
    />
  );
};

export default Icon;
