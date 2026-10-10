'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  LucideIcon,
  Code as CodeIcon,
  Globe as GlobeIcon,
  Layers as LayersIcon,
  UserPlus as UserPlusIcon,
  Users,
  Star,
  FileText,
  Shield,
  RotateCcw,
  Handshake,
  Leaf,
  HelpCircle,
  BarChart,
  Plug as PlugIcon,
} from 'lucide-react';

export type HeaderLinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const prevOpenRef = React.useRef(open);

  // Accessible Body Scroll Lock with Layout Shift Prevention & Escape Listener
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    if (open) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          setOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [open]);

  // Focus Restoration to Trigger on Drawer Close
  React.useEffect(() => {
    if (prevOpenRef.current && !open) {
      triggerRef.current?.focus();
    }
    prevOpenRef.current = open;
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 border-b border-transparent bg-white/70 backdrop-blur-md',
        {
          'bg-white/90 supports-[backdrop-filter]:bg-white/80 border-zinc-200/90 shadow-2xs':
            scrolled,
        }
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hover:bg-zinc-100 rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label="Home"
          >
            <WordmarkIcon className="h-5 text-zinc-950" />
          </a>

          {/* Desktop & Tablet Navigation (Switches to Drawer below 1024px for comfort) */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-1">
                  <div className="w-[540px] rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
                    <ul className="grid grid-cols-2 gap-2">
                      {productLinks.map((item, i) => (
                        <li key={i}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 border-t border-zinc-100 pt-2.5 px-2">
                      <p className="text-zinc-500 text-xs">
                        Interested?{' '}
                        <a
                          href="#"
                          className="text-zinc-950 font-semibold hover:underline"
                        >
                          Schedule a demo
                        </a>
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-1">
                  <div className="grid w-[540px] grid-cols-2 gap-2 rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
                    <ul className="space-y-1">
                      {companyLinks.map((item, i) => (
                        <li key={i}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-1 border-l border-zinc-100 pl-3">
                      {companyLinks2.map((item, i) => (
                        <li key={i}>
                          <NavigationMenuLink
                            href={item.href}
                            className="flex min-h-[40px] p-2 hover:bg-zinc-100 flex-row rounded-lg items-center gap-x-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                          >
                            <item.icon className="text-zinc-600 size-4 shrink-0" />
                            <span className="font-medium text-xs text-zinc-900">
                              {item.title}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink className="px-3" asChild>
                <a
                  href="#"
                  className="hover:bg-zinc-100 rounded-lg p-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                >
                  Pricing
                </a>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 shadow-2xs text-xs font-semibold h-9 px-4 rounded-xl"
          >
            Sign In
          </Button>
          <Button className="bg-zinc-950 text-white hover:bg-zinc-800 shadow-xs text-xs font-semibold h-9 px-4 rounded-xl">
            Get Started
          </Button>
        </div>

        {/* Mobile & Tablet Hamburger Toggle (< 1024px) */}
        <Button
          ref={triggerRef}
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="flex lg:hidden min-h-[44px] min-w-[44px] rounded-xl border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-950 shadow-2xs"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuToggleIcon open={open} className="size-5" duration={250} />
        </Button>
      </nav>

      {/* Accessible Mobile & Tablet Modal Drawer */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        className="flex flex-col justify-between gap-6 overflow-y-auto"
      >
        <div className="flex w-full flex-col gap-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-2 block mb-2">
              Product
            </span>
            <div className="space-y-1">
              {productLinks.map((link) => (
                <div key={link.title} onClick={() => setOpen(false)}>
                  <ListItem {...link} />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-2 block mb-2">
              Company
            </span>
            <div className="space-y-1">
              {companyLinks.map((link) => (
                <div key={link.title} onClick={() => setOpen(false)}>
                  <ListItem {...link} />
                </div>
              ))}
              {companyLinks2.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] p-2.5 hover:bg-zinc-100 flex-row rounded-xl items-center gap-x-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                >
                  <link.icon className="text-zinc-600 size-4 shrink-0" />
                  <span className="font-medium text-xs text-zinc-900">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 pt-4 border-t border-zinc-100">
          <Button
            variant="outline"
            className="w-full min-h-[44px] rounded-xl border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 font-semibold text-xs shadow-2xs"
          >
            Sign In
          </Button>
          <Button className="w-full min-h-[44px] rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 font-semibold text-xs shadow-xs">
            Get Started
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({
  open,
  onClose,
  children,
  className,
  ...props
}: MobileMenuProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 top-16 z-40 flex flex-col bg-white/95 backdrop-blur-xl border-t border-zinc-200 lg:hidden overflow-hidden"
    >
      {/* Clickable Backdrop to close */}
      <div
        className="fixed inset-0 -z-10 bg-black/10 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          'size-full p-4 sm:p-6 overflow-y-auto max-w-lg mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & HeaderLinkItem) {
  return (
    <NavigationMenuLink
      className={cn(
        'w-full flex flex-row items-center gap-x-3 rounded-xl p-2 min-h-[44px] transition-colors',
        'hover:bg-zinc-100 focus:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950',
        className
      )}
      {...props}
      asChild
    >
      <a href={href}>
        <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-2xs">
          <Icon className="text-zinc-800 size-4" />
        </div>
        <div className="flex flex-col items-start justify-center text-left">
          <span className="font-semibold text-xs text-zinc-950 leading-tight">
            {title}
          </span>
          {description && (
            <span className="text-zinc-500 text-[11px] line-clamp-1 mt-0.5">
              {description}
            </span>
          )}
        </div>
      </a>
    </NavigationMenuLink>
  );
}

const productLinks: HeaderLinkItem[] = [
  {
    title: 'Website Builder',
    href: '#',
    description: 'Create responsive websites with ease',
    icon: GlobeIcon,
  },
  {
    title: 'Cloud Platform',
    href: '#',
    description: 'Deploy and scale apps in the cloud',
    icon: LayersIcon,
  },
  {
    title: 'Team Collaboration',
    href: '#',
    description: 'Tools to help your teams work better together',
    icon: UserPlusIcon,
  },
  {
    title: 'Analytics',
    href: '#',
    description: 'Track and analyze your website traffic',
    icon: BarChart,
  },
  {
    title: 'Integrations',
    href: '#',
    description: 'Connect your apps and services',
    icon: PlugIcon,
  },
  {
    title: 'API',
    href: '#',
    description: 'Build custom integrations with our API',
    icon: CodeIcon,
  },
];

const companyLinks: HeaderLinkItem[] = [
  {
    title: 'About Us',
    href: '#',
    description: 'Learn more about our story and team',
    icon: Users,
  },
  {
    title: 'Customer Stories',
    href: '#',
    description: "See how we've helped our clients succeed",
    icon: Star,
  },
  {
    title: 'Partnerships',
    href: '#',
    icon: Handshake,
    description: 'Collaborate with us for mutual growth',
  },
];

const companyLinks2: HeaderLinkItem[] = [
  {
    title: 'Terms of Service',
    href: '/terms/',
    icon: FileText,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy/',
    icon: Shield,
  },
  {
    title: 'Refund Policy',
    href: '#',
    icon: RotateCcw,
  },
  {
    title: 'Blog',
    href: '#',
    icon: Leaf,
  },
  {
    title: 'Help Center',
    href: '#',
    icon: HelpCircle,
  },
];

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

const WordmarkIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 84 24" fill="currentColor" {...props}>
    <path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36-.199-.784-.238-1.128-.234-2.058 0-.691.008-.87.062-1.207.23-1.5.852-2.883 1.852-4.144.297-.371 1.023-1.09 1.41-1.387 1.399-1.082 2.84-1.68 4.406-1.816.536-.047 1.528-.02 2.047.054 1.227.184 2.227.543 3.106 1.121 1.277.84 2.5 2.184 3.367 3.7.098.168.172.308.172.312-.004 0-1.047.723-2.32 1.598l-2.711 1.867c-.61.422-2.91 2.008-2.993 2.062l-.074.047-1-1.574c-.55-.867-1.008-1.594-1.012-1.61-.007-.019.922-.648 2.188-1.476 1.215-.793 2.2-1.453 2.191-1.46-.02-.032-.508-.27-.691-.34a5 5 0 0 0-.465-.13c-.371-.09-1.105-.125-1.426-.07-1.285.219-2.336 1.3-2.777 2.852-.215.761-.242 1.636-.074 2.355.129.527.383 1.102.691 1.543.234.332.727.82 1.047 1.031.664.434 1.195.586 1.969.555.613-.023 1.027-.129 1.64-.426 1.184-.574 2.16-1.554 2.828-2.843.122-.235.208-.372.227-.368.082.032 3.77 1.938 3.79 1.961.034.032-.407.93-.696 1.414a12 12 0 0 1-1.051 1.477c-.36.422-1.102 1.14-1.492 1.445a9.9 9.9 0 0 1-3.23 1.684 9.2 9.2 0 0 1-2.95.351M74.441 23.996c-1.488-.043-2.8-.363-4.066-.992-1.687-.848-2.992-2.14-3.793-3.774-.605-1.234-.863-2.402-.863-3.894.004-1.149.176-2.156.527-3.11.14-.378.531-1.171.75-1.515 1.078-1.703 2.758-2.934 4.805-3.524.847-.242 1.465-.332 2.433-.351 1.032-.024 1.743.055 2.48.277l.31.09.007 2.48c.004 1.364 0 2.481-.008 2.481a1 1 0 0 1-.12-.055c-.688-.347-2.09-.488-2.962-.296-.754.167-1.296.453-1.785.945a3.7 3.7 0 0 0-1.043 2.11c-.047.382-.02 1.109.055 1.437a3.4 3.4 0 0 0 .941 1.738c.75.75 1.715 1.102 2.875 1.05.645-.03 1.118-.14 1.563-.366q1.721-.864 2.02-3.145c.035-.293.042-1.266.042-7.957V0H84l-.012 8.434c-.008 7.851-.011 8.457-.054 8.757-.196 1.274-.586 2.25-1.301 3.243-1.293 1.808-3.555 3.07-6.145 3.437-.664.098-1.43.14-2.047.125M9.848 23.574a14 14 0 0 1-1.137-.152c-2.352-.426-4.555-1.781-6.117-3.774-.27-.335-.75-1.05-.95-1.406-1.156-2.047-1.695-4.27-1.64-6.77.047-1.995.43-3.66 1.23-5.316.524-1.086 1.04-1.87 1.793-2.715C4.567 1.72 6.652.535 8.793.171 9.68.02 10.093 0 12.297 0h1.789v5.441l-.961.016c-2.36.04-3.441.215-4.441.719-.836.414-1.278.879-1.895 1.976-.219.399-.535 1.02-.535 1.063 0 .02 1.285.027 3.918.027h3.914v5.113h-3.914c-2.54 0-3.918.008-3.918.028 0 .05.254.597.441.953.344.656.649 1.086 1.051 1.48.668.657 1.356.985 2.445 1.16.645.106 1.274.145 2.61.16l1.285.016v5.442l-2.055-.004a120 120 0 0 1-2.183-.016M16.469 14.715c0-5.504.011-9.04.031-9.29a5.54 5.54 0 0 1 1.527-3.48c.778-.82 1.922-1.457 3.118-1.734C21.915.035 22.422 0 24.39 0h1.652v4.914h-1.426c-1.324 0-1.445.004-1.644.055-.739.191-1.059.699-1.106 1.754l-.015.355h4.191v4.914h-4.184v11.602h-5.39ZM27.023 14.727c0-5.223.012-9.04.028-9.278.129-1.98 1.234-3.68 3.012-4.62.87-.462 1.777-.716 2.851-.802A61 61 0 0 1 34.945 0h1.649v4.914h-1.426c-1.32 0-1.441.004-1.64.055-.739.191-1.063.699-1.106 1.754l-.02.355h4.192v4.914H32.41v11.602h-5.387ZM55.48 15.406V7.22h4.66v1.363c0 1.3.005 1.363.051 1.363.04 0 .075-.054.133-.203.38-.98.969-1.68 1.711-2.031.563-.266 1.422-.43 2.492-.48l.414-.02v4.914l-.414.035c-.738.063-1.597.195-2.058.313-.297.082-.688.28-.875.449-.324.289-.532.703-.625 1.254-.094.547-.098.879-.098 5.144v4.274h-5.39Zm0 0" />
  </svg>
);
