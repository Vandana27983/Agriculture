export type Locale = 'en' | 'hi' | 'gu'

export interface TranslationEntry {
  key: string
  en: string
  hi: string
  gu: string
}

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
]

/** Default translations shipped with the site. */
export const defaultTranslations: TranslationEntry[] = [
  // ── Navigation ──
  { key: 'nav.home', en: 'Home', hi: 'होम', gu: 'હોમ' },
  { key: 'nav.about', en: 'About', hi: 'हमारे बारे में', gu: 'અમારા વિશે' },
  { key: 'nav.products', en: 'Products', hi: 'उत्पाद', gu: 'ઉત્પાદનો' },
  { key: 'nav.services', en: 'Services', hi: 'सेवाएं', gu: 'સેવાઓ' },
  { key: 'nav.gallery', en: 'Gallery', hi: 'गैलरी', gu: 'ગેલેરી' },
  { key: 'nav.blog', en: 'Blog', hi: 'ब्लॉग', gu: 'બ્લોગ' },
  { key: 'nav.contact', en: 'Contact', hi: 'संपर्क', gu: 'સંપર્ક' },

  // ── Common buttons ──
  { key: 'btn.getQuote', en: 'Get a Quote', hi: 'कोटेशन प्राप्त करें', gu: 'ક્વોટ મેળવો' },
  { key: 'btn.getInTouch', en: 'Get in touch', hi: 'संपर्क करें', gu: 'સંપર્ક કરો' },
  { key: 'btn.browseProducts', en: 'Browse products', hi: 'उत्पाद देखें', gu: 'ઉત્પાદનો જુઓ' },
  { key: 'btn.viewAllProducts', en: 'View all products', hi: 'सभी उत्पाद देखें', gu: 'બધા ઉત્પાદનો જુઓ' },
  { key: 'btn.viewAllServices', en: 'View all services', hi: 'सभी सेवाएं देखें', gu: 'બધી સેવાઓ જુઓ' },
  { key: 'btn.learnMore', en: 'Learn more', hi: 'और जानें', gu: 'વધુ જાણો' },
  { key: 'btn.contactUs', en: 'Contact us', hi: 'हमसे संपर्क करें', gu: 'અમારો સંપર્ક કરો' },
  { key: 'btn.backToHome', en: 'Back to home', hi: 'होम पेज पर वापस जाएं', gu: 'હોમ પર પાછા જાઓ' },
  { key: 'btn.backToBlog', en: 'Back to blog', hi: 'ब्लॉग पर वापस जाएं', gu: 'બ્લોગ પર પાછા જાઓ' },
  { key: 'btn.backToProducts', en: 'Back to products', hi: 'उत्पादों पर वापस जाएं', gu: 'ઉત્પાદનો પર પાછા જાઓ' },
  { key: 'btn.backToServices', en: 'Back to services', hi: 'सेवाओं पर वापस जाएं', gu: 'સેવાઓ પર પાછા જાઓ' },
  { key: 'btn.requestQuote', en: 'Request a quote', hi: 'कोटेशन का अनुरोध करें', gu: 'ક્વોટની વિનંતી કરો' },
  { key: 'btn.bookConsultation', en: 'Book a consultation', hi: 'परामर्श बुक करें', gu: 'કન્સલ્ટેશન બુક કરો' },
  { key: 'btn.clearFilters', en: 'Clear all filters', hi: 'सभी फ़िल्टर हटाएं', gu: 'બધા ફિલ્ટર સાફ કરો' },
  { key: 'btn.clearFiltersShort', en: 'Clear filters', hi: 'फ़िल्टर हटाएं', gu: 'ફિલ્ટર સાફ કરો' },

  // ── Home page ──
  { key: 'home.whyUs', en: 'Why Verdant Fields', hi: 'वर्डेंट फील्ड्स क्यों', gu: 'વર્ડન્ટ ફીલ્ડ્સ શા માટે' },
  { key: 'home.whyUsTitle', en: 'Rooted in trust, grown with science', hi: 'विश्वास में जड़ें, विज्ञान से विकास', gu: 'વિશ્વાસમાં મૂળ, વિજ્ઞાનથી વિકાસ' },
  { key: 'home.whyUsDesc', en: 'For over two decades we have helped farms thrive with quality inputs and honest, expert advice.', hi: 'दो दशकों से अधिक समय से हम गुणवत्ता और विशेषज्ञ सलाह के साथ खेतों की उन्नति में मदद कर रहे हैं।', gu: 'બે દાયકાથી વધુ સમયથી અમે ગુણવત્તાયુક્ત ઇનપુટ્સ અને નિષ્ણાત સલાહ સાથે ખેતરોની પ્રગતિમાં મદદ કરી રહ્યા છીએ.' },
  { key: 'home.whatWeOffer', en: 'What we offer', hi: 'हम क्या प्रदान करते हैं', gu: 'અમે શું ઓફર કરીએ છીએ' },
  { key: 'home.whatWeOfferTitle', en: 'Everything your farm needs', hi: 'आपके खेत की हर ज़रूरत', gu: 'તમારા ખેતરની દરેક જરૂરિયાત' },
  { key: 'home.whatWeOfferDesc', en: 'From the first seed to the final harvest, explore our full range of agricultural supplies.', hi: 'पहले बीज से अंतिम फसल तक, हमारी कृषि आपूर्ति की पूरी श्रृंखला देखें।', gu: 'પહેલા બીજથી અંતિમ લણણી સુધી, અમારી કૃષિ પુરવઠાની સંપૂર્ણ શ્રેણી જુઓ.' },
  { key: 'home.bestSellers', en: 'Best sellers', hi: 'सबसे अधिक बिकने वाले', gu: 'શ્રેષ્ઠ વિક્રેતા' },
  { key: 'home.featuredProducts', en: 'Featured products', hi: 'विशेष उत्पाद', gu: 'વિશેષ ઉત્પાદનો' },
  { key: 'home.featuredDesc', en: 'Trusted favorites that farmers come back for season after season.', hi: 'भरोसेमंद उत्पाद जिन्हें किसान हर मौसम में चुनते हैं।', gu: 'વિશ્વસનીય ઉત્પાદનો જે ખેડૂતો દરેક સીઝનમાં પસંદ કરે છે.' },
  { key: 'home.expertServices', en: 'Expert services', hi: 'विशेषज्ञ सेवाएं', gu: 'નિષ્ણાત સેવાઓ' },
  { key: 'home.servicesTitle', en: 'Guidance at every stage', hi: 'हर चरण पर मार्गदर्शन', gu: 'દરેક તબક્કે માર્ગદર્શન' },
  { key: 'home.servicesDesc', en: 'Our specialists partner with you to plan, grow, and protect a more profitable harvest.', hi: 'हमारे विशेषज्ञ आपके साथ मिलकर एक अधिक लाभदायक फसल की योजना बनाते, उगाते और उसकी रक्षा करते हैं।', gu: 'અમારા નિષ્ણાતો તમારી સાથે ભાગીદારી કરીને વધુ નફાકારક લણણીનું આયોજન, ઉછેર અને રક્ષણ કરે છે.' },
  { key: 'home.trustedBy', en: 'Trusted by farmers', hi: 'किसानों का भरोसा', gu: 'ખેડૂતોનો વિશ્વાસ' },
  { key: 'home.whatTheySay', en: 'What our clients say', hi: 'हमारे ग्राहक क्या कहते हैं', gu: 'અમારા ગ્રાહકો શું કહે છે' },
  { key: 'home.ctaTitle', en: 'Ready to grow a better harvest?', hi: 'एक बेहतर फसल उगाने के लिए तैयार हैं?', gu: 'સારી લણણી ઉગાડવા માટે તૈયાર છો?' },
  { key: 'home.ctaDesc', en: 'Talk to our team about the right products and services for your farm. We are here to help you succeed.', hi: 'अपने खेत के लिए सही उत्पादों और सेवाओं के बारे में हमारी टीम से बात करें। हम आपकी सफलता में मदद करने के लिए यहां हैं।', gu: 'તમારા ખેતર માટે યોગ્ય ઉત્પાદનો અને સેવાઓ વિશે અમારી ટીમ સાથે વાત કરો. અમે તમારી સફળતામાં મદદ કરવા અહીં છીએ.' },

  // ── Heroes ──
  { key: 'hero.homeTitle', en: 'Growing a Better Harvest', hi: 'एक बेहतर फसल उगाना', gu: 'સારી લણણી ઉગાડવી' },
  { key: 'hero.homeSubtitle', en: 'Premium farm supplies and expert agronomy services that help your farm thrive, season after season.', hi: 'प्रीमियम कृषि आपूर्ति और विशेषज्ञ कृषि सेवाएं जो आपके खेत को हर मौसम में समृद्ध बनाती हैं।', gu: 'પ્રીમિયમ કૃષિ પુરવઠો અને નિષ્ણાત કૃષિ સેવાઓ જે તમારા ખેતરને દરેક સીઝનમાં સમૃદ્ધ બનાવે છે.' },
  { key: 'hero.productsTitle', en: 'Everything your farm needs', hi: 'आपके खेत की हर ज़रूरत', gu: 'તમારા ખેતરની દરેક જરૂરિયાત' },
  { key: 'hero.productsDesc', en: 'Browse our complete range of certified seeds, fertilizers, crop protection, and farm equipment.', hi: 'प्रमाणित बीज, उर्वरक, फसल सुरक्षा और कृषि उपकरणों की हमारी पूरी श्रृंखला देखें।', gu: 'પ્રમાણિત બીજ, ખાતર, પાક સુરક્ષા અને કૃષિ સાધનોની અમારી સંપૂર્ણ શ્રેણી જુઓ.' },

  // ── Footer ──
  { key: 'footer.tagline', en: 'Premium farm supplies and expert agronomy services helping farms grow stronger, season after season.', hi: 'प्रीमियम कृषि आपूर्ति और विशेषज्ञ कृषि सेवाएं खेतों को हर मौसम में मजबूत बनाती हैं।', gu: 'પ્રીમિયમ કૃષિ પુરવઠો અને નિષ્ણાત કૃષિ સેવાઓ ખેતરોને દરેક સીઝનમાં મજબૂત બનાવે છે.' },
  { key: 'footer.explore', en: 'Explore', hi: 'अन्वेषण करें', gu: 'અન્વેષણ કરો' },
  { key: 'footer.products', en: 'Products', hi: 'उत्पाद', gu: 'ઉત્પાદનો' },
  { key: 'footer.getInTouch', en: 'Get in touch', hi: 'संपर्क करें', gu: 'સંપર્ક કરો' },
  { key: 'footer.copyright', en: '© {year} Verdant Fields. All rights reserved.', hi: '© {year} वर्डेंट फील्ड्स। सर्वाधिकार सुरक्षित।', gu: '© {year} વર્ડન્ટ ફીલ્ડ્સ. સર્વાધિકાર સુરક્ષિત.' },

  // ── About page ──
  { key: 'about.heroEyebrow', en: 'Our story', hi: 'हमारी कहानी', gu: 'અમારી વાર્તા' },
  { key: 'about.heroTitle', en: 'Rooted in the land', hi: 'धरती में जड़ें', gu: 'ધરતીમાં મૂળ' },
  { key: 'about.heroDesc', en: 'For over 25 years Verdant Fields has been a trusted partner to farmers across the country.', hi: '25 वर्षों से अधिक समय से वर्डेंट फील्ड्स देश भर के किसानों का भरोसेमंद साथी रहा है।', gu: '25 વર્ષથી વધુ સમયથી વર્ડન્ટ ફીલ્ડ્સ દેશભરના ખેડૂતોનો વિશ્વસનીય ભાગીદાર રહ્યો છે.' },

  // ── Contact page ──
  { key: 'contact.heroEyebrow', en: 'Get in touch', hi: 'संपर्क करें', gu: 'સંપર્ક કરો' },
  { key: 'contact.heroTitle', en: "We'd love to hear from you", hi: 'हमें आपसे सुनकर खुशी होगी', gu: 'અમને તમારી પાસેથી સાંભળીને આનંદ થશે' },
  { key: 'contact.heroDesc', en: 'Whether you need a quote, have a question, or want to schedule a consultation — our team is ready to help.', hi: 'चाहे आपको कोटेशन चाहिए, कोई प्रश्न हो, या परामर्श शेड्यूल करना हो — हमारी टीम मदद के लिए तैयार है।', gu: 'તમારે ક્વોટ જોઈતો હોય, પ્રશ્ન હોય, અથવા કન્સલ્ટેશન શેડ્યૂલ કરવું હોય — અમારી ટીમ મદદ માટે તૈયાર છે.' },
  { key: 'contact.address', en: '1420 Harvest Road, Greenfield, CA 93927', hi: '1420 हार्वेस्ट रोड, ग्रीनफील्ड, CA 93927', gu: '1420 હાર્વેસ્ટ રોડ, ગ્રીનફીલ્ડ, CA 93927' },
  { key: 'contact.phone', en: '+1 (800) 555-0199', hi: '+1 (800) 555-0199', gu: '+1 (800) 555-0199' },

  // ── Product detail ──
  { key: 'product.inStock', en: 'In stock', hi: 'स्टॉक में', gu: 'સ્ટોકમાં' },
  { key: 'product.outOfStock', en: 'Out of stock', hi: 'स्टॉक में नहीं', gu: 'સ્ટોકમાં નથી' },
  { key: 'product.keyFeatures', en: 'Key features', hi: 'प्रमुख विशेषताएं', gu: 'મુખ્ય લક્ષણો' },

  // ── Blog ──
  { key: 'blog.tags', en: 'Tags', hi: 'टैग', gu: 'ટૅગ્સ' },
  { key: 'blog.insights', en: 'Insights & guides', hi: 'जानकारी और गाइड', gu: 'જાણકારી અને માર્ગદર્શિકા' },
  { key: 'blog.fromTheField', en: 'From the field', hi: 'खेत से', gu: 'ખેતરમાંથી' },
  { key: 'blog.fromTheFieldDesc', en: 'Practical articles, research summaries, and expert advice to help you farm smarter.', hi: 'व्यावहारिक लेख, शोध सारांश और विशेषज्ञ सलाह जो आपको बेहतर खेती में मदद करें।', gu: 'વ્યવહારુ લેખો, સંશોધન સારાંશ અને નિષ્ણાત સલાહ જે તમને સારી ખેતીમાં મદદ કરે.' },

  // ── 404 ──
  { key: 'notFound.title', en: 'Page not found', hi: 'पेज नहीं मिला', gu: 'પેજ મળ્યું નથી' },
  { key: 'notFound.desc', en: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.", hi: 'आप जिस पेज की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है। आइए आपको सही रास्ते पर वापस ले चलते हैं।', gu: 'તમે જે પેજ શોધી રહ્યા છો તે અસ્તિત્વમાં નથી અથવા ખસેડવામાં આવ્યું છે. ચાલો તમને સાચા રસ્તે પાછા લઈ જઈએ.' },

  // ── Search / Filters ──
  { key: 'search.placeholder', en: 'Search products...', hi: 'उत्पाद खोजें...', gu: 'ઉત્પાદનો શોધો...' },
  { key: 'search.blogPlaceholder', en: 'Search articles...', hi: 'लेख खोजें...', gu: 'લેખો શોધો...' },
  { key: 'search.noProducts', en: 'No products found', hi: 'कोई उत्पाद नहीं मिला', gu: 'કોઈ ઉત્પાદન મળ્યું નથી' },
  { key: 'search.noArticles', en: 'No articles found', hi: 'कोई लेख नहीं मिला', gu: 'કોઈ લેખ મળ્યો નથી' },
  { key: 'search.tryDifferent', en: 'Try clearing filters or searching for something different.', hi: 'फ़िल्टर हटाकर या कुछ और खोजने का प्रयास करें।', gu: 'ફિલ્ટર સાફ કરીને અથવા કંઈક અલગ શોધવાનો પ્રયાસ કરો.' },
  { key: 'search.tryDifferentShort', en: 'Try different keywords or browse all categories.', hi: 'अलग कीवर्ड आज़माएं या सभी श्रेणियां ब्राउज़ करें।', gu: 'અલગ કીવર્ડ્સ અજમાવો અથવા બધી શ્રેણીઓ બ્રાઉઝ કરો.' },

  // ── Misc ──
  { key: 'misc.relatedProducts', en: 'You might also like', hi: 'आपको यह भी पसंद आ सकता है', gu: 'તમને આ પણ ગમશે' },
  { key: 'misc.relatedServices', en: 'Explore other services', hi: 'अन्य सेवाएं देखें', gu: 'અન્ય સેવાઓ જુઓ' },
  { key: 'misc.relatedPosts', en: 'Related articles', hi: 'संबंधित लेख', gu: 'સંબંધિત લેખો' },
  { key: 'misc.needHelp', en: 'Need help?', hi: 'मदद चाहिए?', gu: 'મદદ જોઈએ છે?' },
  { key: 'misc.haveQuestions', en: 'Have questions?', hi: 'कोई प्रश्न हैं?', gu: 'કોઈ પ્રશ્નો છે?' },
  { key: 'misc.letsWork', en: "Let's work together", hi: 'आइए साथ मिलकर काम करें', gu: 'ચાલો સાથે મળીને કામ કરીએ' },
  { key: 'misc.readyToStart', en: "Ready to start?", hi: 'शुरू करने के लिए तैयार हैं?', gu: 'શરૂ કરવા માટે તૈયાર છો?' },

  // ── Why Us cards ──
  { key: 'whyUs.quality', en: 'Certified Quality', hi: 'प्रमाणित गुणवत्ता', gu: 'પ્રમાણિત ગુણવત્તા' },
  { key: 'whyUs.qualityDesc', en: 'Every product is tested and certified to deliver consistent, reliable performance in your fields.', hi: 'हर उत्पाद परीक्षण और प्रमाणित है ताकि आपके खेतों में लगातार, विश्वसनीय प्रदर्शन मिले।', gu: 'દરેક ઉત્પાદન પરીક્ષણ અને પ્રમાણિત છે જેથી તમારા ખેતરોમાં સતત, વિશ્વસનીય પ્રદર્શન મળે.' },
  { key: 'whyUs.sustainable', en: 'Sustainable Practices', hi: 'टिकाऊ प्रथाएं', gu: 'ટકાઉ પ્રથાઓ' },
  { key: 'whyUs.sustainableDesc', en: 'We champion regenerative methods that protect your land for generations to come.', hi: 'हम पुनर्योजी विधियों का समर्थन करते हैं जो आपकी भूमि की आने वाली पीढ़ियों के लिए रक्षा करती हैं।', gu: 'અમે પુનર્જીવિત પદ્ધતિઓને સમર્થન આપીએ છીએ જે આવનારી પેઢીઓ માટે તમારી જમીનનું રક્ષણ કરે છે.' },
  { key: 'whyUs.expert', en: 'Expert Guidance', hi: 'विशेषज्ञ मार्गदर्शन', gu: 'નિષ્ણાત માર્ગદર્શન' },
  { key: 'whyUs.expertDesc', en: 'Our agronomists work alongside you with data-driven advice tailored to your farm.', hi: 'हमारे कृषि विशेषज्ञ आपके खेत के अनुरूप डेटा-आधारित सलाह के साथ आपके साथ काम करते हैं।', gu: 'અમારા કૃષિ નિષ્ણાતો તમારા ખેતરને અનુરૂપ ડેટા-આધારિત સલાહ સાથે તમારી સાથે કામ કરે છે.' },
  { key: 'whyUs.delivery', en: 'Reliable Delivery', hi: 'विश्वसनीय डिलीवरी', gu: 'વિશ્વસનીય ડિલિવરી' },
  { key: 'whyUs.deliveryDesc', en: 'Dependable nationwide logistics get your supplies where they need to be, on time.', hi: 'भरोसेमंद राष्ट्रव्यापी लॉजिस्टिक्स आपकी आपूर्ति को समय पर वहां पहुंचाते हैं जहां उनकी जरूरत है।', gu: 'વિશ્વસનીય રાષ્ટ્રવ્યાપી લોજિસ્ટિક્સ તમારા પુરવઠાને સમયસર ત્યાં પહોંચાડે છે જ્યાં તેની જરૂર છે.' },
]

/**
 * Look up a single translation by key and locale.
 * Returns the key itself if not found (graceful fallback).
 */
export function t(
  entries: TranslationEntry[],
  key: string,
  locale: Locale,
  replacements?: Record<string, string>,
): string {
  const entry = entries.find((e) => e.key === key)
  let text = entry ? entry[locale] : key
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(`{${k}}`, v)
    }
  }
  return text
}
