import { dioliving, hippo, homenliving, ilios, melandas } from "../assets";
const Clients = () => {
  const clients = [hippo, homenliving, ilios, dioliving, melandas];
  return (
    <div className="flex justify-center md:justify-between px-24 flex-wrap">
      {clients &&
        clients.map((client, idx) => (
          <img key={idx} src={client} alt="" className="w-a uto md:w-100" />
        ))}
    </div>
  );
};

export default Clients;
