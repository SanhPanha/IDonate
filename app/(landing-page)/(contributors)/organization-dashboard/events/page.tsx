import { OrganizationEventCard } from "@/components/organization/card/event-organization-card";
import events from "@/data/organizaation-event-data.json"
import { OrganizationEventType } from "@/difinitions/dto/Organization-event";

export default function Contributor() {
 
  const typedEvents: OrganizationEventType[] = events.slice(0,3);

    return (
      <section lang="km" className="flex flex-col p-9 gap-6">
        <OrganizationEventCard events={typedEvents}/>
      </section>
    );
  }