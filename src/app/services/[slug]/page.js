import IncomeTaxAudit from '@/components/services/IncomeTaxAudit';
import CompanyAudit from '@/components/services/CompanyAudit';
import CompanyIncorporation from '@/components/services/CompanyIncorporation';
import Gst from '@/components/services/Gst-e-Filing';
import LLPIncorporation from '@/components/services/LLPIncorporation';
import PFESICRegistration from '@/components/services/PF-and-esic-Registion';
import TdsReturns from '@/components/services/tds-preparation-and-e-filing';
import Accounting from '@/components/services/Accounting';
import DigitalSignature from '@/components/services/Digital-signature';
import FoodLicensePage from '@/components/services/FoodLicense';
import PanApplication from '@/components/services/pan-application';
import GstRagistration from '@/components/services/Gst-Registration';
import IncomeTax from '@/components/services/IncomeTax-e-filing';
import Partnershipe from '@/components/services/Partnership-firm-registration';
import ProfessionalTax from '@/components/services/Professional-Tax';
import ProjectRepot from '@/components/services/Project-report';
import Roccompliances from '@/components/services/roc-compliances';
import ShopAct from '@/components/services/shop-act-license';
import TanApplication from '@/components/services/tan-application';
import Trademark from '@/components/services/trademark-registration';
import UdyamRagistration from '@/components/services/udyam-registration';
import HireAnAccountant from '@/components/services/hire-an-accountant';


export default function ServicePage({ params }) {
  const { slug } = params;   

  switch (slug) {
    case 'income-tax-audit':
      return <IncomeTaxAudit />;
    case 'company-audit':
      return <CompanyAudit />;
    case 'company-incorporation':
      return <CompanyIncorporation />;
    case 'gst-e-filing':
      return <Gst />;
    case 'llp-incorporation':
      return <LLPIncorporation />;
    case 'pf-and-esic-registration':
      return <PFESICRegistration />;
    case 'tds-preparation-and-e-filing':
      return <TdsReturns />;
    case 'accounting':
      return <Accounting />;
    case 'digital-signature':
      return <DigitalSignature />;
    case 'food-license':
      return <FoodLicensePage />;
    case 'pan-application':
      return <PanApplication />;
    case 'gst-registration':
      return <GstRagistration />;
    case 'income-tax-e-filing':
      return <IncomeTax />;
    case 'partnership-firm-registration':
      return <Partnershipe />;
    case 'professional-tax':
      return <ProfessionalTax />;
    case 'project-report':
      return <ProjectRepot/>;
    case 'roc-compliances':
      return <Roccompliances/>;
    case 'shop-act-license':
      return <ShopAct/>;
    case 'tan-application':
      return <TanApplication/>;
    case 'trademark-registration':
      return <Trademark/>;
    case 'udyam-registration':
      return <UdyamRagistration/>
    case 'hire-an-accountant':
      return <HireAnAccountant/>


    default:
      return (
        <div className="p-10 text-center text-red-500">
          Service not found
        </div>
      );
  }
}
