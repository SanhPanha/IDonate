import { OrganizationInfoForm } from "@/components/form-organization/organization-info-form";
import { OrganizationAddressForm } from "./organization-address-form";
import { OrganizationBioForm } from "./organization-bio-form";
import { OrganizationPaymentForm } from "./organization-payment-form";

export function OrganizationProfileComponent (){
    return (
        <section className="w-full flex flex-col gap-6 rounded-lg border-2 border-iDonate-navy-accent shadow-light">

            <div className="w-full flex flex-col gap-6 px-20 py-12">
                <OrganizationInfoForm />

                <OrganizationAddressForm />

                <OrganizationBioForm />

                <OrganizationPaymentForm />
            </div>
            
        </section>
    )
}