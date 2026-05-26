import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Al Coronado Plumbing",
    tagline: "Expert Plumbers, Always There For You",
    phone: "(520) 834-8400",
    phoneHref: "tel:+15208348400",
    email: "info@alcoronadoplumbing.com",
    address: "6149 N Travel Center Dr, Tucson, AZ 85741",
    city: "Tucson",
    serviceAreas: ["Tucson", "Catalina", "Green Valley", "Marana", "Oro Valley", "Picture Rocks", "Saddlebrooke", "Sahuarita", "Vail"],
    license: "AZ ROC 123456",
    since: "1980",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "plumbing",
  },

  services: [
    { icon: "clock", title: "Emergency Plumbing", desc: "Rapid response for urgent plumbing issues, day or night.", urgent: true },
    { icon: "thermometer", title: "Water Heater Services", desc: "Repair, installation, and maintenance for all water heater types.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Pinpointing and fixing leaks to prevent water damage and waste.", urgent: false },
    { icon: "wrench", title: "Drain Cleaning", desc: "Clearing clogs and blockages for smooth-flowing drains.", urgent: false },
    { icon: "home", title: "Residential Plumbing", desc: "Comprehensive plumbing solutions for your home's needs.", urgent: false },
    { icon: "briefcase", title: "Commercial Plumbing", desc: "Reliable plumbing services tailored for businesses and commercial properties.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Tucson, AZ", stars: 5, text: "Al Coronado Plumbing saved us! Our water heater burst on a Saturday night. Their technician, Mike, arrived within an hour, was incredibly professional, and had it replaced by Sunday morning. The price was fair, and the service was outstanding. Highly recommend their emergency service!" },
    { name: "David L.", location: "Oro Valley, AZ", stars: 5, text: "We had a persistent leaky faucet that other plumbers couldn't fix. Al Coronado's team diagnosed the problem quickly and repaired it perfectly. They were courteous, clean, and explained everything clearly. It's been drip-free for months now. So relieved!" },
    { name: "Maria R.", location: "Marana, AZ", stars: 5, text: "Called Al Coronado for a drain cleaning, and they exceeded expectations. The plumber was on time, very friendly, and got the job done efficiently. No more slow drains! I appreciate their upfront pricing and honest work. Definitely my go-to plumber from now on." }
  ],

  trustBadges: [
    "NATE Certified", "GAF Master Elite", "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 40, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly to address your plumbing emergencies and scheduled services." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and experienced in all plumbing aspects." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your complete satisfaction is our priority, backed by our service guarantee." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our advanced AI reception ensures you can always reach us, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the right tools and parts for efficient service." }
  ],

  formServiceOptions: ["Emergency Plumbing", "Water Heater Services", "Leak Detection & Repair", "Drain Cleaning", "Residential Plumbing", "Commercial Plumbing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!