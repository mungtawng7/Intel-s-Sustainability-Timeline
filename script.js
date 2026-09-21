// Intel Sustainability Timeline - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Switch between left-to-right English and right-to-left Arabic layout.
  const directionToggle = document.getElementById('directionToggle');
  const translations = {
    en: {
      logoTagline: 'Sustainability Journey', home: 'Home', timeline: 'Timeline', impactMetrics: 'Impact Metrics', pledge: '2040 Pledge',
      arabic: 'عربي', english: 'EN', badge: 'Commitment to Earth & Innovation', heroTitle: 'Sustainability Through the Ages',
      heroSubtitle: "Explore Intel's historic milestones and future targets as we engineer tech solutions that restore our planet, reduce carbon footprints, and empower sustainable manufacturing worldwide.",
      exploreTimeline: 'Explore Timeline', viewImpact: 'View Impact', filterGoals: 'Filter Goals:', allGoals: 'All Goals',
      energyNetZero: 'Energy & Net-Zero', waterConservation: 'Water Conservation', circularEconomy: 'Circular Economy',
      milestones: 'Milestones & Future Goals', milestonesIntro: 'Hover over cards or tap to discover how Intel is driving environmental leadership.',
      energyEfficiency: 'Energy Efficiency', achieved: 'Achieved', energyStar: 'Energy Star Pioneering',
      energyStarSummary: 'Intel partnered with the EPA to develop Energy Star standards for personal computers, launching low-power sleep mode CPU architectures.',
      energyStarDetail1: 'Reduced idle power draw by over 60%.', energyStarDetail2: 'Established initial eco-standards for computing silicon.',
      waterRestoration: 'Water Restoration', riseGoals: 'RISE 2020 Goals & Water Savings',
      riseSummary: 'Achieved 100% net positive water restoration across multiple manufacturing sites and restored billions of gallons of freshwater to local watersheds.',
      riseDetail1: '7.1 Billion gallons of water conserved.', riseDetail2: 'In-house water reclamation plants built globally.',
      renewablePower: 'Renewable Power', inProgress: 'In Progress', renewableElectricity: '100% Renewable Electricity',
      renewableSummary: 'Targeting 100% renewable electricity usage across global operations and zero waste to landfills across semiconductor fabrication plants.',
      renewableDetail1: '93% achieved as of recent reporting.', renewableDetail2: 'Solar arrays & wind purchase agreements expanded.',
      netZeroGhg: 'Net-Zero GHG', futureTarget: 'Future Target', netZeroTitle: 'Net-Zero Greenhouse Gas Emissions',
      netZeroSummary: 'Committed to reaching net-zero greenhouse gas emissions (Scope 1 and Scope 2) across all global operations by 2040.',
      netZeroDetail1: 'Investing $300M+ in energy efficiency projects.', netZeroDetail2: 'Ultra-low carbon chip manufacturing technologies.',
      impactTitle: 'Impact by the Numbers', impactIntro: 'Measurable progress toward sustainable computing and environmental stewardship.',
      metricRenewable: 'Renewable Electricity Globally', metricWater: 'Gallons Water Restored Annually', metricWaste: 'Manufacturing Waste Recycled', metricNetZero: 'Net-Zero GHG Emissions Commitment',
      stayConnected: 'Stay connected', newsletterTitle: 'Get the next sustainability milestone', newsletterIntro: "Receive occasional updates about Intel's environmental progress, research, and future goals.",
      emailLabel: 'Email address', emailHint: "We'll only use this to send sustainability updates.", subscribe: 'Subscribe',
      footerNote: 'Scroll to view timeline | Hover over cards to learn more!', footerCopy: '© Intel Sustainability Initiative. Built with HTML5, CSS Flexbox & Responsive Design.', invalidEmail: 'Enter a valid email address to subscribe.', subscribed: 'Thanks for subscribing to the sustainability newsletter.'
    },
    ar: {
      logoTagline: 'رحلة الاستدامة', home: 'الرئيسية', timeline: 'الخط الزمني', impactMetrics: 'مؤشرات الأثر', pledge: 'تعهد 2040',
      arabic: 'العربية', english: 'الإنجليزية', badge: 'التزامنا بالأرض والابتكار', heroTitle: 'الاستدامة عبر العصور',
      heroSubtitle: 'اكتشف محطات إنتل التاريخية وأهدافها المستقبلية في تطوير حلول تقنية تحمي كوكبنا وتقلل البصمة الكربونية وتمكّن التصنيع المستدام حول العالم.',
      exploreTimeline: 'استكشف الخط الزمني', viewImpact: 'عرض الأثر', filterGoals: 'تصفية الأهداف:', allGoals: 'كل الأهداف',
      energyNetZero: 'الطاقة وصافي الصفر', waterConservation: 'الحفاظ على المياه', circularEconomy: 'الاقتصاد الدائري',
      milestones: 'المحطات والأهداف المستقبلية', milestonesIntro: 'مرر فوق البطاقات أو اضغط عليها لاكتشاف جهود إنتل في الريادة البيئية.',
      energyEfficiency: 'كفاءة الطاقة', achieved: 'مُنجز', energyStar: 'الريادة في Energy Star',
      energyStarSummary: 'تعاونت إنتل مع وكالة حماية البيئة لتطوير معايير Energy Star لأجهزة الكمبيوتر، وأطلقت بنيات معالجات منخفضة الطاقة.',
      energyStarDetail1: 'خفض استهلاك الطاقة في وضع الخمول بأكثر من 60٪.', energyStarDetail2: 'وضع المعايير البيئية الأولى لشرائح الحوسبة.',
      waterRestoration: 'استعادة المياه', riseGoals: 'أهداف RISE 2020 وتوفير المياه',
      riseSummary: 'حققت استعادة صافية إيجابية للمياه بنسبة 100٪ في مواقع تصنيع متعددة، واستعادت مليارات الجالونات من المياه العذبة إلى مستجمعات المياه المحلية.',
      riseDetail1: 'الحفاظ على 7.1 مليار جالون من المياه.', riseDetail2: 'إنشاء محطات لمعالجة المياه وإعادة استخدامها حول العالم.',
      renewablePower: 'الطاقة المتجددة', inProgress: 'قيد التنفيذ', renewableElectricity: 'كهرباء متجددة بنسبة 100٪',
      renewableSummary: 'نستهدف استخدام الكهرباء المتجددة بنسبة 100٪ في عملياتنا العالمية وتحقيق صفر نفايات إلى مدافن النفايات في مصانع أشباه الموصلات.',
      renewableDetail1: 'تحقيق 93٪ وفقاً لأحدث التقارير.', renewableDetail2: 'توسيع صفائف الطاقة الشمسية واتفاقيات شراء طاقة الرياح.',
      netZeroGhg: 'صافي صفر لانبعاثات الغازات الدفيئة', futureTarget: 'هدف مستقبلي', netZeroTitle: 'صافي صفر لانبعاثات غازات الدفيئة',
      netZeroSummary: 'الالتزام بتحقيق صافي صفر لانبعاثات غازات الدفيئة من النطاقين الأول والثاني في جميع عملياتنا العالمية بحلول عام 2040.',
      netZeroDetail1: 'استثمار أكثر من 300 مليون دولار في مشاريع كفاءة الطاقة.', netZeroDetail2: 'تقنيات تصنيع شرائح منخفضة الكربون للغاية.',
      impactTitle: 'الأثر بالأرقام', impactIntro: 'تقدم قابل للقياس نحو حوسبة مستدامة وإدارة مسؤولة للبيئة.',
      metricRenewable: 'الكهرباء المتجددة عالمياً', metricWater: 'جالونات المياه المستعادة سنوياً', metricWaste: 'نفايات التصنيع المعاد تدويرها', metricNetZero: 'الالتزام بصافي صفر لانبعاثات الغازات الدفيئة',
      stayConnected: 'ابقَ على اتصال', newsletterTitle: 'احصل على آخر محطات الاستدامة', newsletterIntro: 'تلقى تحديثات دورية عن التقدم البيئي والأبحاث والأهداف المستقبلية لدى إنتل.',
      emailLabel: 'عنوان البريد الإلكتروني', emailHint: 'سنستخدمه فقط لإرسال تحديثات الاستدامة.', subscribe: 'اشترك',
      footerNote: 'مرر لعرض الخط الزمني | مرر فوق البطاقات لمعرفة المزيد!', footerCopy: '© مبادرة إنتل للاستدامة. تم البناء باستخدام HTML5 وCSS Flexbox وتصميم متجاوب.', invalidEmail: 'أدخل عنوان بريد إلكتروني صالحاً للاشتراك.', subscribed: 'شكراً لاشتراكك في النشرة الإخبارية للاستدامة.'
    }
  };

  function setLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = translations[language][element.dataset.i18n];
    });
    if (newsletterEmail) {
      newsletterEmail.placeholder = language === 'ar' ? 'you@example.com' : 'you@example.com';
    }
    document.querySelector('.mobile-menu-btn')?.setAttribute('aria-label', language === 'ar' ? 'فتح قائمة التنقل' : 'Toggle Navigation Menu');
  }

  if (directionToggle) {
    directionToggle.addEventListener('click', () => {
      const isArabic = document.documentElement.dir !== 'rtl';
      const language = isArabic ? 'ar' : 'en';
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      setLanguage(language);
      directionToggle.setAttribute('aria-pressed', String(isArabic));
      directionToggle.setAttribute(
        'aria-label',
        isArabic ? 'التبديل إلى الإنجليزية واتجاه الكتابة من اليسار إلى اليمين' : 'Switch to Arabic right-to-left layout'
      );
    });
  }

  // Category Filtering Interactivity
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.timeline-card');

  filterBtns.forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');

    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      // Add active to clicked button
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
          card.removeAttribute('aria-hidden');
          card.style.animation = 'fadeIn 0.4s ease forward';
        } else {
          card.classList.add('hidden');
          card.setAttribute('aria-hidden', 'true');
        }
      });
    });
  });

  // Metric Animated Counter on Scroll
  const metricNumbers = document.querySelectorAll('.metric-number');
  let animated = false;

  function animateMetrics() {
    const metricsSection = document.getElementById('metrics');
    if (!metricsSection) return;

    const rect = metricsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && !animated) {
      animated = true;
      metricNumbers.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'), 10);
        const text = metric.innerText;
        const suffix = text.replace(/[0-9]/g, ''); // Extract %, B+, etc.
        let current = 0;
        const increment = Math.ceil(target / 40);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          metric.innerText = current + suffix;
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', animateMetrics);
  animateMetrics(); // Check on initial page load

  // Newsletter form validation and confirmation.
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const emailError = document.getElementById('emailError');
  const formStatus = document.getElementById('formStatus');

  if (newsletterForm && newsletterEmail && emailError && formStatus) {
    newsletterForm.addEventListener('submit', event => {
      event.preventDefault();
      const email = newsletterEmail.value.trim();

      if (!newsletterEmail.validity.valid || !email) {
        newsletterEmail.setAttribute('aria-invalid', 'true');
        emailError.textContent = translations[document.documentElement.lang].invalidEmail;
        formStatus.textContent = '';
        newsletterEmail.focus();
        return;
      }

      newsletterEmail.removeAttribute('aria-invalid');
      emailError.textContent = '';
      formStatus.textContent = translations[document.documentElement.lang].subscribed;
      newsletterForm.reset();
    });

    newsletterEmail.addEventListener('input', () => {
      newsletterEmail.removeAttribute('aria-invalid');
      emailError.textContent = '';
    });
  }
});
