import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircle } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return (
    <span className="fa-layers fa-4x align-top">
      <FontAwesomeIcon className="w-16 h-16 text-primary" icon={faCircle} />
      <FontAwesomeIcon className="w-6 h-6" icon={faBriefcase} />
      {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg> */}
    </span>
  );
};

const TimelineEvent = ({
  date,
  position,
  company,
  children,
}: {
  date: string;
  position: string;
  company: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="timeline-middle">
        <Icon />
      </div>
      <div className="timeline-end mb-10 ml-4">
        <div className="container lg:flex lg:flex-row-reverse justify-between">
          <div className="font-mono italic">{date}</div>
          <div>
            <div className="text-lg font-black">{position}</div>
            <div className="text-md font-black">{company}</div>
          </div>
        </div>
        <div className="divider"></div>
        {children}
      </div>
    </>
  );
};

const ExperienceTimeline = ({ id }: { id: string }) => {
  return (
    <div className="bg-base-200 scroll-mt-16" id={id}>
      <div className="container py-8 mx-auto">
        <div className="mx-4">
          <h1 className="text-5xl font-bold text-center mb-8">Experience</h1>
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical max-w-md lg:max-w-xl mx-auto">
            <li>
              <hr />
              <TimelineEvent
                date="June 2024 - Present"
                position="Software Engineer Co-Op"
                company="Alignable"
              >
                North America's largest business networking platform 
                connecting over 9 million business owners.
              </TimelineEvent>
              <hr />
            </li>
            <li>
              <hr />
              <TimelineEvent
                date="August 2024 - Present"
                position="Software Engineer"
                company="Zoltan Nagy Research Lab"
              >
                Open source developer and maintainer of the PharmaPy library.
              </TimelineEvent>
              <hr />
            </li>
            <li>
              <TimelineEvent
                date="July 2023 - September 2023"
                position="Software Engineer Intern"
                company="i4software"
              >
                i4software is a software company that focuses on developing
                mobile and web applications for clients.
              </TimelineEvent>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ExperienceTimeline;
