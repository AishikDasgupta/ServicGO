import { Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 text-white" />
              <span className="ml-2 text-lg text-white font-bold">TechCRM</span>
            </div>
            <p className="text-white">
              Transforming businesses with modern solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">App Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">SEO Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} TechCRM. All rights reserved. Made with by Aishik Dasgupta</p>
        </div>
      </div>
    </footer>
  );
}