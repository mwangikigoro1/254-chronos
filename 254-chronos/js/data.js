/* ============================================================
   254 CHRONOS — Watch Data
   All images mapped to real stock photos
   Prices in Kenyan Shillings (KSh)
   ============================================================ */

const DEFAULT_WATCHES = [

  /* ===== ROLEX ===== */
  {
    id: 'rol_op',
    name: 'Oyster Perpetual',
    brand: 'Rolex',
    model: 'Oyster Perpetual',
    price: 8500,
    caseMaterial: 'Stainless Steel',
    movement: 'Automatic',
    waterResistance: '100m / 330ft',
    diameter: '41mm',
    strap: 'Oyster Bracelet',
    gender: 'Men',
    featured: true,
    description: 'The Rolex Oyster Perpetual — a timeless icon. Clean dial, robust stainless case, and the legendary Oyster bracelet. A statement of precision and prestige on any wrist.',
    image: 'assets/watches/watch-69.jpg',
    images: ['assets/watches/watch-69.jpg','assets/watches/watch-70.jpg','assets/watches/watch-71.jpg','assets/watches/watch-73.jpg','assets/watches/watch-74.jpg','assets/watches/watch-75.jpg','assets/watches/watch-76.jpg','assets/watches/watch-77.jpg','assets/watches/watch-78.jpg','assets/watches/watch-79.jpg','assets/watches/watch-80.jpg','assets/watches/watch-81.jpg','assets/watches/watch-82.jpg','assets/watches/watch-87.jpg']
  },

  /* ===== PATEK PHILIPPE — coming soon ===== */
  /* removed until stock arrives */

  /* ===== RICHARD MILLE — coming soon ===== */
  /* removed until stock arrives */

  /* ===== CASIO ===== */
  {
    id: 'cas_a138',
    name: 'Vintage A138 His & Hers',
    brand: 'Casio',
    model: 'A138WA',
    price: 12000,
    caseMaterial: 'Resin & Stainless Steel',
    movement: 'Casio Quartz',
    waterResistance: '30m / 100ft',
    diameter: '33mm / 38mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Unisex',
    featured: false,
    description: 'The iconic Casio A138 — retro styling meets reliable quartz precision. Available as a matching his-and-hers pair, perfect for couples who appreciate classic design and everyday durability.',
    image: 'assets/watches/watch-114.jpg',
    images: ['assets/watches/watch-114.jpg','assets/watches/watch-115.jpg','assets/watches/watch-117.jpg','assets/watches/watch-118.jpg','assets/watches/watch-119.jpg','assets/watches/watch-120.jpg','assets/watches/watch-121.jpg','assets/watches/watch-122.jpg','assets/watches/watch-123.jpg','assets/watches/watch-125.jpg']
  },
  {
    id: 'cas_e117d',
    name: 'E117D Premium',
    brand: 'Casio',
    model: 'E117D',
    price: 9500,
    caseMaterial: 'Stainless Steel',
    movement: 'Casio Quartz',
    waterResistance: '50m / 165ft',
    diameter: '38mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The Casio E117D is a sharp, clean-dialled dress watch that delivers reliable Japanese quartz precision in a polished stainless package. Professional styling at an everyday price.',
    image: 'assets/watches/watch-320.jpg',
    images: ['assets/watches/watch-320.jpg','assets/watches/watch-321.jpg','assets/watches/watch-322.jpg','assets/watches/watch-323.jpg','assets/watches/watch-324.jpg']
  },
  {
    id: 'cas_gshock',
    name: 'G-Shock GM-9A Metal',
    brand: 'Casio',
    model: 'G-Shock GM-9A',
    price: 18500,
    caseMaterial: 'Metal & Resin Composite',
    movement: 'Casio Quartz Digital',
    waterResistance: '200m / 660ft',
    diameter: '45mm',
    strap: 'Resin with Metal Bezel',
    gender: 'Men',
    featured: true,
    description: "The G-Shock GM-9A brings metal-covered toughness to a bold digital face. Shock resistant, 200m water resistant, world time, and LED backlight — engineered for life's hardest moments.",
    image: 'assets/watches/watch-292.jpg',
    images: ['assets/watches/watch-292.jpg','assets/watches/watch-293.jpg','assets/watches/watch-294.jpg','assets/watches/watch-295.jpg','assets/watches/watch-297.jpg','assets/watches/watch-298.jpg','assets/watches/watch-299.jpg','assets/watches/watch-300.jpg','assets/watches/watch-301.jpg','assets/watches/watch-306.jpg']
  },
  {
    id: 'cas_ga2100',
    name: 'G-Shock GA-2100 CasiOak',
    brand: 'Casio',
    model: 'G-Shock GA-2100',
    price: 16500,
    caseMaterial: 'Carbon Core Guard Resin',
    movement: 'Casio Quartz Digital-Analog',
    waterResistance: '200m / 660ft',
    diameter: '45.4mm',
    strap: 'Black Resin',
    gender: 'Men',
    featured: true,
    description: "The legendary CasiOak. The GA-2100's octagonal bezel draws instant comparisons to ultra-luxury sports watches, but packs G-Shock's full toughness, slim profile, and world time. The watch everyone is talking about.",
    image: 'assets/watches/watch-350.jpg',
    images: ['assets/watches/watch-350.jpg','assets/watches/watch-351.jpg','assets/watches/watch-352.jpg','assets/watches/watch-353.jpg','assets/watches/watch-354.jpg','assets/watches/watch-355.jpg','assets/watches/watch-356.jpg','assets/watches/watch-357.jpg','assets/watches/watch-358.jpg','assets/watches/watch-359.jpg','assets/watches/watch-360.jpg','assets/watches/watch-361.jpg','assets/watches/watch-362.jpg','assets/watches/watch-369.jpg']
  },
  {
    id: 'cas_bst300',
    name: 'G-Shock BST-B300',
    brand: 'Casio',
    model: 'G-Shock BST-B300',
    price: 28500,
    caseMaterial: 'Stainless Steel Bezel & Resin',
    movement: 'Casio Quartz with Bluetooth',
    waterResistance: '200m / 660ft',
    diameter: '45.9mm',
    strap: 'Resin with Steel Accents',
    gender: 'Men',
    featured: false,
    description: 'The BST-B300 is part of the G-Shock Full Metal series — bold steel accents, Bluetooth smartphone link, and the indestructible G-Shock DNA. Street-ready meets boardroom-sharp.',
    image: 'assets/watches/watch-363.jpg',
    images: ['assets/watches/watch-363.jpg']
  },
  {
    id: 'cas_mtg',
    name: 'G-Shock MT-G',
    brand: 'Casio',
    model: 'G-Shock MT-G',
    price: 45000,
    caseMaterial: 'Stainless Steel & Resin Hybrid',
    movement: 'Solar Atomic Quartz',
    waterResistance: '200m / 660ft',
    diameter: '49.4mm',
    strap: 'Resin & Metal Composite',
    gender: 'Men',
    featured: false,
    description: 'The MT-G sits at the pinnacle of G-Shock engineering. Solar powered, atomic timekeeping, and a metal-resin hybrid case that absorbs shocks unlike anything else. The last watch you will ever need.',
    image: 'assets/watches/watch-366.jpg',
    images: ['assets/watches/watch-366.jpg','assets/watches/watch-370.jpg']
  },
  {
    id: 'cas_gbx100',
    name: 'G-Shock GBX-100 G-Lide',
    brand: 'Casio',
    model: 'G-Shock GBX-100',
    price: 22000,
    caseMaterial: 'Resin',
    movement: 'Casio Quartz with Bluetooth & Solar',
    waterResistance: '200m / 660ft',
    diameter: '48.8mm',
    strap: 'Resin Strap',
    gender: 'Men',
    featured: false,
    description: "Built for surfers and outdoor athletes — the GBX-100 features tide and moon graphs, Bluetooth syncing, and solar charging. G-Shock's ultimate adventure companion.",
    image: 'assets/watches/watch-367.jpg',
    images: ['assets/watches/watch-367.jpg','assets/watches/watch-368.jpg']
  },
  {
    id: 'cas_gae2100',
    name: 'G-Shock GAE-2100RC Earth Watch',
    brand: 'Casio',
    model: 'G-Shock GAE-2100RC',
    price: 19500,
    caseMaterial: 'Carbon Core Guard Resin',
    movement: 'Casio Quartz Digital-Analog',
    waterResistance: '200m / 660ft',
    diameter: '45.4mm',
    strap: 'Recycled-Material Resin',
    gender: 'Unisex',
    featured: false,
    description: 'The GAE-2100RC Earth Watch is a statement of purpose — made with recycled materials and earth-tone colorways. CasiOak DNA, sustainability-forward. Style with a conscience.',
    image: 'assets/watches/watch-371.jpg',
    images: ['assets/watches/watch-371.jpg']
  },
  {
    id: 'cas_gwrb1000',
    name: 'G-Shock GWR-B1000 Gravitymaster',
    brand: 'Casio',
    model: 'G-Shock GWR-B1000X',
    price: 95000,
    caseMaterial: 'Carbon Monocoque Case',
    movement: 'Solar Atomic with Bluetooth',
    waterResistance: '200m / 660ft',
    diameter: '55.3mm',
    strap: 'Carbon Fiber & Resin',
    gender: 'Men',
    featured: true,
    description: "The Gravitymaster GWR-B1000 is G-Shock's aviation masterpiece. An ultra-light carbon monocoque case, triple sensor (compass, altimeter, barometer), Bluetooth syncing, and atomic timekeeping. Worn by pilots. Coveted by all.",
    image: 'assets/watches/watch-372.jpg',
    images: ['assets/watches/watch-372.jpg','assets/watches/watch-373.jpg','assets/watches/watch-374.jpg','assets/watches/watch-375.jpg','assets/watches/watch-376.jpg','assets/watches/watch-377.jpg','assets/watches/watch-378.jpg','assets/watches/watch-379.jpg']
  },

  /* ===== HUBLOT ===== */
  {
    id: 'hub_sbang',
    name: 'Square Bang Unico',
    brand: 'Hublot',
    model: 'Square Bang Unico',
    price: 28500,
    caseMaterial: 'Stainless Steel / Titanium',
    movement: 'UNICO HUB1242 Automatic Chronograph',
    waterResistance: '100m / 330ft',
    diameter: '42mm × 42mm',
    strap: 'Rubber & Bracelet Combo',
    gender: 'Men',
    featured: true,
    description: "Hublot's bold square case reinvents the Big Bang DNA. The Square Bang Unico houses the in-house flyback chronograph movement in a striking angular case that commands every room it enters.",
    image: 'assets/watches/watch-325.jpg',
    images: ['assets/watches/watch-325.jpg','assets/watches/watch-326.jpg','assets/watches/watch-327.jpg','assets/watches/watch-328.jpg','assets/watches/watch-329.jpg','assets/watches/watch-330.jpg','assets/watches/watch-331.jpg','assets/watches/watch-332.jpg','assets/watches/watch-333.jpg','assets/watches/watch-334.jpg','assets/watches/watch-335.jpg']
  },
  {
    id: 'hub_fusion',
    name: 'Classic Fusion Skeleton',
    brand: 'Hublot',
    model: 'Classic Fusion Skeleton',
    price: 22500,
    caseMaterial: 'Titanium',
    movement: 'HUB1300 Manual-Wind Skeleton',
    waterResistance: '50m / 165ft',
    diameter: '45mm',
    strap: 'Black Rubber',
    gender: 'Men',
    featured: true,
    description: 'The Hublot Classic Fusion Skeleton strips the dial to its bones — revealing the intricate movement beneath sapphire crystal. Architectural beauty meets Swiss precision in the art of fusion.',
    image: 'assets/watches/watch-336.jpg',
    images: ['assets/watches/watch-336.jpg','assets/watches/watch-337.jpg','assets/watches/watch-338.jpg','assets/watches/watch-339.jpg','assets/watches/watch-340.jpg','assets/watches/watch-341.jpg','assets/watches/watch-342.jpg','assets/watches/watch-343.jpg','assets/watches/watch-344.jpg','assets/watches/watch-345.jpg','assets/watches/watch-346.jpg','assets/watches/watch-347.jpg','assets/watches/watch-348.jpg','assets/watches/watch-349.jpg']
  },
  /* removed until stock arrives */

  /* ===== HUGO BOSS — coming soon ===== */
  /* removed until stock arrives */

  /* ===== POEDAGAR ===== */
  {
    id: 'po_783',
    name: 'PS783 Business Mesh',
    brand: 'Poedagar',
    model: 'PS783',
    price: 8800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel Mesh Bracelet',
    gender: 'Men',
    featured: true,
    description: 'The Poedagar PS783 is a sleek business watch built for the modern professional. Luminous hands, date display, and an ultra-comfortable mesh bracelet — executive style without the executive price.',
    image: 'assets/watches/watch-309.jpg',
    images: ['assets/watches/watch-309.jpg','assets/watches/watch-311.jpg','assets/watches/watch-312.jpg','assets/watches/watch-313.jpg','assets/watches/watch-315.jpg']
  },

  /* ===== NAVIFORCE ===== */
  {
    id: 'nf_9172s',
    name: 'NF9172S Sport Dual-Time',
    brand: 'Naviforce',
    model: 'NF9172S',
    price: 7500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz Dual-Time',
    waterResistance: '30m / 100ft',
    diameter: '45mm',
    strap: 'Stainless Steel Mesh Bracelet',
    gender: 'Men',
    featured: true,
    description: 'The NF9172S is a bold sport-dress hybrid with a striking dual-time dial layout, luminous hands, and a precision-brushed mesh bracelet. A statement piece for the modern Kenyan man.',
    image: 'assets/watches/watch-1.jpg',
    images: ['assets/watches/watch-1.jpg','assets/watches/watch-4.jpg','assets/watches/watch-5.jpg','assets/watches/watch-29.jpg','assets/watches/watch-30.jpg','assets/watches/watch-32.jpg']
  },
  {
    id: 'nf_9234',
    name: 'NF9234 Chronograph Steel',
    brand: 'Naviforce',
    model: 'NF9234',
    price: 8200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz Chronograph',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: true,
    description: 'The NF9234 brings sharp chronograph styling to an accessible price point. Multi-function sub-dials, scratch-resistant mineral crystal, and a robust steel bracelet — built for daily confidence.',
    image: 'assets/watches/watch-2.jpg',
    images: ['assets/watches/watch-2.jpg','assets/watches/watch-6.jpg','assets/watches/watch-9.jpg','assets/watches/watch-26.jpg','assets/watches/watch-27.jpg','assets/watches/watch-31.jpg','assets/watches/watch-54.jpg']
  },
  {
    id: 'nf_9197',
    name: 'NF9197 Classic Leather',
    brand: 'Naviforce',
    model: 'NF9197',
    price: 6800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Genuine Leather',
    gender: 'Men',
    featured: false,
    description: 'Clean lines, elegant dial, genuine leather strap — the NF9197 is the quintessential dress watch for the boardroom and beyond. Affordable sophistication, Naviforce precision.',
    image: 'assets/watches/watch-3.jpg',
    images: ['assets/watches/watch-3.jpg','assets/watches/watch-55.jpg','assets/watches/watch-57.jpg']
  },
  {
    id: 'nf_9201',
    name: 'NF9201 Business Slim',
    brand: 'Naviforce',
    model: 'NF9201',
    price: 6500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'Slim profile, clean dial, polished case — the NF9201 is understated executive style. Pairs effortlessly with formal and smart-casual looks alike.',
    image: 'assets/watches/watch-7.jpg',
    images: ['assets/watches/watch-7.jpg','assets/watches/watch-25.jpg']
  },
  {
    id: 'nf_9213',
    name: 'NF9213 Military Chronograph',
    brand: 'Naviforce',
    model: 'NF9213',
    price: 7800,
    caseMaterial: 'Alloy Case',
    movement: 'Japanese Quartz Chronograph',
    waterResistance: '30m / 100ft',
    diameter: '46mm',
    strap: 'Nylon / Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'The NF9213 channels military-inspired design into a rugged chronograph. Bold case, tactical subdials, and luminous markers make this the go-to for the adventurous spirit.',
    image: 'assets/watches/watch-8.jpg',
    images: ['assets/watches/watch-8.jpg','assets/watches/watch-10.jpg','assets/watches/watch-11.jpg','assets/watches/watch-13.jpg','assets/watches/watch-33.jpg','assets/watches/watch-34.jpg','assets/watches/watch-35.jpg','assets/watches/watch-36.jpg']
  },
  {
    id: 'nf_9089',
    name: 'NF9089 Dual Display Sport',
    brand: 'Naviforce',
    model: 'NF9089',
    price: 5500,
    caseMaterial: 'Alloy',
    movement: 'Japanese Quartz + Digital',
    waterResistance: '30m / 100ft',
    diameter: '47mm',
    strap: 'Silicone Sport Strap',
    gender: 'Men',
    featured: false,
    description: 'Analog meets digital — the NF9089 packs a dual-time display, date, alarm, and stopwatch into a bold sport case. Maximum functionality, maximum style, minimal price.',
    image: 'assets/watches/watch-12.jpg',
    images: ['assets/watches/watch-12.jpg','assets/watches/watch-14.jpg','assets/watches/watch-15.jpg','assets/watches/watch-16.jpg','assets/watches/watch-17.jpg','assets/watches/watch-18.jpg','assets/watches/watch-37.jpg','assets/watches/watch-38.jpg','assets/watches/watch-39.jpg','assets/watches/watch-40.jpg','assets/watches/watch-41.jpg','assets/watches/watch-42.jpg']
  },
  {
    id: 'nf_9215s',
    name: 'NF9215S Luxury Mesh',
    brand: 'Naviforce',
    model: 'NF9215S',
    price: 8500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '43mm',
    strap: 'Stainless Steel Mesh Bracelet',
    gender: 'Men',
    featured: true,
    description: 'The NF9215S is a premium dress-sport watch with a sunray dial and ultra-comfortable mesh bracelet. Subtle luxury that transitions seamlessly from desk to dinner.',
    image: 'assets/watches/watch-19.jpg',
    images: ['assets/watches/watch-19.jpg','assets/watches/watch-20.jpg','assets/watches/watch-21.jpg','assets/watches/watch-22.jpg','assets/watches/watch-23.jpg','assets/watches/watch-24.jpg','assets/watches/watch-43.jpg','assets/watches/watch-44.jpg','assets/watches/watch-45.jpg','assets/watches/watch-46.jpg','assets/watches/watch-47.jpg','assets/watches/watch-52.jpg']
  },
  {
    id: 'nf_9208',
    name: 'NF9208 Tactical Sport',
    brand: 'Naviforce',
    model: 'NF9208',
    price: 6000,
    caseMaterial: 'Alloy',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '45mm',
    strap: 'Leather / Nylon Strap',
    gender: 'Men',
    featured: false,
    description: 'Built for the active lifestyle, the NF9208 features a robust case, clear dial, and reliable Japanese quartz movement. Rugged enough for the field, sharp enough for the city.',
    image: 'assets/watches/watch-28.jpg',
    images: ['assets/watches/watch-28.jpg','assets/watches/watch-132.jpg','assets/watches/watch-133.jpg','assets/watches/watch-134.jpg']
  },
  {
    id: 'nf_9110',
    name: 'NF9110 Classic Date',
    brand: 'Naviforce',
    model: 'NF9110',
    price: 5800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'The NF9110 keeps it clean and classic — a minimalist dial with date window, polished case, and supple leather strap. The reliable everyday companion for the Kenyan professional.',
    image: 'assets/watches/watch-48.jpg',
    images: ['assets/watches/watch-48.jpg','assets/watches/watch-49.jpg','assets/watches/watch-50.jpg','assets/watches/watch-51.jpg','assets/watches/watch-56.jpg']
  },
  {
    id: 'nf_9163',
    name: 'NF9163 Rose Gold Elegance',
    brand: 'Naviforce',
    model: 'NF9163',
    price: 7200,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Rose Gold Mesh Bracelet',
    gender: 'Unisex',
    featured: false,
    description: 'Warm rose-gold tones, a refined sunray dial, and an adjustable mesh bracelet — the NF9163 is effortlessly elegant. Perfect for the modern Kenyan professional, day or evening.',
    image: 'assets/watches/watch-53.jpg',
    images: ['assets/watches/watch-53.jpg','assets/watches/watch-59.jpg','assets/watches/watch-60.jpg']
  },
  {
    id: 'nf_9199',
    name: 'NF9199 Slim Quartz',
    brand: 'Naviforce',
    model: 'NF9199',
    price: 6200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The NF9199 is a sharp, slim steel bracelet watch with a clean multi-hand dial. Precise, durable, and handsome — a versatile timepiece for any occasion.',
    image: 'assets/watches/watch-58.jpg',
    images: ['assets/watches/watch-58.jpg','assets/watches/watch-61.jpg']
  },
  {
    id: 'nf_8053',
    name: 'NF8053 Ladies Elegant',
    brand: 'Naviforce',
    model: 'NF8053',
    price: 7200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '36mm',
    strap: 'Stainless Steel / Mesh Bracelet',
    gender: 'Women',
    featured: false,
    description: 'The NF8053 is Naviforce\'s premium ladies timepiece — a slim, polished case with a sparkling dial and comfortable bracelet. Feminine precision that makes every second count.',
    image: 'assets/watches/watch-136.jpg',
    images: ['assets/watches/watch-136.jpg','assets/watches/watch-137.jpg','assets/watches/watch-138.jpg','assets/watches/watch-139.jpg','assets/watches/watch-140.jpg','assets/watches/watch-141.jpg','assets/watches/watch-142.jpg','assets/watches/watch-143.jpg','assets/watches/watch-144.jpg','assets/watches/watch-145.jpg','assets/watches/watch-147.jpg']
  },
  {
    id: 'nf_7105',
    name: 'NF7105 Sport Quartz',
    brand: 'Naviforce',
    model: 'NF7105',
    price: 6800,
    caseMaterial: 'Alloy',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Silicone Sport Strap',
    gender: 'Men',
    featured: false,
    description: 'Lightweight and durable, the NF7105 is built for those who move fast. A sporty alloy case, bold dial indices, and silicone strap make it the perfect daily driver.',
    image: 'assets/watches/watch-146.jpg',
    images: ['assets/watches/watch-146.jpg','assets/watches/watch-148.jpg','assets/watches/watch-149.jpg','assets/watches/watch-150.jpg']
  },
  {
    id: 'nf_8034',
    name: 'NF8034 Classic Steel',
    brand: 'Naviforce',
    model: 'NF8034',
    price: 6500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The NF8034 delivers polished everyday style in a robust stainless steel package. A clean dial, reliable movement, and solid bracelet — understated confidence at an accessible price.',
    image: 'assets/watches/watch-314.jpg',
    images: ['assets/watches/watch-314.jpg','assets/watches/watch-316.jpg','assets/watches/watch-317.jpg','assets/watches/watch-318.jpg','assets/watches/watch-319.jpg']
  },

  /* ===== CURREN ===== */
  {
    id: 'cur_8456',
    name: '8456 Sport Chronograph',
    brand: 'Curren',
    model: 'M8456',
    price: 5500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz Chronograph',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The Curren 8456 is a bold sport chronograph with a sharp tachymeter bezel and multi-subdial layout. All the style, none of the premium price — built for the hustler on the move.',
    image: 'assets/watches/watch-62.jpg',
    images: ['assets/watches/watch-62.jpg','assets/watches/watch-63.jpg','assets/watches/watch-67.jpg']
  },
  {
    id: 'cur_8458',
    name: '8458 Business Classic',
    brand: 'Curren',
    model: 'M8458',
    price: 4800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel / Leather',
    gender: 'Men',
    featured: false,
    description: 'Clean, confident, and professional — the Curren 8458 pairs a polished case with a minimalist dial for effortless boardroom style. Reliable Japanese quartz movement keeps you on time, always.',
    image: 'assets/watches/watch-64.jpg',
    images: ['assets/watches/watch-64.jpg','assets/watches/watch-65.jpg','assets/watches/watch-66.jpg','assets/watches/watch-68.jpg','assets/watches/watch-72.jpg']
  },
  {
    id: 'cur_8539',
    name: '8539 Mesh Dress Watch',
    brand: 'Curren',
    model: 'M8539',
    price: 5200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Stainless Steel Mesh Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The Curren 8539 is a slim dress watch with a premium mesh bracelet and sunray dial. Light on the wrist, sharp on the eye — a refined choice for any formal occasion.',
    image: 'assets/watches/watch-124.jpg',
    images: ['assets/watches/watch-124.jpg','assets/watches/watch-126.jpg','assets/watches/watch-127.jpg','assets/watches/watch-130.jpg']
  },
  {
    id: 'cur_8437',
    name: '8437 Leather Dress Watch',
    brand: 'Curren',
    model: 'M8437',
    price: 4500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Genuine Leather',
    gender: 'Men',
    featured: false,
    description: 'Classic elegance for the everyday professional. The Curren 8437 combines a polished stainless case with a rich leather strap and clean dial — the smart choice for any occasion.',
    image: 'assets/watches/watch-128.jpg',
    images: ['assets/watches/watch-128.jpg','assets/watches/watch-129.jpg','assets/watches/watch-131.jpg','assets/watches/watch-135.jpg']
  },
  {
    id: 'cur_8444',
    name: '8444 Ladies Rose Slim',
    brand: 'Curren',
    model: 'M8444',
    price: 4200,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '36mm',
    strap: 'Rose Gold Mesh Bracelet',
    gender: 'Women',
    featured: false,
    description: 'Delicate rose-gold tones and a slim profile make the Curren 8444 the go-to ladies timepiece. Lightweight, elegant, and built to complement any look from casual to formal.',
    image: 'assets/watches/watch-252.jpg',
    images: ['assets/watches/watch-252.jpg','assets/watches/watch-253.jpg','assets/watches/watch-254.jpg','assets/watches/watch-255.jpg']
  },
  {
    id: 'cur_8291',
    name: '8291 Steel Chronograph',
    brand: 'Curren',
    model: 'M8291',
    price: 5800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz Chronograph',
    waterResistance: '30m / 100ft',
    diameter: '45mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'Bold subdials, a solid steel bracelet, and a tachymeter bezel — the Curren 8291 is a full-spec chronograph at a fraction of the usual price. Sport style that means business.',
    image: 'assets/watches/watch-302.jpg',
    images: ['assets/watches/watch-302.jpg','assets/watches/watch-303.jpg','assets/watches/watch-304.jpg']
  },
  {
    id: 'cur_8293',
    name: '8293 Slim Date Watch',
    brand: 'Curren',
    model: 'M8293',
    price: 3800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'The Curren 8293 strips it back to the essentials — clean dial, date window, slim case, and quality leather strap. No fuss, just reliable everyday elegance.',
    image: 'assets/watches/watch-305.jpg',
    images: ['assets/watches/watch-305.jpg']
  },
  {
    id: 'cur_8301',
    name: '8301 Gold Tone Elegant',
    brand: 'Curren',
    model: 'M8301',
    price: 4800,
    caseMaterial: 'Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Gold-Tone Mesh Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The Curren 8301 brings warm gold-tone finishes and a refined mesh bracelet to your wrist. A polished statement for the man who appreciates affordable luxury with a sharp eye for style.',
    image: 'assets/watches/watch-307.jpg',
    images: ['assets/watches/watch-307.jpg','assets/watches/watch-308.jpg','assets/watches/watch-310.jpg']
  },

  /* ===== TISSOT ===== */
  {
    id: 'tis_1853',
    name: 'T-Classic 1853',
    brand: 'Tissot',
    model: 'T-Classic 1853',
    price: 75000,
    caseMaterial: 'Stainless Steel',
    movement: 'ETA Swiss Quartz / Automatic',
    waterResistance: '100m / 330ft',
    diameter: '40mm',
    strap: 'Stainless Steel Bracelet / Leather',
    gender: 'Men',
    featured: true,
    description: 'Tissot 1853 — Swiss-made precision with timeless dress styling. Elegant dial, sapphire crystal glass, and impeccable finishing make this the definitive Swiss watch for the Nairobi professional.',
    image: 'assets/watches/watch-166.jpg',
    images: ['assets/watches/watch-166.jpg','assets/watches/watch-167.jpg','assets/watches/watch-169.jpg','assets/watches/watch-170.jpg','assets/watches/watch-171.jpg','assets/watches/watch-172.jpg','assets/watches/watch-173.jpg','assets/watches/watch-174.jpg','assets/watches/watch-175.jpg','assets/watches/watch-176.jpg','assets/watches/watch-177.jpg','assets/watches/watch-178.jpg','assets/watches/watch-179.jpg','assets/watches/watch-180.jpg','assets/watches/watch-181.jpg','assets/watches/watch-183.jpg']
  },

  /* ===== HERMES ===== */
  {
    id: 'herm_hh',
    name: 'Heure H',
    brand: 'Hermes',
    model: 'Heure H',
    price: 920000,
    caseMaterial: 'Stainless Steel',
    movement: 'Swiss Quartz',
    waterResistance: '30m / 100ft',
    diameter: '26mm × 21mm',
    strap: 'Hermès Leather Strap',
    gender: 'Women',
    featured: false,
    description: 'The Hermès Heure H is instantly recognisable — the H-shaped case is pure Parisian ingenuity. Paired with signature Hermès leather, it is the ultimate expression of luxury on the wrist.',
    image: 'assets/watches/watch-157.jpg',
    images: ['assets/watches/watch-157.jpg','assets/watches/watch-159.jpg','assets/watches/watch-160.jpg','assets/watches/watch-164.jpg']
  },

  /* ===== MICHAEL KORS ===== */
  {
    id: 'mk_es5465',
    name: 'ES5465 Slim Runway',
    brand: 'Michael Kors',
    model: 'ES5465',
    price: 25000,
    caseMaterial: 'Stainless Steel',
    movement: 'Quartz',
    waterResistance: '50m / 165ft',
    diameter: '37mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Women',
    featured: false,
    description: 'The Michael Kors ES5465 is jet-set glamour distilled. A slim stainless case, clean sunray dial, and polished bracelet — a fashion-forward timepiece that moves with you from morning meetings to evening events.',
    image: 'assets/watches/watch-156.jpg',
    images: ['assets/watches/watch-156.jpg']
  },

  /* ===== HUGO BOSS — coming soon ===== */
  /* removed until stock arrives */

  /* ===== REBIRTH ===== */
  {
    id: 'rb_ladies',
    name: 'Ladies Quartz',
    brand: 'Rebirth',
    model: 'Ladies',
    price: 4500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '34mm',
    strap: 'Leather / Mesh',
    gender: 'Women',
    featured: false,
    description: 'A graceful ladies timepiece from Rebirth — slim case, refined dial, and a comfortable strap that elevates any outfit. Elegant simplicity at its finest.',
    image: 'assets/watches/watch-182.jpg',
    images: ['assets/watches/watch-182.jpg']
  },
  {
    id: 'rb_e948',
    name: 'E948 Sport',
    brand: 'Rebirth',
    model: 'E948',
    price: 5500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Silicone Strap',
    gender: 'Men',
    featured: false,
    description: 'The Rebirth E948 is a sporty everyday watch with a bold dial and durable silicone strap. Built for the active Kenyan lifestyle — reliable, sharp, and priced to impress.',
    image: 'assets/watches/watch-184.jpg',
    images: ['assets/watches/watch-184.jpg']
  },
  {
    id: 'rb_e947',
    name: 'E947 Sport',
    brand: 'Rebirth',
    model: 'E947',
    price: 5200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Silicone Strap',
    gender: 'Men',
    featured: false,
    description: 'The E947 keeps pace with your ambition — a clean sport case, luminous hands, and a no-fuss silicone strap. From the gym to the office, Rebirth keeps you on time.',
    image: 'assets/watches/watch-185.jpg',
    images: ['assets/watches/watch-185.jpg','assets/watches/watch-186.jpg','assets/watches/watch-187.jpg']
  },
  {
    id: 'rb_re423',
    name: 'RE423 Classic',
    brand: 'Rebirth',
    model: 'RE423',
    price: 5800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'Understated elegance defines the RE423 — a polished case, clean dial, and premium leather strap combine for an effortlessly professional look suited to any occasion.',
    image: 'assets/watches/watch-188.jpg',
    images: ['assets/watches/watch-188.jpg']
  },
  {
    id: 'rb_re134',
    name: 'RE134 Dress Watch',
    brand: 'Rebirth',
    model: 'RE134',
    price: 5500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'The RE134 is a polished dress watch that punches above its price. Slim profile, refined indices, and a supple leather strap — the smart choice for the discerning professional.',
    image: 'assets/watches/watch-189.jpg',
    images: ['assets/watches/watch-189.jpg','assets/watches/watch-190.jpg','assets/watches/watch-191.jpg','assets/watches/watch-192.jpg','assets/watches/watch-193.jpg']
  },
  {
    id: 'rb_wave',
    name: 'Wishing Wave',
    brand: 'Rebirth',
    model: 'Wishing Wave',
    price: 4800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '38mm',
    strap: 'Stainless Steel / Mesh',
    gender: 'Unisex',
    featured: false,
    description: 'Inspired by the ocean, the Wishing Wave features fluid design lines and a distinctive dial. Stylish, lightweight, and versatile — a conversation piece wherever you wear it.',
    image: 'assets/watches/watch-194.jpg',
    images: ['assets/watches/watch-194.jpg','assets/watches/watch-197.jpg']
  },
  {
    id: 'rb_2037',
    name: '2037 Chronograph',
    brand: 'Rebirth',
    model: '2037',
    price: 5000,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz Chronograph',
    waterResistance: '30m / 100ft',
    diameter: '43mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'The Rebirth 2037 brings chronograph function to an everyday price. Bold subdials, a tachymeter bezel, and quality leather strap — all the detail, none of the drama.',
    image: 'assets/watches/watch-195.jpg',
    images: ['assets/watches/watch-195.jpg']
  },
  {
    id: 'rb_re116',
    name: 'RE116 Sport',
    brand: 'Rebirth',
    model: 'RE116',
    price: 4800,
    caseMaterial: 'Alloy',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Silicone Strap',
    gender: 'Men',
    featured: false,
    description: 'Tough, light, and ready for anything — the RE116 is Rebirth\'s go-to sport watch. A bold dial, durable silicone strap, and reliable Japanese quartz keep you moving all day.',
    image: 'assets/watches/watch-196.jpg',
    images: ['assets/watches/watch-196.jpg']
  },
  {
    id: 'rb_wj11042',
    name: 'WJ11042 Elegant',
    brand: 'Rebirth',
    model: 'WJ11042',
    price: 5200,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather / Mesh Strap',
    gender: 'Unisex',
    featured: false,
    description: 'The WJ11042 blends clean minimalism with a hint of luxury. A refined dial, polished case edges, and a quality strap make this an easy choice for both work and weekend.',
    image: 'assets/watches/watch-198.jpg',
    images: ['assets/watches/watch-198.jpg','assets/watches/watch-203.jpg']
  },
  {
    id: 'rb_bee',
    name: 'Lucky Bee',
    brand: 'Rebirth',
    model: 'Lucky Bee',
    price: 4500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '36mm',
    strap: 'Leather Strap',
    gender: 'Women',
    featured: false,
    description: 'Playful yet polished — the Rebirth Lucky Bee features a charming bee motif dial and feminine case. A unique timepiece that brings personality and precision to every outfit.',
    image: 'assets/watches/watch-199.jpg',
    images: ['assets/watches/watch-199.jpg','assets/watches/watch-200.jpg','assets/watches/watch-201.jpg']
  },
  {
    id: 'rb_novelle',
    name: 'Novelle Ladies',
    brand: 'Rebirth',
    model: 'Novelle',
    price: 5000,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '34mm',
    strap: 'Leather / Mesh Strap',
    gender: 'Women',
    featured: false,
    description: 'The Novelle is Rebirth at its most elegant — a slim rose-gold case, delicate hands, and refined dial. Designed for the woman who wears her style with quiet confidence.',
    image: 'assets/watches/watch-202.jpg',
    images: ['assets/watches/watch-202.jpg','assets/watches/watch-204.jpg','assets/watches/watch-205.jpg','assets/watches/watch-208.jpg']
  },
  {
    id: 'rb_re096',
    name: 'RE096 Classic',
    brand: 'Rebirth',
    model: 'RE096',
    price: 5500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather Strap',
    gender: 'Men',
    featured: false,
    description: 'Clean, purposeful, and reliable — the RE096 is a no-nonsense everyday watch for the modern Kenyan man. Quality Japanese movement in a sleek package that goes anywhere.',
    image: 'assets/watches/watch-206.jpg',
    images: ['assets/watches/watch-206.jpg','assets/watches/watch-207.jpg']
  },
  {
    id: 'rb_iced',
    name: 'Iced Out',
    brand: 'Rebirth',
    model: 'Iced Out',
    price: 6500,
    caseMaterial: 'Stainless Steel with Crystal Setting',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Unisex',
    featured: true,
    description: 'Drip season is every season. The Rebirth Iced Out is encrusted with sparkling crystals across the bezel and dial — maximum shine, maximum impact, for those who demand attention.',
    image: 'assets/watches/watch-209.jpg',
    images: ['assets/watches/watch-209.jpg','assets/watches/watch-210.jpg','assets/watches/watch-211.jpg','assets/watches/watch-212.jpg','assets/watches/watch-217.jpg']
  },

  /* ===== HERYL ===== */
  {
    id: 'hy_gravity',
    name: 'Gravity 4.0 Planetary',
    brand: 'Heryl',
    model: 'Gravity 4.0',
    price: 18000,
    caseMaterial: 'Stainless Steel',
    movement: 'Automatic Mechanical with Planetary Display',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Genuine Leather',
    gender: 'Men',
    featured: true,
    description: 'The Heryl Gravity 4.0 is a mechanical showpiece — a mesmerizing planetary display movement visible through the open dial. A conversation starter on every wrist, engineered to inspire awe.',
    image: 'assets/watches/watch-213.jpg',
    images: ['assets/watches/watch-213.jpg','assets/watches/watch-214.jpg','assets/watches/watch-215.jpg','assets/watches/watch-216.jpg','assets/watches/watch-218.jpg','assets/watches/watch-222.jpg']
  },

  /* ===== CRRJU ===== */
  {
    id: 'crj_5018',
    name: '5018 Ladies Crystal',
    brand: 'CRRJU',
    model: '5018',
    price: 4200,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '33mm',
    strap: 'Rose Gold Mesh',
    gender: 'Women',
    featured: false,
    description: 'The CRRJU 5018 is all femininity and sparkle — a slim rose-gold case surrounded by crystal accents and a smooth mesh bracelet. Affordable elegance that makes a lasting impression.',
    image: 'assets/watches/watch-219.jpg',
    images: ['assets/watches/watch-219.jpg','assets/watches/watch-220.jpg','assets/watches/watch-221.jpg','assets/watches/watch-223.jpg','assets/watches/watch-224.jpg','assets/watches/watch-226.jpg']
  },
  {
    id: 'crj_5012',
    name: '5012 Slim Dress',
    brand: 'CRRJU',
    model: '5012',
    price: 3800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Genuine Leather',
    gender: 'Men',
    featured: false,
    description: 'Ultra-slim and ultra-clean — the CRRJU 5012 is a minimalist dress watch with a white sunray dial and supple leather strap. Understated sophistication that pairs with everything.',
    image: 'assets/watches/watch-257.jpg',
    images: ['assets/watches/watch-257.jpg','assets/watches/watch-258.jpg','assets/watches/watch-259.jpg','assets/watches/watch-264.jpg']
  },
  {
    id: 'crj_5013',
    name: '5013 Sport Quartz',
    brand: 'CRRJU',
    model: '5013',
    price: 4000,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The CRRJU 5013 brings sport-watch energy to an accessible price. A bold dial with luminous hands, a scratch-resistant crystal, and solid bracelet — built to keep up with your pace.',
    image: 'assets/watches/watch-260.jpg',
    images: ['assets/watches/watch-260.jpg','assets/watches/watch-261.jpg','assets/watches/watch-262.jpg','assets/watches/watch-267.jpg']
  },
  {
    id: 'crj_5026',
    name: '5026 Luxury Mesh',
    brand: 'CRRJU',
    model: '5026',
    price: 4500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Stainless Steel Mesh Bracelet',
    gender: 'Unisex',
    featured: true,
    description: 'The CRRJU 5026 elevates the everyday with a premium mesh bracelet and a refined sunray dial. Light, comfortable, and endlessly stylish — a versatile timepiece for any wrist.',
    image: 'assets/watches/watch-265.jpg',
    images: ['assets/watches/watch-265.jpg','assets/watches/watch-266.jpg','assets/watches/watch-268.jpg','assets/watches/watch-273.jpg']
  },
  {
    id: 'crj_2287',
    name: '2287 Classic Leather',
    brand: 'CRRJU',
    model: '2287',
    price: 3500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Genuine Leather',
    gender: 'Men',
    featured: false,
    description: 'Simple, sharp, dependable — the CRRJU 2287 is a classic leather-strap watch that works for every day. Clean dial, quality movement, and a price that never compromises on style.',
    image: 'assets/watches/watch-269.jpg',
    images: ['assets/watches/watch-269.jpg','assets/watches/watch-270.jpg','assets/watches/watch-271.jpg','assets/watches/watch-272.jpg','assets/watches/watch-274.jpg','assets/watches/watch-275.jpg','assets/watches/watch-277.jpg']
  },
  {
    id: 'crj_2150',
    name: '2150 Multi-Colour Dial',
    brand: 'CRRJU',
    model: '2150',
    price: 3800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather / Mesh Strap',
    gender: 'Unisex',
    featured: false,
    description: 'The CRRJU 2150 stands out with its expressive multi-tone dial and clean case. A fresh, contemporary design that brings personality to your wrist without breaking the bank.',
    image: 'assets/watches/watch-276.jpg',
    images: ['assets/watches/watch-276.jpg','assets/watches/watch-278.jpg','assets/watches/watch-279.jpg','assets/watches/watch-280.jpg','assets/watches/watch-281.jpg','assets/watches/watch-282.jpg','assets/watches/watch-283.jpg','assets/watches/watch-284.jpg','assets/watches/watch-285.jpg','assets/watches/watch-286.jpg','assets/watches/watch-287.jpg']
  },
  {
    id: 'crj_2172',
    name: '2172 Business Steel',
    brand: 'CRRJU',
    model: '2172',
    price: 4000,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '41mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The CRRJU 2172 is built for the professional on the move. A well-proportioned steel bracelet, clean dial, and reliable quartz movement make it the ideal no-fuss business watch.',
    image: 'assets/watches/watch-288.jpg',
    images: ['assets/watches/watch-288.jpg','assets/watches/watch-289.jpg','assets/watches/watch-290.jpg','assets/watches/watch-291.jpg','assets/watches/watch-296.jpg']
  },

  /* ===== ANNE KLEIN ===== */
  {
    id: 'ak_3584',
    name: 'AK3584RGST Rose Gold Glam',
    brand: 'Anne Klein',
    model: 'AK3584RGST',
    price: 13500,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '36mm',
    strap: 'Rose Gold Bracelet',
    gender: 'Women',
    featured: true,
    description: 'Glittering with style — the Anne Klein AK3584RGST pairs a rose-gold case with a sparkling bezel and bracelet. Feminine luxury at its most accessible, made for the modern Kenyan woman.',
    image: 'assets/watches/watch-239.jpg',
    images: ['assets/watches/watch-239.jpg','assets/watches/watch-241.jpg','assets/watches/watch-242.jpg']
  },
  {
    id: 'ak_3398',
    name: 'AK3398GBST Gold & Black',
    brand: 'Anne Klein',
    model: 'AK3398GBST',
    price: 11500,
    caseMaterial: 'Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '36mm',
    strap: 'Gold-Tone Mesh Bracelet',
    gender: 'Women',
    featured: false,
    description: 'Bold contrast and striking elegance — the AK3398GBST combines gold tones with a deep black dial for a sophisticated look that commands attention. Power dressing, redefined.',
    image: 'assets/watches/watch-243.jpg',
    images: ['assets/watches/watch-243.jpg','assets/watches/watch-245.jpg','assets/watches/watch-250.jpg']
  },
  {
    id: 'ak_3290',
    name: 'AK3290LPST Blush Leather',
    brand: 'Anne Klein',
    model: 'AK3290LPST',
    price: 10500,
    caseMaterial: 'Rose Gold-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '34mm',
    strap: 'Blush Pink Leather',
    gender: 'Women',
    featured: false,
    description: 'Soft, feminine, and utterly charming — the AK3290LPST pairs a blush leather strap with a delicate rose-gold case. The perfect companion for the woman with an eye for quiet luxury.',
    image: 'assets/watches/watch-244.jpg',
    images: ['assets/watches/watch-244.jpg','assets/watches/watch-246.jpg']
  },
  {
    id: 'ak_2317',
    name: 'AK2317WTST White & Silver',
    brand: 'Anne Klein',
    model: 'AK2317WTST',
    price: 9800,
    caseMaterial: 'Silver-Tone Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '34mm',
    strap: 'Silver Mesh / White Leather',
    gender: 'Women',
    featured: false,
    description: 'Crisp, clean, and effortlessly versatile — the AK2317WTST is a white-dialed classic with a silver mesh bracelet that pairs with anything. The everyday luxury watch for the Nairobi professional.',
    image: 'assets/watches/watch-247.jpg',
    images: ['assets/watches/watch-247.jpg','assets/watches/watch-248.jpg','assets/watches/watch-249.jpg','assets/watches/watch-251.jpg','assets/watches/watch-256.jpg']
  },

  /* ===== KALBOR ===== */
  {
    id: 'kb_sport',
    name: 'Sport Dual Display',
    brand: 'Kalbor',
    model: 'Sport',
    price: 4500,
    caseMaterial: 'Alloy',
    movement: 'Japanese Quartz + Digital',
    waterResistance: '50m / 165ft',
    diameter: '46mm',
    strap: 'Silicone Sport Strap',
    gender: 'Men',
    featured: false,
    description: 'Built for hustle — the Kalbor Sport packs a dual analog-digital display, stopwatch, alarm, and 50m water resistance into a tough, lightweight case. Maximum features, minimum spend.',
    image: 'assets/watches/watch-225.jpg',
    images: ['assets/watches/watch-225.jpg','assets/watches/watch-228.jpg','assets/watches/watch-229.jpg','assets/watches/watch-230.jpg','assets/watches/watch-231.jpg','assets/watches/watch-232.jpg','assets/watches/watch-233.jpg','assets/watches/watch-234.jpg','assets/watches/watch-235.jpg','assets/watches/watch-236.jpg','assets/watches/watch-240.jpg']
  },
  {
    id: 'kb_iced',
    name: 'Iced Out Premium',
    brand: 'Kalbor',
    model: 'Iced Out',
    price: 5500,
    caseMaterial: 'Stainless Steel with Crystal Setting',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '44mm',
    strap: 'Stainless Steel Bracelet',
    gender: 'Men',
    featured: false,
    description: 'The Kalbor Iced Out is full drip energy — a bejewelled bezel, gleaming case, and a bracelet that catches every light in the room. Stand out, always.',
    image: 'assets/watches/watch-237.jpg',
    images: ['assets/watches/watch-237.jpg','assets/watches/watch-238.jpg']
  },

  /* ===== SUCCESS WAY ===== */
  {
    id: 'sw_cl229',
    name: 'CL229 Business Elite',
    brand: 'Success Way',
    model: 'CL229',
    price: 4500,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '42mm',
    strap: 'Stainless Steel / Leather',
    gender: 'Men',
    featured: false,
    description: 'The Success Way CL229 is crafted for the achiever. A sharp, clean dial, polished case, and versatile strap options make it the ideal companion from the morning commute to the boardroom.',
    image: 'assets/watches/watch-83.jpg',
    images: ['assets/watches/watch-83.jpg','assets/watches/watch-84.jpg','assets/watches/watch-85.jpg','assets/watches/watch-86.jpg','assets/watches/watch-88.jpg','assets/watches/watch-89.jpg','assets/watches/watch-92.jpg']
  },
  {
    id: 'sw_aq',
    name: 'Analog Quartz Collection',
    brand: 'Success Way',
    model: 'Analog Quartz',
    price: 3800,
    caseMaterial: 'Stainless Steel',
    movement: 'Japanese Quartz',
    waterResistance: '30m / 100ft',
    diameter: '40mm',
    strap: 'Leather / Mesh Strap',
    gender: 'Men',
    featured: false,
    description: 'Wear your ambition every day. The Success Way Analog Quartz collection offers sharp dress-watch styling at a price point that respects your hustle — available in multiple dial and strap combos.',
    image: 'assets/watches/watch-90.jpg',
    images: ['assets/watches/watch-90.jpg','assets/watches/watch-91.jpg','assets/watches/watch-93.jpg','assets/watches/watch-94.jpg','assets/watches/watch-95.jpg','assets/watches/watch-96.jpg','assets/watches/watch-97.jpg','assets/watches/watch-98.jpg','assets/watches/watch-99.jpg','assets/watches/watch-100.jpg','assets/watches/watch-101.jpg','assets/watches/watch-102.jpg','assets/watches/watch-103.jpg','assets/watches/watch-104.jpg','assets/watches/watch-105.jpg','assets/watches/watch-106.jpg','assets/watches/watch-107.jpg','assets/watches/watch-108.jpg','assets/watches/watch-109.jpg','assets/watches/watch-110.jpg','assets/watches/watch-111.jpg','assets/watches/watch-112.jpg','assets/watches/watch-113.jpg','assets/watches/watch-116.jpg']
  }

];

