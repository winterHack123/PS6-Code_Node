import { group } from "@/detail";

    const Page = () => {
      // Find the DSA group
      const dsaGroup = group.find((g) => g.name === "DSA");
    
      return (
        <div>
          <h1>Members of Group:</h1>
          <ul>
            {dsaGroup && dsaGroup.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Page;
