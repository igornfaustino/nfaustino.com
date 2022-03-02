import { AboutInfoQuery } from "../../generated/graphql";
import { List } from "../atoms/list/List";
import EducationItem from "../molecules/EducationItem";

const EducationList = function ({
  education,
}: {
  education: AboutInfoQuery["educations"];
}) {
  return (
    <List>
      {education.map((education) => (
        <EducationItem
          key={`${education.school}-${education.course}`}
          course={education.course}
          school={education.school}
          location={education.location}
          startYear={education.startYear.toString()}
          endYear={education.endYear?.toString()}
        />
      ))}
    </List>
  );
};

export default EducationList;
