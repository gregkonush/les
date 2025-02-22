// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RainbowButton = ({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) => (
  <button
    type="button"
    className={`
      group relative inline-flex h-11 items-center justify-center rounded-xl px-8 py-2
      ${primary ? 'bg-white text-black hover:bg-white/90' : 'bg-zinc-800 text-white hover:bg-zinc-700'}
      transition-all duration-300

      ${primary ? `
        before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px]
        before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]
        before:bg-[length:200%] before:animate-rainbow

        after:absolute after:inset-0 after:-z-20 after:rounded-xl after:p-[1px]
        after:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]
        after:bg-[length:200%] after:animate-rainbow after:blur-xl
      ` : ''}

      font-medium
    `}
  >
    {children}
  </button>
)

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <div className="group bg-zinc-900/50 backdrop-blur-xl p-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors shrink-0">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-zinc-400 grow">{description}</p>
  </div>
)

const ContentSection = ({ children }: { children: React.ReactNode }) => (
  <div className="prose prose-invert prose-zinc lg:prose-lg mx-auto">
    {children}
  </div>
)

const RootPage = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Digital Supply Chain",
      description: "Real-time visibility into inventory levels, demand forecasting, and automated reordering systems for optimal stock management."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "ESG Compliance",
      description: "Track and ensure compliance with environmental regulations, sustainable packaging initiatives, and ethical sourcing standards."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Market Intelligence",
      description: "AI-powered insights on pricing trends, supplier performance, and market dynamics to optimize procurement decisions."
    }
  ]

  const stats = [
    {
      value: "45%",
      label: "Reduction in Procurement Cycle Time"
    },
    {
      value: "30%",
      label: "Lower Inventory Holding Costs"
    },
    {
      value: "100+",
      label: "Countries Supported"
    }
  ]

  return (
    <>
      <Metadata
        title="Procure.AI | Enterprise CPG Procurement Intelligence"
        description="AI-powered procurement platform for consumer packaged goods (CPG) manufacturers - predictive analytics, smart sourcing, and supply chain optimization"
      />

      {/* Enhanced background with darker gradients */}
      <div className="fixed inset-0 bg-black">
        {/* Base gradient - darker */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950 to-black" />
        {/* Subtle color gradient - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/3 via-transparent to-indigo-950/3" />
        {/* Center radial - darker */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/5 via-zinc-950/5 to-transparent" />
        {/* Top glow - reduced opacity */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/5 via-indigo-950/3 to-transparent" />
      </div>

      <main className="relative min-h-screen text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/90 backdrop-blur-xl border-b border-zinc-900 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400/80 to-indigo-400/80 bg-clip-text text-transparent">
                Procure.AI
              </div>
              <span className="text-zinc-600">|</span>
              <span className="text-sm text-zinc-400">Intelligence Platform</span>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#solutions" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</a>
              <a href="#sustainability" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sustainability</a>
              <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
            </div>
            <RainbowButton primary>
              Get Started
            </RainbowButton>
          </div>
        </nav>

        {/* Hero Section with prose */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
            <div className="text-center">
              <div className="prose prose-invert prose-zinc mx-auto">
                <p className="text-zinc-400 font-medium tracking-wide uppercase not-prose">
                  AI-Powered Procurement Intelligence Platform
                </p>
                <h1 className="text-5xl md:text-7xl !mb-8 !mt-4">
                  Intelligent Supply Chain, <br />
                  Powered by AI
                </h1>
                <p className="!text-xl !text-zinc-400 !leading-relaxed !mb-12">
                  Transform your CPG procurement with predictive analytics,
                  real-time market intelligence, and AI-driven insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center not-prose">
                <RainbowButton primary>
                  Schedule Demo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </RainbowButton>
                <RainbowButton>
                  View Solutions
                </RainbowButton>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-zinc-900/50 backdrop-blur-xl rounded-lg p-8 border border-zinc-800">
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zinc-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section with prose */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ContentSection>
            <h2 className="!text-3xl !font-bold !text-center !mb-12">
              Next-Generation CPG Procurement
            </h2>
          </ContentSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* CTA Section with prose */}
        <div className="relative">
          <div className="absolute inset-0 bg-zinc-900/50 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <ContentSection>
              <h2 className="!text-4xl md:!text-5xl !text-center !mb-6">
                Ready to Modernize Your CPG Operations?
              </h2>
              <p className="!text-xl !text-zinc-300 !text-center !mb-12">
                Join industry leaders in transforming their procurement processes with AI-driven insights and automation.
              </p>
            </ContentSection>
            <div className="text-center not-prose">
              <RainbowButton primary>
                Contact Sales
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </RainbowButton>
            </div>
          </div>
        </div>

        {/* Footer with prose */}
        <footer className="border-t border-zinc-800 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-400/80 to-indigo-400/80 bg-clip-text text-transparent">
                  Procure.AI
                </div>
                <p className="text-zinc-400 text-sm">
                  AI-powered procurement intelligence platform for CPG manufacturers.
                  Transforming supply chains with predictive analytics and smart automation.
                </p>
                <div className="flex space-x-4">
                  <a href="#linkedin" className="text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#twitter" className="text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">SOLUTIONS</h3>
                <ul className="space-y-3">
                  <li><a href="#procurement" className="text-zinc-400 hover:text-white text-sm transition-colors">Procurement Platform</a></li>
                  <li><a href="#inventory" className="text-zinc-400 hover:text-white text-sm transition-colors">Inventory Management</a></li>
                  <li><a href="#sustainability" className="text-zinc-400 hover:text-white text-sm transition-colors">Sustainability Tracking</a></li>
                  <li><a href="#analytics" className="text-zinc-400 hover:text-white text-sm transition-colors">Analytics & Reporting</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">COMPANY</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-zinc-400 hover:text-white text-sm transition-colors">About Us</a></li>
                  <li><a href="#careers" className="text-zinc-400 hover:text-white text-sm transition-colors">Careers</a></li>
                  <li><a href="#press" className="text-zinc-400 hover:text-white text-sm transition-colors">Press</a></li>
                  <li><a href="#blog" className="text-zinc-400 hover:text-white text-sm transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">SUPPORT</h3>
                <ul className="space-y-3">
                  <li><a href="#help" className="text-zinc-400 hover:text-white text-sm transition-colors">Help Center</a></li>
                  <li><a href="#documentation" className="text-zinc-400 hover:text-white text-sm transition-colors">Documentation</a></li>
                  <li><a href="#api" className="text-zinc-400 hover:text-white text-sm transition-colors">API Reference</a></li>
                  <li><a href="#status" className="text-zinc-400 hover:text-white text-sm transition-colors">System Status</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 mt-8 border-t border-zinc-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-zinc-400 text-sm">
                  © {new Date().getFullYear()} Procure.AI. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#privacy" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="#terms" className="text-zinc-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="#cookies" className="text-zinc-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default RootPage
