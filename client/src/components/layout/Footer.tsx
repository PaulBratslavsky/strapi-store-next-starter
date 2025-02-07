
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Strapi Store. All rights reserved.
        </p>
      </div>
    </footer>
  

  )
}
