import AboutComponent from "@/components/navbar/about/AboutComponent";
import EventComponent from "@/components/navbar/event/EventComponent";

export default function Homepage() {
  return (
    <>
    <section lang="km" className="flex flex-col gap-4 items-center">

      <p>This is Homepage</p>

      <p>
        Elizabeth Joe គឺជាអ្នកសកម្មក្នុងវិស័យឧស្សាហកម្ម ស្រ្តីដែលបង្កើតរបស់ជាច្រើន គាត់ជា អ្នកផ្តល់ជំនួយដល់ជំនួយដ៏ធំដល់អ្នកដទៃ គាត់ក៏ជាមនុស្សម្នាក់ ដែលស្រឡាញវិជ្ជាសាស្រ្ត ពិភពលោក ផងដែរ🌍។គាត់គឺជាស្ថាបត្យករ GreenFuture Innovations ដែលពេញនិយមសម្រាប់ការបង្កើតដំណោះស្រាយមិត្តភាពដូចជា គ្រឿងពិនិត្យការពុលអាកាសដែលប្រើថាមពលព្រះអាទិត្យ។
        គាត់ក៏ជាកម្មសិក្ខារ EmpowerHer Foundation ដែលគាំទ្រស្រ្តីក្នុងវិស័យ STEM តាមរយៈទទួល​អាហារូបករណ៍ និង ការបណ្ដុះបណ្ដាលផ្សេង 💡។ គាត់ក៏បានសរសេរសៀវភៅ Sustainability Starts With You ដែលជាសៀវភៅបង្ហាញបុគ្គលភាពទៅកាន់ការរស់នៅ ក្នុងរបរិស្ថានតែមួយ។
        ក្នុងពេលសំរាករបស់នាង Elizabeth មានការចូលរួមក្នុងការឆ្លងកាត់ភ្នំ គំនូរ និងចំណាយពេលជាមួយឆ្មារបស់នាង ​🐾
        តែពេលនេះគាត់ពិតត្រូវការ  ជួយពីអ្នកទាំងអស់យ៉ាងក្រៃឡេង ដោយសារគាត់បានជួបជាមួយនិង
        ឧបទ្ទវហេតុក្នុងគ្រោះថ្នាក់ចរាចរណ៍ ពេលនេះគាត់កំពុងត្រូវអ្នកទាំងអស់គ្នា ដើ់ម្បីបន្តនិងសេចក្តីសង្ឈឹមនូវជិវិតរបស់គាត់។   
      </p>
      
    </section>

    {/*// Componnet  */}

    <section>

      {/* <AboutComponent></AboutComponent> */}

      <EventComponent></EventComponent>

    </section>
    </>
  );
}
