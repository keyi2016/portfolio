const translations = {
    en: {
        nav: {
            links: [
                { href: 'about', label: 'About' },
                { href: 'experience', label: 'Experience' },
                { href: 'services', label: 'Services' },
                { href: 'portfolio', label: 'Portfolio' },
                { href: 'testimonials', label: 'Testimonials' },
                { href: 'contact', label: 'Contact' }
            ]
        },
        hero: {
            label: 'Visual Storyteller & Digital Architect',
            title: 'Visual Stories That Move People',
            subtitle: 'Premium video production, cinematic editing, bold graphic design, and strategic social media management for brands that refuse to be ignored.',
            ctaPrimary: 'View Portfolio',
            ctaSecondary: 'Request a Quote',
            stats: [
                { number: '8+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' }
            ]
        },
        about: {
            label: 'About Me',
            title: 'Crafting Visual Narratives Across Every Medium',
            paragraphs: [
                'I am a multidisciplinary creative professional specializing in the full spectrum of visual communication — from cinematic videography and precision video editing to strategic social media management and award-worthy graphic design.',
                'With over eight years of experience working with production houses, marketing agencies, record labels, and independent artists across East Africa and internationally, I bring a rare combination of technical mastery and artistic vision to every project.',
                'Fluent in both English and Amharic, I bridge cultural narratives for global audiences, ensuring your story resonates authentically wherever it is told.'
            ],
            skills: [
                { name: 'Premiere Pro' },
                { name: 'DaVinci Resolve' },
                { name: 'After Effects' },
                { name: 'Photoshop' },
                { name: 'Illustrator' },
                { name: 'Lightroom' },
                { name: 'Blender / Cinema 4D' },
                { name: 'Figma' }
            ]
        },
        experience: {
            label: 'Career Path',
            title: 'Professional Experience',
            description: 'A track record of delivering exceptional visual content across production houses, agencies, and independent ventures.',
            timeline: [
                {
                    title: 'Senior Video Editor & Lead Content Manager',
                    period: '2022 — Present',
                    company: 'Abyssinia Creative Studios, Addis Ababa',
                    description: 'Lead post-production for documentary films and commercial campaigns. Oversee social media strategy for 12+ brand accounts across YouTube, TikTok, and Instagram. Manage a team of 3 junior editors and 2 content creators. Delivered a documentary series that garnered 2M+ views in its first month.',
                    tags: ['Documentary Editing', 'Team Leadership', 'Social Strategy', 'Color Grading']
                },
                {
                    title: 'Lead Videographer & Graphic Designer',
                    period: '2019 — 2022',
                    company: 'Nile Digital Agency, Addis Ababa',
                    description: 'Directed and shot over 80 commercial videos, music videos, and corporate campaigns. Designed complete brand identities for 15+ startups and established businesses. Spearheaded the agency\'s transition to short-form vertical content, increasing client engagement by 340%.',
                    tags: ['Commercial Production', 'Brand Identity', 'Music Videos', 'Motion Graphics']
                },
                {
                    title: 'Independent Creative Professional',
                    period: '2017 — 2019',
                    company: 'Freelance — Regional & International Clients',
                    description: 'Built a freelance practice serving NGOs, record labels, and e-commerce brands across Ethiopia, Kenya, and remote international clients. Delivered end-to-end video production, social media management, and graphic design services. Developed a reputation for cinematic quality and on-time delivery.',
                    tags: ['End-to-End Production', 'Client Relations', 'Remote Workflow', 'Multi-Platform Content']
                },
                {
                    title: 'Junior Editor & Motion Designer',
                    period: '2015 — 2017',
                    company: 'EthioMedia Productions, Addis Ababa',
                    description: 'Started as an assistant editor, quickly advancing to lead editor on TV series episodes and commercial spots. Mastered multi-camera editing, sound design, and broadcast delivery standards. Collaborated with directors and producers to refine narrative pacing and visual continuity.',
                    tags: ['TV Series Editing', 'Sound Design', 'Broadcast Standards', 'Narrative Pacing']
                }
            ]
        },
        services: {
            label: 'What I Offer',
            title: 'Comprehensive Creative Services',
            description: 'From concept to delivery, every service is executed with cinematic precision and strategic intent.',
            cards: [
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
                    title: 'Professional Graphic Design',
                    description: 'Visual identities and marketing collateral that command attention and build lasting brand recognition.',
                    categories: [
                        { name: 'Brand Identity', items: ['Logo Design & Brand Marks', 'Complete Brand Style Guides', 'Typography & Color Systems', 'Business Card & Stationery Design'] },
                        { name: 'Digital & Social Graphics', items: ['Social Media Templates & Carousels', 'YouTube Thumbnails & End Frames', 'Animated GIFs & Motion Graphics', 'Web Banners & Email Marketing Graphics'] },
                        { name: 'Print & Editorial', items: ['Poster, Flyer & Brochure Design', 'Magazine & Editorial Layout', 'Book Cover & Packaging Design', 'Infographic & Data Visualization'] },
                        { name: 'Specialized Design', items: ['Presentation Deck Design (PPT/Keynote)', 'UI/UX Mockups & Prototypes', 'Merchandise & Apparel Design'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
                    title: 'Videography & Production',
                    description: 'Cinematic filming and end-to-end production services that capture stories with precision and artistry.',
                    categories: [
                        { name: 'Filming Services', items: ['Documentary Filming & Interviews', 'Music Video Production & Direction', 'Commercial & Product Videography', 'Corporate Event Coverage & Live Streaming', 'Wedding & Lifestyle Cinematography'] },
                        { name: 'Technical Production', items: ['Multi-Camera Setup & Operation', 'Professional Lighting Design', 'Drone & Aerial Videography', 'Gimbal & Steadicam Operation', 'Behind-the-Scenes (BTS) Filming'] },
                        { name: 'Pre-Production', items: ['Storyboarding & Shot List Creation', 'Location Scouting & Management', 'Casting Assistance & Coordination', 'Equipment Rental Coordination'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line></svg>',
                    title: 'Professional Video Editing',
                    description: 'Precision editing and post-production that transforms raw footage into compelling, polished narratives.',
                    categories: [
                        { name: 'Long-Form Editing', items: ['Documentary Film Editing', 'Feature Film Editing', 'TV Series Episode Editing'] },
                        { name: 'Short-Form & Commercial', items: ['Music Video Editing', 'Commercial & Advertisement Editing', 'Corporate Video Editing', 'Event Highlight Reels'] },
                        { name: 'Social Media Video', items: ['YouTube Long-Form & Shorts', 'TikTok / Reels / Shorts Editing', 'Promotional Trailers & Teasers'] },
                        { name: 'Post-Production Technical', items: ['Professional Color Grading (DaVinci)', 'Sound Design & Audio Mixing', 'Motion Graphics & Lower Thirds', 'Multi-Camera Editing', 'Green Screen & Compositing', 'Subtitling & Captioning (EN/AM)', 'Format Optimization for All Platforms'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
                    title: 'Social Media Content Management',
                    description: 'Strategic platform management that grows audiences, builds communities, and converts engagement into revenue.',
                    categories: [
                        { name: 'Platform-Specific Management', items: ['YouTube Channel Management (SEO, Thumbnails, Analytics)', 'TikTok Growth Strategy & Trend Adaptation', 'Instagram Reels, Grid & Carousel Strategy', 'Facebook Page & Group Management', 'LinkedIn Personal Branding & B2B Content', 'X (Twitter) Visual Campaigns', 'Pinterest Content Design & Curation', 'Snapchat Stories & Engagement'] },
                        { name: 'Strategic Services', items: ['Content Calendar Development', 'Audience Persona Research', 'Hashtag & SEO Optimization', 'Community Management & Engagement', 'Influencer Collaboration Coordination', 'Brand Voice Development', 'Monthly Analytics & Performance Reporting', 'Crisis Management & Reputation Monitoring', 'Paid Social Media Ad Creative Design'] }
                    ]
                }
            ]
        },
        portfolio: {
            label: 'Selected Work',
            title: 'Portfolio',
            description: 'A curated selection of projects spanning videography, editing, design, and social campaigns.',
            filters: [
                { value: 'all', label: 'All Work' },
                { value: 'videography', label: 'Videography' },
                { value: 'editing', label: 'Video Editing' },
                { value: 'design', label: 'Graphic Design' },
                { value: 'social', label: 'Social Media' }
            ],
            // items: [
            //     { category: 'videography', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop', alt: 'Documentary filming in Ethiopia', tag: 'Videography', title: 'Highlands Documentary', description: 'Cinematic documentary filming across the Ethiopian highlands' },
            //     { category: 'editing', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=450&fit=crop', alt: 'Video editing suite', tag: 'Video Editing', title: 'Feature Film: "Crossroads"', description: 'Full post-production and color grading for indie feature' },
            //     { category: 'design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=450&fit=crop', alt: 'Brand identity design', tag: 'Graphic Design', title: 'Abyssinia Coffee Rebrand', description: 'Complete brand identity, packaging, and collateral' },
            //     { category: 'social', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=450&fit=crop', alt: 'Social media campaign', tag: 'Social Media', title: 'TikTok Growth Campaign', description: '0 to 500K followers in 6 months for lifestyle brand' },
            //     { category: 'videography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=450&fit=crop', alt: 'Music video production', tag: 'Videography', title: 'Music Video: "Addis Nights"', description: 'Directed and shot urban music video with 2M+ views' },
            //     { category: 'editing', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=450&fit=crop', alt: 'Commercial editing', tag: 'Video Editing', title: 'Bank Commercial Series', description: '5-spot commercial campaign with motion graphics' },
            //     { category: 'design', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=450&fit=crop', alt: 'Magazine layout design', tag: 'Graphic Design', title: 'Sheger Magazine Layout', description: 'Editorial design for quarterly culture magazine' },
            //     { category: 'social', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'YouTube channel management', tag: 'Social Media', title: 'YouTube Channel Revamp', description: 'Full channel management, thumbnails, and SEO strategy' },
            //     { category: 'videography', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop', alt: 'Wedding cinematography', tag: 'Videography', title: 'Luxury Wedding Cinema', description: 'Cinematic wedding films with drone coverage' }
            // ],
            items: [
                { category: 'videography', image: 'images/portfolio-highlands.jpeg', alt: 'Documentary filming in Ethiopia', tag: 'Videography', title: 'Highlands Documentary', description: 'Cinematic documentary filming across the Ethiopian highlands' },
                { category: 'editing', image: 'images/portfolio-crossroads.jpeg', alt: 'Video editing suite', tag: 'Video Editing', title: 'Feature Film: "Crossroads"', description: 'Full post-production and color grading for indie feature' },
                { category: 'design', image: 'images/portfolio-coffee-rebrand.jpeg', alt: 'Brand identity design', tag: 'Graphic Design', title: 'Abyssinia Coffee Rebrand', description: 'Complete brand identity, packaging, and collateral' },
                { category: 'social', image: 'images/portfolio-tiktok-campaign.jpeg', alt: 'Social media campaign', tag: 'Social Media', title: 'TikTok Growth Campaign', description: '0 to 500K followers in 6 months for lifestyle brand' },
                { category: 'videography', image: 'images/portfolio-addis-nights.jpeg', alt: 'Music video production', tag: 'Videography', title: 'Music Video: "Addis Nights"', description: 'Directed and shot urban music video with 2M+ views' },
                { category: 'editing', image: 'images/portfolio-bank-commercial.jpeg', alt: 'Commercial editing', tag: 'Video Editing', title: 'Bank Commercial Series', description: '5-spot commercial campaign with motion graphics' },
                { category: 'design', image: 'images/portfolio-sheger-magazine.jpeg', alt: 'Magazine layout design', tag: 'Graphic Design', title: 'Sheger Magazine Layout', description: 'Editorial design for quarterly culture magazine' },
                { category: 'social', image: 'images/portfolio-youtube-revamp.jpeg', alt: 'YouTube channel management', tag: 'Social Media', title: 'YouTube Channel Revamp', description: 'Full channel management, thumbnails, and SEO strategy' },
                { category: 'videography', image: 'images/portfolio-wedding-cinema.jpeg', alt: 'Wedding cinematography', tag: 'Videography', title: 'Luxury Wedding Cinema', description: 'Cinematic wedding films with drone coverage' }
            ]
        },
        testimonials: {
            label: 'Client Voices',
            title: 'Testimonials',
            description: 'What clients and collaborators say about working together.',
            items: [
                { quote: 'The documentary series exceeded every expectation. The cinematic quality, the pacing, the way the story unfolded — it was masterful. We have received international festival attention because of this work.', initials: 'DT', name: 'Dawit Tadesse', role: 'Director, Abyssinia Creative Studios' },
                { quote: 'Our TikTok went from 2,000 followers to 500,000 in under six months. The content strategy, the editing style, the trend adaptation — everything was perfectly executed. ROI on our social spend tripled.', initials: 'HB', name: 'Hanna Bekele', role: 'Marketing Director, Habesha Fashion Co.' },
                { quote: 'The rebrand completely transformed how our customers perceive us. The logo, packaging, and social templates are cohesive, premium, and unmistakably ours. Sales increased 40% post-launch.', initials: 'KA', name: 'Kaleb Alemu', role: 'Founder, Abyssinia Coffee Roasters' }
            ]
        },
        contact: {
            // label: 'Get In Touch',
            // title: 'Start Your Project',
            description: 'Ready to create something exceptional? Let\'s discuss your vision.',
            title: 'Let\'s Build Something Great Together',
            description: 'Whether you need a full documentary production, a brand refresh, a viral social campaign, or a cinematic music video — I\'m here to make it happen.',
            details: [
                { type: 'Email', label: 'Email', value: 'hello@biniyamhaile.com.et' },
                { type: 'Phone', label: 'Phone', value: '+251 911 234 567' },
                { type: 'WhatsApp', label: 'WhatsApp', value: '+251 911 234 567', link: '251911234567' }
            ],
            socials: [
                { label: 'LinkedIn', url: '#' },
                { label: 'Facebook', url: '#' },
                { label: 'YouTube', url: '#' },
                { label: 'Telegram', url: '#' },
                { label: 'Instagram', url: '#' },
                { label: 'TikTok', url: '#' }
            ]
        },
        footer: {
            text: '© Creative Portfolio. All rights reserved. Crafted with precision and passion.',
            note: 'Amharic version available | የአማርኛ ስሪት ይገኛል'
        }
    },
    am: {
        nav: {
            links: [
                { href: 'about', label: 'ስለ እኔ' },
                { href: 'experience', label: 'ልምድ' },
                { href: 'services', label: 'አገልግሎቶች' },
                { href: 'portfolio', label: 'ስራዎች' },
                { href: 'testimonials', label: 'ምስክርነቶች' },
                { href: 'contact', label: 'አግኙኝ' }
            ]
        },
        hero: {
            label: 'የምስል ታሪክ ገላጭ እና ዲጂታል አርክቴክት',
            title: 'ሰዎችን የሚያንቀሳቅሱ ምስላዊ ታሪኮች',
            subtitle: 'ለማይታለፉ ብራንዶች የተሰሩ ከፍተኛ ጥራት ያላቸው ቪዲዮ ፕሮዳክሽን፣ ሲኒማቲክ ኤዲቲንግ፣ ድፍረት የተሞላ ግራፊክ ዲዛይን እና ስትራቴጂካዊ የማህበራዊ ሚዲያ አስተዳደር።',
            ctaPrimary: 'ፖርትፎሊዮ ተመልከት',
            ctaSecondary: 'ቅናሽ ጠይቅ',
            stats: [
                { number: '8+', label: 'ዓመታት ልምድ' },
                { number: '20+', label: 'የተጠናቀቁ ፕሮጀክቶች' },
                { number: '50+', label: 'ደስተኛ ደንበኞች' }
            ]
        },
        about: {
            label: 'ስለ እኔ',
            title: 'በሁሉም ሚዲያዎች ላይ ምስላዊ ትረካዎችን መስራት',
            paragraphs: [
                'ከሲኒማቲክ ቪዲዮግራፊ እና ትክክለኛ ቪዲዮ አርትዖት እስከ ስትራቴጂካዊ ማህበራዊ ሚዲያ አስተዳደር እና ሽልማት-ተገቢ ግራፊክ ዲዛይን ድረስ ባለው ሙሉ የእይታ ግንኙነት ስፔክትረም ውስጥ የተካነ ሁለገብ የፈጠራ ባለሙያ ነኝ።',
                'በምስራቅ አፍሪካ እና በአለም አቀፍ ደረጃ ከፕሮዳክሽን ቤቶች፣ የማርኬቲንግ ኤጀንሲዎች፣ የሪከርድ መለያዎች እና ገለልተኛ አርቲስቶች ጋር ከስምንት አመታት በላይ የስራ ልምድ ያለኝ ሲሆን ያልተለመደ የቴክኒካል ችሎታ እና የኪነ-ጥበብ ራዕይ ውህደት ለእያንዳንዱ ፕሮጀክት አመጣለሁ።',
                'እንግሊዝኛ እና አማርኛ አቀላጥፌ በመናገር ለአለምአቀፍ ታዳሚዎች ባህላዊ ትረካዎችን ድልድይ በማድረግ ታሪክዎ በተረትበት ሁሉ በትክክል እንዲተገበር አረጋግጣለሁ።'
            ],
            skills: [
                { name: 'Premiere Pro' },
                { name: 'DaVinci Resolve' },
                { name: 'After Effects' },
                { name: 'Photoshop' },
                { name: 'Illustrator' },
                { name: 'Lightroom' },
                { name: 'Blender / Cinema 4D' },
                { name: 'Figma' }
            ]
        },
        experience: {
            label: 'የስራ መንገድ',
            title: 'ሙያዊ ልምድ',
            description: 'በፕሮዳክሽን ቤቶች፣ ኤጀንሲዎች እና ገለልተኛ ሥራዎች ላይ ልዩ የእይታ ይዘት በማቅረብ የተመዘገበ አቅም።',
            timeline: [
                {
                    title: 'ከፍተኛ ቪዲዮ ኤዲተር እና መሪ የይዘት አስተዳዳሪ',
                    period: '2022 — አሁን',
                    company: 'Abyssinia Creative Studios, አዲስ አበባ',
                    description: 'ለዶክመንተሪ ፊልሞች እና የንግድ ዘመቻዎች የድህረ-ምርት ሂደትን መምራት። በYouTube፣ TikTok እና Instagram ላይ ለ12+ የምርት ስም መለያዎች የማህበራዊ ሚዲያ ስትራቴጂን መከታተል። የ3 ጀማሪ ኤዲተሮች እና 2 የይዘት ፈጣሪዎች ቡድንን ማስተዳደር። በመጀመሪያው ወር 2ሚሊዮን+ እይታዎችን ያገኘ የዶክመንተሪ ተከታታይ አቅርቧል።',
                    tags: ['ዶክመንተሪ ኤዲቲንግ', 'የቡድን አመራር', 'ማህበራዊ ስትራቴጂ', 'ቀለም ማስተካከያ']
                },
                {
                    title: 'መሪ ቪዲዮግራፈር እና ግራፊክ ዲዛይነር',
                    period: '2019 — 2022',
                    company: 'Nile Digital Agency, አዲስ አበባ',
                    description: 'ከ80 በላይ የንግድ ቪዲዮዎችን፣ የሙዚቃ ቪዲዮዎችን እና የኮርፖሬት ዘመቻዎችን መምራት እና መቅረጽ። ለ15+ ጀማሪዎች እና ለተቋቋሙ ንግዶች ሙሉ የምርት ስም መለያን ዲዛይን አድርጓል። የኤጀንሲውን ወደ አጭር-ቅርጽ ቁመታዊ ይዘት ሽግግር በማምራት የደንበኞች ተሳትፎ በ340% ጨምሯል።',
                    tags: ['የንግድ ምርት', 'የምርት ስም መለያ', 'የሙዚቃ ቪዲዮዎች', 'እንቅስቃሴ ግራፊክስ']
                },
                {
                    title: 'ገለልተኛ የፈጠራ ባለሙያ',
                    period: '2017 — 2019',
                    company: 'ፍሪላንስ — ክልላዊ እና ዓለም አቀፍ ደንበኞች',
                    description: 'በኢትዮጵያ፣ ኬንያ እና በርቀት ዓለም አቀፍ ደንበኞች ላይ መንግሥታዊ ያልሆኑ ድርጅቶችን፣ የሪከርድ መለያዎችን እና የኢ-ኮሜርስ ብራንዶችን የሚያገለግል የፍሪላንስ ልምምድ ገንብቷል። ከጫፍ እስከ ጫፍ የቪዲዮ ምርት፣ የማህበራዊ ሚዲያ አስተዳደር እና የግራፊክ ዲዛይን አገልግሎቶችን አቀረበ። በሲኒማቲክ ጥራት እና በሰዓቱ ማድረስ ስም አተረፈ።',
                    tags: ['ከጫፍ እስከ ጫፍ ምርት', 'የደንበኞች ግንኙነት', 'የርቀት ስራ ሂደት', 'ባለብዙ-መድረክ ይዘት']
                },
                {
                    title: 'ጀማሪ ኤዲተር እና እንቅስቃሴ ዲዛይነር',
                    period: '2015 — 2017',
                    company: 'EthioMedia Productions, አዲስ አበባ',
                    description: 'እንደ ረዳት ኤዲተር ጀምሮ በቴሌቪዥን ተከታታይ ክፍሎች እና የንግድ ስፖቶች ላይ መሪ ኤዲተር ለመሆን በፍጥነት አደገ። ባለብዙ-ካሜራ ኤዲቲንግ፣ የድምጽ ዲዛይን እና የብሮድካስት አቅርቦት ደረጃዎችን ተማረ። የትረካ ፍጥነትን እና የእይታ ቀጣይነትን ለማጣራት ከዳይሬክተሮች እና ፕሮዲውሰሮች ጋር ተባበረ።',
                    tags: ['የቴሌቪዥን ተከታታይ ኤዲቲንግ', 'የድምጽ ዲዛይን', 'የብሮድካስት ደረጃዎች', 'የትረካ ፍጥነት']
                }
            ]
        },
        services: {
            label: 'የማቀርበው',
            title: 'አጠቃላይ የፈጠራ አገልግሎቶች',
            description: 'ከሃሳብ እስከ ማድረስ፣ እያንዳንዱ አገልግሎት በሲኒማቲክ ትክክለኛነት እና ስትራቴጂካዊ ዓላማ ይከናወናል።',
            cards: [
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
                    title: 'ሙያዊ ግራፊክ ዲዛይን',
                    description: 'ትኩረትን የሚስቡ እና ዘላቂ የምርት ስም እውቅናን የሚገነቡ የእይታ ማንነቶች እና የግብይት መሰረተ-ልማቶች።',
                    categories: [
                        { name: 'የምርት ስም ማንነት', items: ['አርማ ዲዛይን እና የምርት ስም ምልክቶች', 'ሙሉ የምርት ስም ቅጥ መመሪያዎች', 'የፊደል አጻጻፍ እና የቀለም ስርዓቶች', 'የንግድ ካርድ እና የጽህፈት ዕቃዎች ዲዛይን'] },
                        { name: 'ዲጂታል እና ማህበራዊ ግራፊክስ', items: ['የማህበራዊ ሚዲያ አብነቶች እና ካሮሰሎች', 'የYouTube ድንክዬ ምስሎች እና መጨረሻ ክፈፎች', 'አኒሜሽን GIFs እና እንቅስቃሴ ግራፊክስ', 'የድር ባነሮች እና የኢሜይል ግብይት ግራፊክስ'] },
                        { name: 'ህትመት እና ኤዲቶሪያል', items: ['ፖስተር፣ በራሪ ወረቀት እና ብሮሹር ዲዛይን', 'የመጽሔት እና የኤዲቶሪያል አቀማመጥ', 'የመጽሐፍ ሽፋን እና ማሸጊያ ዲዛይን', 'ኢንፎግራፊክ እና የውሂብ እይታ ማሳያ'] },
                        { name: 'ልዩ ዲዛይን', items: ['የአቀራረብ ንጣፍ ዲዛይን (PPT/Keynote)', 'UI/UX ሞክአፕስ እና ፕሮቶታይፕስ', 'የሸቀጥ እና የልብስ ዲዛይን'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
                    title: 'ቪዲዮግራፊ እና ፕሮዳክሽን',
                    description: 'በትክክለኛነት እና ጥበብ ታሪኮችን የሚይዙ ሲኒማቲክ ቀረጻ እና ከጫፍ እስከ ጫፍ የምርት አገልግሎቶች።',
                    categories: [
                        { name: 'የቀረጻ አገልግሎቶች', items: ['ዶክመንተሪ ቀረጻ እና ቃለመጠይቆች', 'የሙዚቃ ቪዲዮ ፕሮዳክሽን እና አቅጣጫ', 'የንግድ እና የምርት ቪዲዮግራፊ', 'የኮርፖሬት ዝግጅት ሽፋን እና የቀጥታ ስርጭት', 'ሠርግ እና የአኗኗር ሲኒማቶግራፊ'] },
                        { name: 'ቴክኒካል ፕሮዳክሽን', items: ['ባለብዙ-ካሜራ ዝግጅት እና አሰራር', 'ሙያዊ የመብራት ዲዛይን', 'ድሮን እና ከአየር ላይ ቪዲዮግራፊ', 'ጂምባል እና ስቴዲካም አሰራር', 'ከትዕይንቱ ጀርባ (BTS) ቀረጻ'] },
                        { name: 'ቅድመ-ፕሮዳክሽን', items: ['ስቶሪቦርዲንግ እና የተኩስ ዝርዝር መፍጠር', 'አካባቢ ፍለጋ እና አስተዳደር', 'የተዋንያን ምርጫ እርዳታ እና ማስተባበር', 'የመሣሪያ ኪራይ ማስተባበር'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line></svg>',
                    title: 'ሙያዊ ቪዲዮ ኤዲቲንግ',
                    description: 'ያልተስተካከለ ቀረጻን ወደ ማራኪ፣ የተጣራ ትረካዎች የሚቀይር ትክክለኛ ኤዲቲንግ እና የድህረ-ምርት ስራ።',
                    categories: [
                        { name: 'ረጅም-ቅርጽ ኤዲቲንግ', items: ['የዶክመንተሪ ፊልም ኤዲቲንግ', 'የፊቸር ፊልም ኤዲቲንግ', 'የቴሌቪዥን ተከታታይ ክፍል ኤዲቲንግ'] },
                        { name: 'አጭር-ቅርጽ እና ንግድ', items: ['የሙዚቃ ቪዲዮ ኤዲቲንግ', 'የንግድ እና ማስታወቂያ ኤዲቲንግ', 'የኮርፖሬት ቪዲዮ ኤዲቲንግ', 'የዝግጅት ድምቀት ሪልስ'] },
                        { name: 'የማህበራዊ ሚዲያ ቪዲዮ', items: ['YouTube ረጅም-ቅርጽ እና ሾርትስ', 'TikTok / Reels / Shorts ኤዲቲንግ', 'የማስተዋወቂያ ፊልሞች እና ቲዘርስ'] },
                        { name: 'የድህረ-ምርት ቴክኒካል', items: ['ሙያዊ ቀለም ማስተካከያ (DaVinci)', 'የድምጽ ዲዛይን እና ኦዲዮ ቅልቅል', 'እንቅስቃሴ ግራፊክስ እና የታችኛው ሶስተኛ', 'ባለብዙ-ካሜራ ኤዲቲንግ', 'አረንጓዴ ስክሪን እና ኮምፖዚቲንግ', 'የፅሁፍ ግልባጭ እና መግለጫ (EN/AM)', 'ለሁሉም መድረኮች ቅርጸት ማመቻቸት'] }
                    ]
                },
                {
                    icon: '<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
                    title: 'የማህበራዊ ሚዲያ ይዘት አስተዳደር',
                    description: 'ተመልካቾችን የሚያሳድግ፣ ማህበረሰብን የሚገነባ እና ተሳትፎን ወደ ገቢ የሚቀይር ስትራቴጂካዊ መድረክ አስተዳደር።',
                    categories: [
                        { name: 'በመድረክ-ተኮር አስተዳደር', items: ['የYouTube ቻናል አስተዳደር (SEO፣ ድንክዬ ምስሎች፣ ትንታኔ)', 'የTikTok እድገት ስትራቴጂ እና የአዝማሚያ መላመድ', 'የInstagram Reels፣ Grid እና Carousel ስትራቴጂ', 'የFacebook ገጽ እና ቡድን አስተዳደር', 'የLinkedIn የግል ብራንዲንግ እና B2B ይዘት', 'X (Twitter) ምስላዊ ዘመቻዎች', 'የPinterest ይዘት ዲዛይን እና ክምችት', 'Snapchat ታሪኮች እና ተሳትፎ'] },
                        { name: 'ስትራቴጂካዊ አገልግሎቶች', items: ['የይዘት የቀን መቁጠሪያ ልማት', 'የተመልካች ፐርሶና ምርምር', 'የሃሽታግ እና SEO ማመቻቸት', 'የማህበረሰብ አስተዳደር እና ተሳትፎ', 'የኢንፍሉዌንሰር ትብብር ማስተባበር', 'የምርት ስም ድምጽ ልማት', 'ወርሃዊ ትንታኔ እና የአፈጻጸም ሪፖርት', 'የችግር አስተዳደር እና የስም ክትትል', 'የሚከፈልበት የማህበራዊ ሚዲያ ማስታወቂያ የፈጠራ ዲዛይን'] }
                    ]
                }
            ]
        },
        portfolio: {
            label: 'የተመረጡ ስራዎች',
            title: 'ፖርትፎሊዮ',
            description: 'ቪዲዮግራፊን፣ ኤዲቲንግን፣ ዲዛይንን እና የማህበራዊ ዘመቻዎችን የሚሸፍን የተመረጡ ፕሮጀክቶች ስብስብ።',
            filters: [
                { value: 'all', label: 'ሁሉም ስራ' },
                { value: 'videography', label: 'ቪዲዮግራፊ' },
                { value: 'editing', label: 'ቪዲዮ ኤዲቲንግ' },
                { value: 'design', label: 'ግራፊክ ዲዛይን' },
                { value: 'social', label: 'ማህበራዊ ሚዲያ' }
            ],
            items: [
                { category: 'videography', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop', alt: 'በኢትዮጵያ ዶክመንተሪ ቀረጻ', tag: 'ቪዲዮግራፊ', title: 'የተራራማው ዶክመንተሪ', description: 'በኢትዮጵያ ከፍተኛ ቦታዎች ላይ የሲኒማቲክ ዶክመንተሪ ቀረጻ' },
                { category: 'editing', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=450&fit=crop', alt: 'የቪዲዮ ኤዲቲንግ ክፍል', tag: 'ቪዲዮ ኤዲቲንግ', title: 'የፊቸር ፊልም: "መንታ መንገድ"', description: 'ለገለልተኛ ፊልም ሙሉ የድህረ-ምርት እና የቀለም ማስተካከያ' },
                { category: 'design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=450&fit=crop', alt: 'የምርት ስም ማንነት ዲዛይን', tag: 'ግራፊክ ዲዛይን', title: 'የአቢሲኒያ ቡና ዳግም ምርቅ', description: 'ሙሉ የምርት ስም ማንነት፣ ማሸጊያ እና ዋስትና' },
                { category: 'social', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=450&fit=crop', alt: 'የማህበራዊ ሚዲያ ዘመቻ', tag: 'ማህበራዊ ሚዲያ', title: 'የTikTok እድገት ዘመቻ', description: 'በ6 ወራት ውስጥ ከ0 እስከ 500ሺህ ተከታዮች ለአኗኗር ብራንድ' },
                { category: 'videography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=450&fit=crop', alt: 'የሙዚቃ ቪዲዮ ፕሮዳክሽን', tag: 'ቪዲዮግራፊ', title: 'የሙዚቃ ቪዲዮ: "የአዲስ አበባ ምሽቶች"', description: '2M+ እይታዎች ያለው የከተማ ሙዚቃ ቪዲዮ ተመርቶና ተቀርጿል' },
                { category: 'editing', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=450&fit=crop', alt: 'የንግድ ኤዲቲንግ', tag: 'ቪዲዮ ኤዲቲንግ', title: 'የባንክ የንግድ ማስታወቂያ ተከታታይ', description: '5-ስፖት የንግድ ዘመቻ ከእንቅስቃሴ ግራፊክስ ጋር' },
                { category: 'design', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=450&fit=crop', alt: 'የመጽሔት አቀማመጥ ዲዛይን', tag: 'ግራፊክ ዲዛይን', title: 'የሸገር መጽሔት አቀማመጥ', description: 'ለሩብ አመት የባህል መጽሔት ኤዲቶሪያል ዲዛይን' },
                { category: 'social', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'የYouTube ቻናል አስተዳደር', tag: 'ማህበራዊ ሚዲያ', title: 'የYouTube ቻናል እድሳት', description: 'ሙሉ ቻናል አስተዳደር፣ ድንክዬ ምስሎች እና የSEO ስትራቴጂ' },
                { category: 'videography', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop', alt: 'የሠርግ ሲኒማቶግራፊ', tag: 'ቪዲዮግራፊ', title: 'የቅንጡ ሠርግ ሲኒማ', description: 'ከድሮን ሽፋን ጋር የሲኒማቲክ የሠርግ ፊልሞች' }
            ]
        },
        testimonials: {
            label: 'የደንበኞች ድምጽ',
            title: 'ምስክርነቶች',
            description: 'ደንበኞች እና አጋሮች አብሮ ስለመስራት ምን እንደሚሉ።',
            items: [
                { quote: 'የዶክመንተሪው ተከታታይ ከሁሉም ጥበቃ በላይ አልፏል። ሲኒማቲክ ጥራቱ፣ ፍጥነቱ፣ ታሪኩ የተገለጠበት መንገድ — የተዋጣለት ነበር። በዚህ ስራ ምክንያት ዓለም አቀፍ ፌስቲቫል ትኩረት አግኝተናል።', initials: 'ዳዊት', name: 'ዳዊት ታደሰ', role: 'ዳይሬክተር፣ Abyssinia Creative Studios' },
                { quote: 'የእኛ TikTok ከ2,000 ተከታዮች በ6 ወራት ውስጥ ወደ 500,000 አድጓል። የይዘት ስትራቴጂው፣ የኤዲቲንግ ቅጡ፣ የአዝማሚያ መላመዱ — ሁሉም ነገር በትክክል ተፈጽሟል። በማህበራዊ ወጪያችን ላይ ያለው ROI በሶስት እጥፍ አድጓል።', initials: 'ሃና', name: 'ሃና በቀለ', role: 'የግብይት ዳይሬክተር፣ Habesha Fashion Co.' },
                { quote: 'ዳግም ምርቁ ደንበኞቻችን እንዴት እንደሚመለከቱን ሙሉ በሙሉ ቀይሮታል። አርማው፣ ማሸጊያው እና የማህበራዊ አብነቶች የተቀናጁ፣ ፕሪሚየም እና የማይሳሳቱ የእኛ ናቸው። ከተጀመረ በኋላ ሽያጮች በ40% ጨምረዋል።', initials: 'ቃለ', name: 'ቃለ አለሙ', role: 'መስራች፣ Abyssinia Coffee Roasters' }
            ]
        },
        contact: {
            label: 'ያግኙኝ',
            title: 'ፕሮጀክትዎን ይጀምሩ',
            description: 'ልዩ ነገር ለመፍጠር ዝግጁ ነዎት? ስለ ራዕይዎ እንወያይ።',
            infoTitle: 'አብረን ትልቅ ነገር እንገንባ',
            infoDescription: 'ሙሉ የዶክመንተሪ ፕሮዳክሽን፣ የምርት ስም ማደስ፣ ቫይራል የማህበራዊ ዘመቻ ወይም ሲኒማቲክ የሙዚቃ ቪዲዮ ቢፈልጉ — እንዲሳካ ለማድረግ እዚህ ነኝ።',
            details: [
                { type: 'Email', label: 'ኢሜይል', value: 'hello@creativeportfolio.com' },
                { type: 'Phone', label: 'ስልክ', value: '+251 911 234 567' },
                { type: 'WhatsApp', label: 'ዋትስአፕ', value: '+251 911 234 567', link: '251911234567' }
            ],
            socials: [
                { label: 'LinkedIn', url: '#' },
                { label: 'Facebook', url: '#' },
                { label: 'YouTube', url: '#' },
                { label: 'Telegram', url: '#' },
                { label: 'Instagram', url: '#' },
                { label: 'TikTok', url: '#' }
            ]
        },
        footer: {
            text: '© Creative Portfolio. ሁሉም መብቶች የተጠበቁ ናቸው። በትክክልና በፍቅር የተሰራ።',
            note: 'የእንግሊዝኛ ስሪት ይገኛል | English version available'
        }
    }
};