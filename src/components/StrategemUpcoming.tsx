import { Stratagem } from "../Data";

type UpcomingStratagemProps = {
  stratagemList: Stratagem[];
};

const UpcomingStratagem = ({ stratagemList }: UpcomingStratagemProps) => {
  return (
    <div>
      {stratagemList.map(({ icon, name }, i) => (
        <img className="w-[40px]" key={i} src={icon} alt={name} />
      ))}
    </div>
  );
};

export default UpcomingStratagem;
