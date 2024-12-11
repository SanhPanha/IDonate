import { OrganizationEventCard } from "@/components/organization/card/event-organization-card";
import { OrganizationEventType } from "@/difinitions/types/events/Organization-event";
import events from "@/data/organizaation-event-data.json"

export default function Contributor() {
 
  const typedEvents: OrganizationEventType[] = events.slice(0,3);

    return (
      <section lang="km" className="flex flex-col p-9 gap-6">
        <OrganizationEventCard events={typedEvents}/>
      </section>
    );
  }