/* ---- Contact ---- */
const WHATSAPP_NUMBER = '254118780011';
const CONTACT_EMAIL = '254chronos@gmail.com';

/* ---- Storage Helpers ---- */
// IDs replaced — clear from old localStorage on first load
const REMOVED_IDS = new Set([
  'nf001','nf002','nf003',
  'r001','r002','r003',
  'c001','c002','c003',
  'po001','po002','po003',
  'cu001','cu002','cu003',
  'ti001','ti002','ti003',
  'mk001','mk002','mk003',
  'ak001','ak002',
  'crj001','crj002',
  'kb001','kb002',
  'hy001','hy002',
  'rb001','rb002',
  'hm001','hm002',
  'sw001','sw002',
  // Removed until stock arrives
  'p001','p002',           // Patek Philippe
  'rm001','rm002',         // Richard Mille
  'd001','d002','d003',    // Diesel
  'hb001','hb002','hb003'  // Hugo Boss
]);

/**
 * getWatches()
 *
 * PERSISTENCE CONTRACT:
 * - Admin edits (price changes, image updates, new watches) are stored in
 *   localStorage under 'chronos_watches' and MUST survive page reloads.
 * - DEFAULT_WATCHES is the seed catalogue. Once admin has edited anything,
 *   the localStorage version is the source of truth — never overwrite it.
 * - Migration (removing stale IDs, adding new defaults) is done surgically:
 *   remove only the specific stale entries, add only missing new ones.
 *   Never wipe and reseed the whole store.
 * - A schema version stamp prevents re-running migrations on every load.
 */
