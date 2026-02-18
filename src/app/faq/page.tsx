import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is TaxTally?",
      answer: "TaxTally is a comprehensive tax management platform designed to simplify tax filing, calculations, and compliance for individuals and businesses. Our platform helps you manage taxes efficiently with automated calculations and expert support."
    },
    {
      question: "How do I get started with TaxTally?",
      answer: "Getting started is easy! Simply sign up for an account, choose a plan that fits your needs, and follow the guided setup process. Our onboarding wizard will help you configure your tax profile in minutes."
    },
    {
      question: "What types of taxes can TaxTally handle?",
      answer: "TaxTally supports a wide range of tax types including income tax, sales tax, payroll tax, VAT, and more. Our platform is regularly updated to reflect the latest tax regulations and forms."
    },
    {
      question: "Is my data secure with TaxTally?",
      answer: "Absolutely. We use bank-level encryption to protect your data, comply with industry security standards, and never share your information without your explicit consent. Your financial data is stored in secure, redundant servers."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle. We prorate charges when upgrading mid-cycle."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple support channels including email support for all users, priority support for Pro and Enterprise customers, and dedicated account managers for Enterprise clients. Our help center also contains extensive documentation and video tutorials."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Can I export my tax data?",
      answer: "Yes, TaxTally allows you to export your data in various formats including PDF, CSV, and Excel. You can also generate comprehensive reports for your records or to share with your accountant."
    },
    {
      question: "How often are tax rates and regulations updated?",
      answer: "Our team monitors tax law changes continuously. We update our platform as soon as new regulations are enacted, typically within 24-48 hours of official announcements. All users automatically receive these updates at no extra cost."
    },
    {
      question: "Is there a limit to how many tax filings I can do?",
      answer: "It depends on your plan. The Free plan allows up to 10 tax filings per month, the Pro plan offers unlimited filings, and Enterprise customers get unlimited filings plus additional features for large volumes."
    },
    {
      question: "Do you integrate with accounting software?",
      answer: "Yes! TaxTally integrates with popular accounting platforms like QuickBooks, Xero, FreshBooks, and many others. Enterprise customers also get API access for custom integrations with their existing systems."
    },
    {
      question: "What happens if I miss a tax deadline?",
      answer: "While we can't prevent penalties from tax authorities, TaxTally helps you stay on track with automated deadline reminders, filing alerts, and the ability to file extensions when needed. Our Pro and Enterprise plans include more advanced reminder systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about TaxTally
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">Q:</span>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-green-600 font-bold mr-3">A:</span>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}