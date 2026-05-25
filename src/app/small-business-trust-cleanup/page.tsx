import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import CrisisCoreVisualStrip from "@/components/CrisisCoreVisualStrip";

export default function SmallBusinessCleanup() {
  return (
    <div className="py-12">
      <Panel className="p-8">
        <div className="cc-kicker">Small business website trust cleanup</div>
        <h1 className="mt-3 cc-hero-title">Fast trust fixes for local services</h1>
        <p className="mt-4 text-sm text-white/74">A focused 30–90 minute inspection of your public website and booking flows. I identify the top 3 issues preventing customers from calling, booking, or converting.</p>
        <div className="mt-6">
          <Button href="/trust-risk-read#small-business-trust-surface">Send your site (Gmail)</Button>
          <Button href="/services" variant="ghost" className="ml-3">See services</Button>
        </div>

        <div className="mt-6">
          <CrisisCoreVisualStrip />
        </div>
      </Panel>
    </div>
  );
}
