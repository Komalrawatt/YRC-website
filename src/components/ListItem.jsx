import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef(({ className, title, to, children, ...props }, ref) => {
  return (
    <li>
      <Link
        to={to}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;