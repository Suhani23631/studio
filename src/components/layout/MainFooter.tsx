export function MainFooter() {
  return (
    <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Chronicler. All rights reserved.</p>
        <p className="text-xs mt-1">Crafted with care for storytelling.</p>
      </div>
    </footer>
  );
}