const SCHEMA_VERSION = '5'; // bumped: added Casio E117D, GA-2100, BST-B300, MT-G, GBX-100, GAE-2100RC, GWR-B1000X; Hublot Square Bang, Fusion Skeleton

function getWatches() {
  const stored = localStorage.getItem('chronos_watches');

  if (stored) {
    try {
      let existing = JSON.parse(stored);

      // --- Migration: run only once per schema version ---
      const migratedVersion = localStorage.getItem('chronos_schema_v');
      if (migratedVersion !== SCHEMA_VERSION) {

        // 1. Remove any watches with stale IDs (old placeholders now replaced)
        existing = existing.filter(w => !REMOVED_IDS.has(w.id));

        // 2. Fix any remaining Unsplash image URLs to use local fallback
        existing = existing.map(w => {
          if (w.image && w.image.startsWith('https://images.unsplash')) {
            return { ...w, image: 'assets/watches/watch-1.jpg', images: ['assets/watches/watch-1.jpg'] };
          }
          return w;
        });

        // 3. Add any brand-new DEFAULT_WATCHES entries not yet in storage
        const existingIds = new Set(existing.map(w => w.id));
        const toAdd = DEFAULT_WATCHES.filter(w => !existingIds.has(w.id));
        if (toAdd.length > 0) existing = [...existing, ...toAdd];

        // 4. Save migrated catalogue and stamp the version
        localStorage.setItem('chronos_watches', JSON.stringify(existing));
        localStorage.setItem('chronos_schema_v', SCHEMA_VERSION);
      }

      return JSON.parse(JSON.stringify(existing)); // always return a deep copy
    } catch(e) {
      // Corrupted storage — reseed cleanly
      localStorage.removeItem('chronos_watches');
    }
  }

  // First ever load — seed with defaults
  localStorage.setItem('chronos_watches', JSON.stringify(DEFAULT_WATCHES));
  localStorage.setItem('chronos_schema_v', SCHEMA_VERSION);
  return JSON.parse(JSON.stringify(DEFAULT_WATCHES));
}

function saveWatches(watches) {
  // Admin panel calls this — persists changes permanently
  localStorage.setItem('chronos_watches', JSON.stringify(watches));
}

function formatPrice(n) {
  return 'KSh ' + Number(n).toLocaleString('en-KE');
}
