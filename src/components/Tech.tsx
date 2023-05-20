type Props = {
  techs?: string;
};

const Tech = ({ techs }: Props) => {
  return (
    <div className=" flex justify-evenly ">
      <img key={techs} src={techs} className="]flex justify-center " alt="" />
    </div>
  );
};

export default Tech;
