import { Stratagem } from "../Data";

type UpcomingStratagemProps = {
  stratagemList: Stratagem[];
};

const UpcomingStratagem = ({ stratagemList }: UpcomingStratagemProps) => {
  return (
    <div className="flex justify-center">
      {stratagemList.map(({ icon, name }, i) => (
        <div key={`stratagemList${i}`} className={`'border rounded-sm border-brightblue m-1'${i !== 0 ? ' opacity-35' : ''}`}>
          <img className="w-[40px]" key={i} src={icon} alt={name} />
        </div>
      ))}
    </div>
  );
};

export default UpcomingStratagem;
