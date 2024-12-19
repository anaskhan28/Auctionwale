import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
//import BackgroundDots from "../Hero/BackgroundDots";

export function FAQ() {
  return (
    <>
      {/*<BackgroundDots />*/}
      <section className="bg-background text-foreground py-12 md:py-16">
        <div className="container mx-auto mt-8 max-w-4xl px-4 md:px-6 ">
          <div className="grid gap-8">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our ecommerce platform.
              </p>
            </div>
            <div className="grid gap-4">
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>How does a bank auction work?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  Bank auctions typically involve properties that have been
                  foreclosed due to defaulted loans. The bank sells these
                  properties to recover their funds. Interested buyers can bid
                  on the properties, usually at prices below market value.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>Who can participate in bank auctions?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  Generally, any individual or entity over 18 years old can
                  participate. However, some auctions may have specific
                  eligibility requirements, so it is important to check the
                  terms and conditions for each auction.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span> How do I register for an auction?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  To register, you typically need to create an account on our
                  website, provide necessary identification documents, and
                  sometimes pay a registration fee. Specific requirements may
                  vary, so please check the registration section for detailed
                  instructions.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>Can I inspect the property before bidding?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  Yes, most properties are available for inspection on specified
                  dates before the auction. Check the property listing for open
                  house dates and times.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>
                    What types of properties are usually available in bank
                    auctions?
                  </span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  Bank auctions can include a wide range of properties such as
                  residential homes, commercial buildings, land parcels, and
                  sometimes even vehicles or other assets.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>How do I place a bid?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  Bids can usually be placed online through our secure bidding
                  platform during the specified auction time. Some auctions may
                  also allow in-person or phone bidding.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>
                    Are there any additional fees beyond the winning bid?
                  </span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 leadingu-relaxed rounded-md px-4 py-3 text-sm text-gray-600">
                  Yes, there may be additional fees such as buyer&apos;s
                  premium, transfer taxes, or closing costs. These will be
                  clearly outlined in the auction terms and conditions.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="bg-muted hover:bg-muted-foreground/10 flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors">
                  <span>What if the property has existing tenants?</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/20 rounded-md px-4 py-3 text-sm leading-relaxed text-gray-600">
                  The responsibility for dealing with existing tenants usually
                  falls to the new owner. Be sure to research the local laws
                  regarding tenant rights in foreclosure situations.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
