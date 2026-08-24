import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    menu: string;
    gallery: string;
    hours: string;
    location: string;
    reviews: string;
    contact: string;
    viewMenu: string;
    callNow: string;
    language: string;
  };
  hero: {
    cityBadge: string;
    headline: string;
    tagline: string;
    subtitle: string;
    viewMenuBtn: string;
    contactBtn: string;
    callBtn: string;
    scrollHint: string;
    openNow: string;
    closedNow: string;
    closesAt: string;
    opensAt: string;
    everydayHours: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    featureCoffeeTitle: string;
    featureCoffeeDesc: string;
    featureBakeryTitle: string;
    featureBakeryDesc: string;
    featureAmbianceTitle: string;
    featureAmbianceDesc: string;
    featureHoursTitle: string;
    featureHoursDesc: string;
    experienceText: string;
    experienceSub: string;
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategory: string;
    allCategories: string;
    popularTag: string;
    popularBadge: string;
    askForPrice: string;
    noResults: string;
    resetFilter: string;
    pricingNotice: string;
    emptyTitle: string;
    emptySubtitle: string;
    viewAllItems: string;
    chefNoteTitle: string;
    chefNoteText: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    allPhotos: string;
    coffee: string;
    coffeeDrinks: string;
    food: string;
    foodBreakfast: string;
    pastries: string;
    pastriesBakes: string;
    ambiance: string;
    atmosphere: string;
    clickToEnlarge: string;
    clickHint: string;
    closeLightbox: string;
  };
  hours: {
    badge: string;
    title: string;
    subtitle: string;
    daysRange: string;
    timeRange: string;
    openNow: string;
    closedNow: string;
    closed: string;
    openNote: string;
    closedNote: string;
    tableTitle: string;
    weeklySchedule: string;
    openEveryDay: string;
    holidayNotice: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    today: string;
  };
  location: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    addressLabel: string;
    addressValue: string;
    plusCodeTitle: string;
    plusCodeLabel: string;
    plusCodeValue: string;
    getDirections: string;
    openInMaps: string;
    copyCode: string;
    copied: string;
    interactiveMap: string;
    neighborhoodNote: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    overallRating: string;
    score: string;
    outOf: string;
    reviewCountText: string;
    basedOnReviews: string;
    qualityCommitment: string;
    commitmentText: string;
    feedbackCommitment: string;
    feedbackBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    thankYou: string;
    submitAnother: string;
    yourRating: string;
    yourName: string;
    yourReview: string;
    nameLabel: string;
    ratingLabel: string;
    commentLabel: string;
    submitFeedback: string;
    sendReview: string;
    thankYouFeedback: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directLine: string;
    callHoursNotice: string;
    phoneValue: string;
    phoneNote: string;
    callNuCafe: string;
    locationLabel: string;
    locationCardTitle: string;
    hoursLabel: string;
    hoursCardTitle: string;
    hospitalityLabel: string;
    hospitalityCardTitle: string;
    hospitalityCardDesc: string;
    formTitle: string;
    formSubtitle: string;
    yourName: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneEmail: string;
    contactLabel: string;
    contactPlaceholder: string;
    subject: string;
    topicLabel: string;
    topics: {
      general: string;
      reservation: string;
      takeaway: string;
      catering: string;
      feedback: string;
    };
    topicGeneral: string;
    topicReservation: string;
    topicCatering: string;
    topicFeedback: string;
    topicOther: string;
    message: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendMessage: string;
    sending: string;
    successTitle: string;
    messageDelivered: string;
    successDesc: string;
    sendAnother: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    navTitle: string;
    businessInfo: string;
    infoTitle: string;
    location: string;
    phone: string;
    hours: string;
    hoursValue: string;
    rating: string;
    ratingLabel: string;
    copyright: string;
    rights: string;
    backToTop: string;
    directLineTag: string;
  };
  floating: {
    callNuCafe: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
      hours: 'Hours',
      location: 'Location',
      reviews: 'Reviews',
      contact: 'Contact',
      viewMenu: 'View Menu',
      callNow: 'Call Now',
      language: 'Language',
    },
    hero: {
      cityBadge: 'Addis Ababa, Ethiopia',
      headline: 'Nu Café',
      tagline: 'Good Coffee. Good Moments.',
      subtitle:
        'Experience the authentic essence of Ethiopian coffee culture, handcrafted beverages, and oven-fresh bakery items in the heart of Addis Ababa.',
      viewMenuBtn: 'View Menu',
      contactBtn: 'Contact Us',
      callBtn: 'Call 0944 067 956',
      scrollHint: 'Scroll to explore',
      openNow: 'Open Now',
      closedNow: 'Currently Closed',
      closesAt: 'Closes at 9:00 PM',
      opensAt: 'Opens at 7:00 AM',
      everydayHours: 'Daily 7:00 AM – 9:00 PM',
    },
    about: {
      badge: 'Our Story',
      title: 'A Welcoming Coffee Destination in Addis Ababa',
      p1: 'Nu Café is a welcoming neighborhood coffee destination located in Addis Ababa, Ethiopia. We celebrate the timeless heritage of Ethiopian coffee while offering a warm, contemporary atmosphere for friends, families, and professionals.',
      p2: 'From carefully selected Ethiopian highland coffee beans to refreshing tropical juices, morning breakfast platters, and oven-fresh pastries, every item is prepared with precision and genuine Ethiopian hospitality.',
      featureCoffeeTitle: 'Highland Beans',
      featureCoffeeDesc: 'Freshly roasted Ethiopian highland coffee brewed with aromatic depth and dense crema.',
      featureBakeryTitle: 'Oven-Fresh Daily',
      featureBakeryDesc: 'Traditional dabo bread, sweet breakfast pastries, and savory bites baked fresh.',
      featureAmbianceTitle: 'Welcoming Atmosphere',
      featureAmbianceDesc: 'Thoughtfully designed seating for conversations, quiet study, or friendly meetups.',
      featureHoursTitle: 'Open 7 Days a Week',
      featureHoursDesc: 'Serving Addis Ababa every day from 7:00 AM until 9:00 PM.',
      experienceText: 'Authentic Ethiopian Coffee Experience',
      experienceSub: 'Located at VQWC+MMQ, Addis Ababa',
    },
    menu: {
      badge: 'Our Menu',
      title: 'Handcrafted Coffee, Food & Drinks',
      subtitle:
        'Explore our selection of coffees, teas, fresh juices, breakfast plates, pastries, and savory bites prepared daily.',
      searchPlaceholder: 'Search menu (e.g. coffee, juice, omelette, pastry)...',
      allCategory: 'All Items',
      allCategories: 'All Categories',
      popularTag: 'Popular',
      popularBadge: 'Popular Choice',
      askForPrice: 'Ask for price',
      noResults: 'No menu items match your search or filter.',
      resetFilter: 'Clear filters',
      pricingNotice: 'Prices are available on order or directly at the counter.',
      emptyTitle: 'No items found',
      emptySubtitle: 'Try adjusting your search query or select another category.',
      viewAllItems: 'View All Menu Items',
      chefNoteTitle: 'Fresh Daily Preparation',
      chefNoteText: 'Every cup is pulled with locally roasted Ethiopian beans and all bakery goods are prepared fresh daily.',
    },
    gallery: {
      badge: 'Visual Gallery',
      title: 'Moments at Nu Café',
      subtitle:
        'Explore our coffee creations, freshly prepared dishes, and inviting café spaces in Addis Ababa.',
      all: 'All Photos',
      allPhotos: 'All Photos',
      coffee: 'Coffee & Drinks',
      coffeeDrinks: 'Coffee & Drinks',
      food: 'Food & Juices',
      foodBreakfast: 'Food & Breakfast',
      pastries: 'Pastries & Bakery',
      pastriesBakes: 'Pastries & Bakery',
      ambiance: 'Café Ambiance',
      atmosphere: 'Café Ambiance',
      clickToEnlarge: 'Click any photo to open in full size',
      clickHint: 'Click any image for fullscreen view',
      closeLightbox: 'Close photo view',
    },
    hours: {
      badge: 'Schedule',
      title: 'Opening Hours',
      subtitle: 'We are delighted to welcome you every single day of the week in Addis Ababa.',
      daysRange: 'Monday – Sunday (Every day)',
      timeRange: '7:00 AM – 9:00 PM',
      openNow: 'Open Right Now',
      closedNow: 'Currently Closed',
      closed: 'Closed',
      openNote: 'Come on in! Our baristas and kitchen team are ready to serve you.',
      closedNote: 'We will be open again tomorrow morning at 7:00 AM.',
      tableTitle: 'Weekly Operating Schedule',
      weeklySchedule: 'Weekly Schedule',
      openEveryDay: 'Open every single day without exception',
      holidayNotice: 'Open during all public holidays in Addis Ababa unless special notice is posted.',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      today: 'Today',
    },
    location: {
      badge: 'Find Us',
      title: 'Visit Nu Café',
      subtitle: 'Easily find us in Addis Ababa, Ethiopia.',
      addressTitle: 'Street & Location',
      addressLabel: 'Address & Neighborhood',
      addressValue: 'VQWC+MMQ, Addis Ababa, Ethiopia',
      plusCodeTitle: 'Google Plus Code',
      plusCodeLabel: 'Google Plus Code',
      plusCodeValue: 'VQWC+MMQ Addis Ababa',
      getDirections: 'Get Directions on Google Maps',
      openInMaps: 'Open in Maps',
      copyCode: 'Copy',
      copied: 'Copied',
      interactiveMap: 'Interactive Location Map',
      neighborhoodNote:
        'Located in Addis Ababa, Ethiopia with street access and convenient parking nearby.',
    },
    reviews: {
      badge: 'Community Rating',
      title: 'Ratings & Reviews',
      subtitle: 'We value genuine hospitality and strive every day to elevate each cup, pastry, and service interaction.',
      overallRating: 'Overall Rating',
      score: '2.8',
      outOf: 'out of 5.0',
      reviewCountText: 'Based on 4 reviews',
      basedOnReviews: 'Based on 4 total customer reviews on record',
      qualityCommitment: 'Our Quality Commitment',
      commitmentText: 'With a score of 2.8 recorded from initial reviews (4 reviews), our team is dedicated to listening to our guests, refining bean roasts, and ensuring prompt, warm service.',
      feedbackCommitment:
        'We value every guest experience as we continuously elevate our coffee craft, hospitality, and atmosphere in Addis Ababa.',
      feedbackBtn: 'Share Your Experience',
      modalTitle: 'Share Your Feedback',
      modalSubtitle: 'Help us serve you better at Nu Café.',
      formTitle: 'Visited Nu Café?',
      formSubtitle: 'Share your experience to help us continually improve',
      thankYou: 'Thank You for Your Feedback',
      submitAnother: 'Submit Another Note',
      yourRating: 'Your Rating',
      yourName: 'Your Name',
      yourReview: 'Your Review',
      nameLabel: 'Your Name',
      ratingLabel: 'Rating (1 to 5 Stars)',
      commentLabel: 'Your Comments',
      submitFeedback: 'Submit Review',
      sendReview: 'Send Review',
      thankYouFeedback: 'Thank you for your valuable feedback!',
    },
    contact: {
      badge: 'Direct Inquiries',
      title: 'Contact Nu Café',
      subtitle:
        'Have a question, catering request, or looking to reserve group seating? Reach out directly or send us a message.',
      directLine: 'Direct Line',
      callHoursNotice: 'Our Addis Ababa team is available during all operational hours (7:00 AM – 9:00 PM, 7 days a week).',
      phoneValue: '0944 067 956',
      phoneNote: 'Our Addis Ababa team is available during all operational hours (7:00 AM – 9:00 PM, 7 days a week).',
      callNuCafe: 'Call 0944 067 956',
      locationLabel: 'Location',
      locationCardTitle: 'Location',
      hoursLabel: 'Opening Hours',
      hoursCardTitle: 'Opening Hours',
      hospitalityLabel: 'Hospitality',
      hospitalityCardTitle: 'Hospitality',
      hospitalityCardDesc: 'Dine-in, Takeaway & Artisanal Coffee',
      formTitle: 'Send a Message',
      formSubtitle: 'Fill out the form below and our team will get back to you promptly.',
      yourName: 'Your Name',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Dawit Tadesse',
      phoneEmail: 'Phone or Email',
      contactLabel: 'Phone or Email',
      contactPlaceholder: 'e.g. 0911... or name@email.com',
      subject: 'Subject / Topic',
      topicLabel: 'Subject / Topic',
      topics: {
        general: 'General Inquiry & Info',
        reservation: 'Table & Group Seating Inquiry',
        takeaway: 'Takeaway & Pastry Orders',
        catering: 'Coffee & Pastry Catering',
        feedback: 'Feedback or Suggestion',
      },
      topicGeneral: 'General Inquiry & Info',
      topicReservation: 'Table & Group Seating Inquiry',
      topicCatering: 'Catering / Bulk Order',
      topicFeedback: 'Feedback & Suggestions',
      topicOther: 'Other Question',
      message: 'Your Message',
      messageLabel: 'Your Message',
      messagePlaceholder: 'How can we assist you today?',
      sendBtn: 'Send Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Delivered',
      messageDelivered: 'Message Delivered',
      successDesc: 'Thank you. We have received your inquiry and will follow up shortly.',
      sendAnother: 'Send Another Message',
    },
    footer: {
      tagline: '“Good Coffee. Good Moments.”',
      description:
        'Your neighborhood coffee shop in Addis Ababa. Dedicated to freshly roasted Ethiopian highland beans, handcrafted drinks, and oven-fresh pastries every single day.',
      navigation: 'Navigation',
      navTitle: 'Navigation',
      businessInfo: 'Business Information',
      infoTitle: 'Business Information',
      location: 'Location',
      phone: 'Phone',
      hours: 'Opening Hours',
      hoursValue: 'Every day, 7:00 AM – 9:00 PM',
      rating: 'Rating: 2.8 / 5.0 (4 reviews)',
      ratingLabel: 'Rating: 2.8 / 5.0 (4 reviews)',
      copyright: 'Nu Café. Addis Ababa, Ethiopia. All rights reserved.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
      directLineTag: 'Direct in Addis Ababa',
    },
    floating: {
      callNuCafe: 'Call 0944 067 956',
      backToTop: 'Back to top',
    },
  },
  am: {
    nav: {
      home: 'መነሻ',
      about: 'ስለ እኛ',
      menu: 'ሜኑ',
      gallery: 'ማዕከለ-ስዕላት',
      hours: 'የስራ ሰዓት',
      location: 'አድራሻ',
      reviews: 'አስተያየቶች',
      contact: 'ያግኙን',
      viewMenu: 'ሜኑ ይመልከቱ',
      callNow: 'ይደውሉ',
      language: 'ቋንቋ',
    },
    hero: {
      cityBadge: 'አዲስ አበባ፣ ኢትዮጵያ',
      headline: 'ኑ ካፌ',
      tagline: 'ጥሩ ቡና። መልካም ጊዜያት።',
      subtitle:
        'በአዲስ አበባ እምብርት የሚገኘው ኑ ካፌ ትክክለኛውን የኢትዮጵያ የቡና ባህል፣ የተመረጡ መጠጦች እና ትኩስ የዳቦና ኬክ ምርቶችን በሞቀ መስተንግዶ ያቀርብልዎታል።',
      viewMenuBtn: 'ሜኑ ይመልከቱ',
      contactBtn: 'ያነጋግሩን',
      callBtn: 'በ 0944 067 956 ይደውሉ',
      scrollHint: 'ወደ ታች ይሸብልሉ',
      openNow: 'አሁን ክፍት ነው',
      closedNow: 'አሁን ዝግ ነው',
      closesAt: 'የሚዘጋው በ 3:00 ሰዓት (9:00 PM)',
      opensAt: 'የሚከፈተው በ 1:00 ሰዓት (7:00 AM)',
      everydayHours: 'በየቀኑ ከጠዋቱ 1:00 – ማታ 3:00',
    },
    about: {
      badge: 'ስለ እኛ',
      title: 'በአዲስ አበባ የተከፈተ ሞቅ ያለ የቡና ማረፊያ',
      p1: 'ኑ ካፌ በአዲስ አበባ የሚገኝ እንግዳ ተቀባይና ምቹ የቡና መዳረሻ ነው። የኢትዮጵያን ጥንታዊና ድንቅ የቡና ባህል ከዘመናዊና ሰላማዊ ከባቢ ጋር በማዋሃድ ለወዳጆች፣ ለቤተሰብ እና ለስራ ሰዎች ምቹ ቦታ ፈጥረናል።',
      p2: 'ከምርጥ የሀበሻ የደጋ ቡና ጀምሮ እስከ ተፈጥሯዊ የፍራፍሬ ጁሶች፣ ጣፋጭ የጠዋት ቁርሶች እና ትኩስ የተጋገሩ የዳቦና ኬክ ምርቶች ድረስ እያንዳንዱ አገልግሎት በከፍተኛ ጥንቃቄና በኢትዮጵያዊ መስተንግዶ ይቀርባል።',
      featureCoffeeTitle: 'የደጋ ቡና',
      featureCoffeeDesc: 'ትኩስ የተቆላና የተፈጨ ጥራት ያለው የኢትዮጵያ ቡና በልዩ መዓዛ።',
      featureBakeryTitle: 'ትኩስ የተጋገሩ',
      featureBakeryDesc: 'ባህላዊ ድፎ ዳቦ፣ ክሮሳንት፣ ጣፋጭ ኬኮችና ቀላል ምግቦች በየቀኑ።',
      featureAmbianceTitle: 'ምቹ ከባቢ',
      featureAmbianceDesc: 'ለእረፍት፣ ለውይይትና ለስራ ተስማሚ የሆነ ሰላማዊና ዘመናዊ መቀመጫ።',
      featureHoursTitle: 'በሳምንት 7 ቀናት ክፍት',
      featureHoursDesc: 'በየቀኑ ከጠዋቱ 1:00 እስከ ማታ 3:00 ድረስ አገልግሎት እንሰጣለን።',
      experienceText: 'ትክክለኛው የኢትዮጵያ ቡና ተሞክሮ',
      experienceSub: 'አድራሻ፡ VQWC+MMQ፣ አዲስ አበባ',
    },
    menu: {
      badge: 'የእኛ ሜኑ',
      title: 'የተመረጡ ቡናዎች፣ ምግቦች እና መጠጦች',
      subtitle:
        'የተለያዩ የቡና አይነቶችን፣ ሻይ፣ የተፈጥሮ ፍራፍሬ ጁሶችን፣ ቁርስ፣ ኬኮችና ጣፋጭ ምግቦችን እዚህ ይመልከቱ።',
      searchPlaceholder: 'ሜኑ ውስጥ ይፈልጉ (ምሳሌ፡ ቡና፣ ጁስ፣ ኦምሌት፣ ዳቦ)...',
      allCategory: 'ሁሉም',
      allCategories: 'ሁሉም ምድቦች',
      popularTag: 'ተወዳጅ',
      popularBadge: 'ተወዳጅ ምርጫ',
      askForPrice: 'ዋጋ ይጠይቁ',
      noResults: 'ምንም የተገኘ የምግብ ወይም መጠጥ አይነት የለም።',
      resetFilter: 'ፍለጋውን ያጽዱ',
      pricingNotice: 'ዋጋዎችን በቀጥታ በካፌው ውስጥ ወይም ሲያዙ መጠየቅ ይችላሉ።',
      emptyTitle: 'ምንም አልተገኘም',
      emptySubtitle: 'እባክዎ ፍለጋዎን ያስተካክሉ ወይም ሌላ ምድብ ይምረጡ።',
      viewAllItems: 'ሁሉንም ሜኑ እይ',
      chefNoteTitle: 'ትኩስ የዕለት ዝግጅት',
      chefNoteText: 'እያንዳንዱ የቡና ስኒ በኢትዮጵያ ምርጥ ቡና የተዘጋጀ ሲሆን ኬኮችና መክሰሶች በየቀኑ ትኩስ ይጋገራሉ።',
    },
    gallery: {
      badge: 'ማዕከለ-ስዕላት',
      title: 'የኑ ካፌ ገጽታዎች',
      subtitle:
        'የካፌውን ውብ ከባቢ፣ የተዘጋጁ ምግቦችንና ልዩ የቡና አቀራረቦችን በፎቶ ይመልከቱ።',
      all: 'ሁሉም ፎቶዎች',
      allPhotos: 'ሁሉም ፎቶዎች',
      coffee: 'ቡና እና መጠጦች',
      coffeeDrinks: 'ቡና እና መጠጦች',
      food: 'ምግብ እና ጁስ',
      foodBreakfast: 'ምግብ እና ቁርስ',
      pastries: 'ዳቦ እና ኬክ',
      pastriesBakes: 'ዳቦ እና ኬክ',
      ambiance: 'የካፌው ከባቢ',
      atmosphere: 'የካፌው ከባቢ',
      clickToEnlarge: 'ፎቶውን በትልቁ ለማየት ይጫኑ',
      clickHint: 'ፎቶዎችን በትልቁ ለመመልከት ይጫኑ',
      closeLightbox: 'ዝጋ',
    },
    hours: {
      badge: 'የስራ ሰዓት',
      title: 'የስራ ሰዓታት',
      subtitle: 'በሳምንቱ ሙሉ ቀናት በአዲስ አበባ በደስታ እንቀበልዎታለን።',
      daysRange: 'ሰኞ – እሑድ (በየቀኑ)',
      timeRange: 'ከጠዋቱ 1:00 – ማታ 3:00 (7:00 AM – 9:00 PM)',
      openNow: 'አሁን ክፍት ነው',
      closedNow: 'አሁን ዝግ ነው',
      closed: 'ዝግ ነው',
      openNote: 'እንኳን ደህና መጡ! ቡድናችን እርስዎን ለማስተናገድ በደስታ ዝግጁ ነው።',
      closedNote: 'ነገ ጠዋት 1:00 ሰዓት ላይ በድጋሚ እንከፍታለን።',
      tableTitle: 'ሳምንታዊ የስራ ሰዓት ሰንጠረዥ',
      weeklySchedule: 'ሳምንታዊ የስራ ሰዓት',
      openEveryDay: 'ያለማቋረጥ በየቀኑ ክፍት ነው',
      holidayNotice: 'በአዲስ አበባ ባሉ ህዝባዊ በዓላት ቀናት ሁሉ ክፍት ነው።',
      monday: 'ሰኞ',
      tuesday: 'ማክሰኞ',
      wednesday: 'ረቡዕ',
      thursday: 'ሐሙስ',
      friday: 'አርብ',
      saturday: 'ቅዳሜ',
      sunday: 'እሑድ',
      today: 'ዛሬ',
    },
    location: {
      badge: 'አድራሻችን',
      title: 'ኑ ካፌን ይጎብኙ',
      subtitle: 'በአዲስ አበባ፣ ኢትዮጵያ ውስጥ በቀላሉ ያገኙናል።',
      addressTitle: 'መንገድ እና አድራሻ',
      addressLabel: 'አድራሻ እና አካባቢ',
      addressValue: 'VQWC+MMQ፣ አዲስ አበባ፣ ኢትዮጵያ',
      plusCodeTitle: 'የጉግል ፕላስ ኮድ (Plus Code)',
      plusCodeLabel: 'የጉግል ፕላስ ኮድ (Plus Code)',
      plusCodeValue: 'VQWC+MMQ Addis Ababa',
      getDirections: 'በጉግል ካርታ መንገድ አሳየኝ',
      openInMaps: 'በካርታ ክፈት',
      copyCode: 'ኮፒ አድርግ',
      copied: 'ኮዱ ተቀድቷል!',
      interactiveMap: 'የቀጥታ ካርታ',
      neighborhoodNote:
        'በአዲስ አበባ ኢትዮጵያ ውስጥ የሚገኝ፤ ምቹ የመኪና ማቆሚያ እና መግቢያ ያለው።',
    },
    reviews: {
      badge: 'የደንበኞች ደረጃ',
      title: 'የደንበኞች ደረጃ እና አስተያየት',
      subtitle: 'የእንግዳዎቻችንን እርካታ ከፍ ለማድረግ ለእያንዳንዱ ስኒ፣ ኬክ እና መስተንግዶ ትኩረት እንሰጣለን።',
      overallRating: 'አጠቃላይ ደረጃ',
      score: '2.8',
      outOf: 'ከ 5.0',
      reviewCountText: 'በ 4 አስተያየቶች ላይ የተመሰረተ',
      basedOnReviews: 'በተመዘገቡ 4 የደንበኞች ግምገማዎች ላይ የተመሰረተ',
      qualityCommitment: 'የጥራት ቃል ኪዳናችን',
      commitmentText: 'በመጀመሪያዎቹ 4 ግምገማዎች የተመዘገበው 2.8 ውጤት ቡድናችን ደንበኞችን ይበልጥ እንዲያዳምጥ፣ የቡና ጥራትን እንዲያሻሽልና ፈጣን መስተንግዶ እንዲሰጥ ያነሳሳናል።',
      feedbackCommitment:
        'የአገልግሎታችንን ጥራት እና የቡና አሰራራችንን ይበልጥ ለማሻሻል ለእያንዳንዱ አስተያየት ትልቅ ዋጋ እንሰጣለን።',
      feedbackBtn: 'አስተያየትዎን ያጋሩ',
      modalTitle: 'ለኑ ካፌ አስተያየት ይስጡ',
      modalSubtitle: 'አገልግሎታችንን ይበልጥ ለማሻሻል ይርዱን።',
      formTitle: 'ኑ ካፌን ጎብኝተዋል?',
      formSubtitle: 'አገልግሎታችንን ይበልጥ ለማሻሻል የእርስዎን አስተያየት ያጋሩን',
      thankYou: 'ስለ አስተያየትዎ እናመሰግናለን',
      submitAnother: 'ሌላ አስተያየት ላክ',
      yourRating: 'የእርስዎ ደረጃ',
      yourName: 'ስምዎ',
      yourReview: 'አስተያየትዎ',
      nameLabel: 'ስምዎ',
      ratingLabel: 'ደረጃ (ከ 1 እስከ 5 ኮከብ)',
      commentLabel: 'አስተያየትዎ',
      submitFeedback: 'አስተያየት ላክ',
      sendReview: 'አስተያየት ላክ',
      thankYouFeedback: 'ስለ አስተያየትዎ ከልብ እናመሰግናለን!',
    },
    contact: {
      badge: 'ያግኙን',
      title: 'ኑ ካፌን ያነጋግሩ',
      subtitle:
        'ጥያቄ፣ የቦታ ማስያዣ ወይም የቡድን ዝግጅት ካለዎት በቀጥታ ይደውሉልን ወይም መልእክት ይላኩልን።',
      directLine: 'የቀጥታ ስልክ መስመር',
      callHoursNotice: 'የአዲስ አበባ ቡድናችን በስራ ሰዓታት (ከጠዋቱ 1:00 – ማታ 3:00፣ በየቀኑ) ውስጥ ዝግጁ ነው።',
      phoneValue: '0944 067 956',
      phoneNote: 'የአዲስ አበባ ቡድናችን በስራ ሰዓታት (ከጠዋቱ 1:00 – ማታ 3:00፣ 7 ቀናት) ውስጥ ዝግጁ ነው።',
      callNuCafe: 'በ 0944 067 956 ይደውሉ',
      locationLabel: 'አድራሻ',
      locationCardTitle: 'አድራሻ',
      hoursLabel: 'የስራ ሰዓት',
      hoursCardTitle: 'የስራ ሰዓት',
      hospitalityLabel: 'መስተንግዶ',
      hospitalityCardTitle: 'መስተንግዶ',
      hospitalityCardDesc: 'ካፌ ውስጥ መመገብ፣ ይዞ መሄድ እና ጥራት ያለው ቡና',
      formTitle: 'መልእክት ይላኩ',
      formSubtitle: 'ቅጹን ይሙሉ፤ ቡድናችን በፍጥነት ምላሽ ይሰጥዎታል።',
      yourName: 'ስምዎ',
      nameLabel: 'ስምዎ',
      namePlaceholder: 'ምሳሌ፡ ዳዊት ታደሰ',
      phoneEmail: 'ስልክ ወይም ኢሜይል',
      contactLabel: 'ስልክ ወይም ኢሜይል',
      contactPlaceholder: 'ምሳሌ፡ 0911... ወይም name@email.com',
      subject: 'የጉዳዩ ርዕስ',
      topicLabel: 'የጉዳዩ ርዕስ',
      topics: {
        general: 'አጠቃላይ መረጃ እና ጥያቄ',
        reservation: 'የጠረጴዛ እና የቦታ ማስያዣ',
        takeaway: 'የይውሰዱ ቡና እና ኬኮች ትዕዛዝ',
        catering: 'ለዝግጅቶች የቡና እና ኬክ አቅርቦት',
        feedback: 'አስተያየት እና ጥቆማ',
      },
      topicGeneral: 'አጠቃላይ መረጃ እና ጥያቄ',
      topicReservation: 'የጠረጴዛ እና የቦታ ማስያዣ',
      topicCatering: 'ለዝግጅቶች ትዕዛዝ',
      topicFeedback: 'አስተያየት እና ጥቆማ',
      topicOther: 'ሌላ ጉዳይ',
      message: 'መልእክትዎ',
      messageLabel: 'መልእክትዎ',
      messagePlaceholder: 'እንዴት ልንረዳዎ እንችላለን?',
      sendBtn: 'መልእክት ይላኩ',
      sendMessage: 'መልእክት ላክ',
      sending: 'በመላክ ላይ...',
      successTitle: 'መልእክትዎ ደርሷል',
      messageDelivered: 'መልእክትዎ ደርሷል',
      successDesc: 'እናመሰግናለን። መልእክትዎ ደርሶናል፤ በፍጥነት ምላሽ እንሰጣለን።',
      sendAnother: 'ሌላ መልእክት ይላኩ',
    },
    footer: {
      tagline: '“ጥሩ ቡና። መልካም ጊዜያት።”',
      description:
        'በአዲስ አበባ የሚገኘው የእርስዎ ተወዳጅ የቡና መዳረሻ። ጥራት ያለው የኢትዮጵያ ቡና፣ ልዩ መጠጦች እና ትኩስ ኬኮች በየቀኑ ይቀርባሉ።',
      navigation: 'አሰሳ',
      navTitle: 'አሰሳ',
      businessInfo: 'የካፌው መረጃ',
      infoTitle: 'የካፌው መረጃ',
      location: 'አድራሻ',
      phone: 'ስልክ',
      hours: 'የስራ ሰዓት',
      hoursValue: 'በየቀኑ ከጠዋቱ 1:00 – ማታ 3:00',
      rating: 'ደረጃ፡ 2.8 / 5.0 (4 አስተያየቶች)',
      ratingLabel: 'ደረጃ፡ 2.8 / 5.0 (4 አስተያየቶች)',
      copyright: 'ኑ ካፌ። አዲስ አበባ፣ ኢትዮጵያ። መብቱ በህግ የተጠበቀ ነው።',
      rights: 'መብቱ በህግ የተጠበቀ ነው።',
      backToTop: 'ወደ ላይ ይመለሱ',
      directLineTag: 'አዲስ አበባ፣ ኢትዮጵያ',
    },
    floating: {
      callNuCafe: 'በ 0944 067 956 ይደውሉ',
      backToTop: 'ወደ ላይ',
    },
  },
};
