import { format, parseISO, intervalToDuration, formatDuration } from "date-fns";
import styled from "styled-components";

import HyperLink from "../atoms/HipperLink";
import { ItemDescription } from "../atoms/list/ItemDescription";
import { ItemTitle } from "../atoms/list/ItemTitle";
import { ListItem } from "../atoms/list/ListItem";

const Position = styled.span`
  text-transform: uppercase;
  font-size: 18px;
`;

type Props = {
  position: string;
  company: string;
  link: string;
  location: string;
  start: string;
  end?: string;
};

const CareerItem = function (props: Props) {
  const { position, company, location, start, link, end = null } = props;

  const formattedStart = format(parseISO(start), "MMM yyyy");
  const formattedEnd = end ? format(parseISO(end), "MMM yyyy") : "Present";

  const duration = intervalToDuration({
    start: parseISO(start),
    end: end ? parseISO(end) : new Date(),
  });

  duration.months =
    (duration.days || 0) > 20 ? duration.months! + 1 : duration.months;

  const formattedDuration = formatDuration(duration, {
    format: ["years", "months"],
  });

  return (
    <ListItem>
      <ItemTitle>
        <Position>{position}</Position> at{" "}
        <HyperLink href={link} target="_blank" rel="noreferrer">
          {company}
        </HyperLink>{" "}
      </ItemTitle>
      <ItemDescription>
        {location}
        <br />
        {formattedStart} - {formattedEnd} . {formattedDuration}
      </ItemDescription>
    </ListItem>
  );
};

export default CareerItem;
