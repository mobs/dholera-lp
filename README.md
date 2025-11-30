# 4SFS - For Sure Funds | Finance & Investment Platform

A modern, comprehensive platform for property investment, home loans, insurance solutions, and financial services built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Property Management**: Buy and sell residential, commercial, and premium properties
- **Home Loans**: Multiple loan options with EMI calculator
- **Insurance Solutions**: Health, Life, Vehicle, and General insurance
- **Investment Insights**: Market trends, guides, and expert opinions
- **Blog Section**: Financial tips and property news
- **Modern UI**: Smooth animations with Framer Motion
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Built with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 4sfs-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
4sfs-frontend/
├── app/                    # Next.js App Router pages
├── components/
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── ui/                # Reusable UI components
├── constants/             # All constants and configurations
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── services/              # External services (API, Analytics)
├── public/                # Static assets
└── styles/                # Global styles
```

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed documentation.

## 🎨 Design System

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: `#093819` - Dark green for main branding
- **Secondary**: `#35DEA4` - Bright teal for accents
- **Accent**: `#ED8936` - Orange for highlights
- **Success**: `#48BB78` - Green for success states
- **Warning**: `#ECC94B` - Yellow for warnings
- **Error**: `#F56565` - Red for errors

### Components

All UI components are built following atomic design principles:

- **Atoms**: Button, Input, Badge, etc.
- **Molecules**: Card, Tabs, Accordion, etc.
- **Organisms**: Navbar, Footer, Hero Section, etc.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:5173
NEXT_PUBLIC_GTM_ID=your-gtm-id
```

### Tailwind Configuration

Colors and theme settings can be customized in `tailwind.config.js`.

### Navigation

All navigation items are configured in `constants/navigation.js`.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 5173

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint

# Export
npm run export       # Export static site
```

## 🎯 Key Features Implementation

### Navbar
- Sticky navigation with scroll effects
- Multi-level dropdown menus
- Mobile-responsive with hamburger menu
- Smooth animations with Framer Motion

### Footer
- Comprehensive links organization
- Social media integration
- Newsletter subscription
- Contact information
- SEO-friendly structure

### Hero Section
- Eye-catching gradient backgrounds
- Animated elements
- Search functionality
- Feature highlights
- Call-to-action buttons

## 🔌 Custom Hooks

- `useMediaQuery`: Track responsive breakpoints
- `useScroll`: Detect scroll position and direction
- `useDebounce`: Debounce input values

## 🛠️ Utilities

### lib/utils.js
- `formatPrice`: Indian currency formatting
- `calculateEMI`: EMI calculation
- `formatDate`: Date formatting
- `generateSlug`: URL slug generation
- And many more...

### lib/validations.js
- Form validation functions
- Indian-specific validations (PAN, Aadhaar, IFSC, etc.)
- Composable validators

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px
- **Extra Large**: > 1536px

## 🎨 Component Usage Examples

### Button
```jsx
import Button from '@/components/ui/Button';

<Button variant="primary">Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Card
```jsx
import Card from '@/components/ui/Card';

<Card variant="elevated" hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Tabs
```jsx
import Tabs from '@/components/ui/Tabs';

const tabs = [
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> }
];

<Tabs tabs={tabs} defaultTab={0} />
```

## 📊 Constants Organization

All hardcoded values are stored in the `constants/` directory:

- `navigation.js`: Navigation items, footer links, social links
- `colors.js`: Color palette
- `site.js`: Site-wide configuration
- `blogs.js`: Blog data

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team

Developed by the 4SFS Development Team

## 📞 Support

For support, email support@4sfs.com or visit our [Contact Page](http://localhost:5173/contact).

## 🔄 Updates

### Version 1.0.0 (November 2025)
- Initial release
- Navbar with multi-level dropdowns
- Footer with comprehensive links
- Hero section with animations
- Reusable UI components
- Custom hooks and utilities
- Proper folder structure

## 🎯 Roadmap

- [ ] Property listing pages
- [ ] EMI Calculator integration
- [ ] Insurance quote forms
- [ ] User authentication
- [ ] Property comparison tool
- [ ] Advanced search filters
- [ ] Blog CMS integration
- [ ] Payment gateway integration
- [ ] Admin dashboard

## 📚 Documentation

- [Folder Structure](./FOLDER_STRUCTURE.md)
- [Component Documentation](./docs/components.md) (Coming Soon)
- [API Documentation](./docs/api.md) (Coming Soon)

---

**Built with ❤️ by 4SFS Team**
# 4sfs-frontend-new
# dholera-lp
# dholera-lp
# dholera-lp
