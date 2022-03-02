import { AboutInfoQuery } from "../../generated/graphql";
import { List } from "../atoms/list/List";
import CareerItem from "../molecules/CareerItem";

const CareerList = function ({ jobs }: { jobs: AboutInfoQuery["jobs"] }) {
  return (
    <List>
      {jobs.map((job) => (
        <CareerItem
          key={`${job.company}-${job.position}`}
          position={job.position}
          company={job.company}
          link={job.link || "#"}
          location={job.location}
          start={job.start}
          end={job.end}
        />
      ))}
    </List>
  );
};

export default CareerList;
