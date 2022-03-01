import { projects } from "../../../data/projects";
import { List } from "../atoms/list/List";
import ProjectItem from "../molecules/ProjectItem";

export const ProjectList = function () {
  return (
    <List>
      {projects.map(({ title, description }) => (
        <ProjectItem title={title} describe={description} key={title} />
      ))}
    </List>
  );
};
