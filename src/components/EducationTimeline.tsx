import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCircle } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return (
    <>
      {/*<svg
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
  </svg>*/}
      <span className="fa-layers fa-4x align-top">
        <FontAwesomeIcon className="w-16 h-16 text-primary" icon={faCircle} />
        <FontAwesomeIcon className="w-6 h-6" icon={faPencil} />
      </span>
    </>
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
        <div className="container lg:flex lg:flex-row-reverse justify-between gap-4">
          <div className="font-mono italic shrink-0">{date}</div>
          <div>
            <div className="text-lg font-black shrink">{position}</div>
            <div className="text-md font-black">{company}</div>
          </div>
        </div>
        <div className="divider"></div>

        {children}
      </div>
    </>
  );
};

const EducationTimeline = ({ id }: { id: string }) => {
  return (
    <div className="bg-base-200 scroll-mt-16" id={id}>
      <div className="container py-8 mx-auto">
        <div className="mx-4">
          <h1 className="text-5xl font-bold text-center mb-8">Education</h1>
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical max-w-md lg:max-w-xl mx-auto">
            <li>
              <TimelineEvent
                date="August 2022 - Present"
                position="Bachelor of Science in Computer Science"
                company="Purdue University"
              >
                Majored in Computer Science with a focus in Software Engineering
                and a minor in Mathematics.
              </TimelineEvent>
              <hr />
            </li>
            <li>
              <hr />
              <TimelineEvent
                date="August 2018 - May 2022"
                position="High School Diploma"
                company="Glenbard North High School"
              >
                Graduated from Glenbard North High School and received the
                Illinois State Scholar Award.
              </TimelineEvent>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default EducationTimeline;
